/* Byte ranges for the videos. Cloudflare Pages always answers static files
   with the whole file, so browsers cannot seek and Safari may refuse to play. */

const HEADERS = {
  "Accept-Ranges": "bytes",
  "Cache-Control": "public, max-age=31536000, immutable",
  "Content-Type": "video/mp4",
  "X-Content-Type-Options": "nosniff",
};

// Returns [start, end], null for "send the whole file", or "invalid"
function parseRange(header, size) {
  const match = /^bytes=(\d*)-(\d*)$/.exec((header || "").trim());
  if (!match || (!match[1] && !match[2])) return null; // includes multi-range
  if (!match[1]) {
    const suffix = Number(match[2]);
    return suffix > 0 ? [Math.max(0, size - suffix), size - 1] : "invalid";
  }
  const start = Number(match[1]);
  const end = match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
  return start < size && start <= end ? [start, end] : "invalid";
}

export async function onRequest({ request, env, next }) {
  const url = new URL(request.url);
  if (!url.pathname.endsWith(".mp4")) return next();
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } });
  }

  const asset = await env.ASSETS.fetch(new Request(url.origin + url.pathname));
  if (!asset.ok) return asset;

  const etag = asset.headers.get("ETag");
  const headers = new Headers(HEADERS);
  if (etag) headers.set("ETag", etag);

  const data = await asset.arrayBuffer();
  const size = data.byteLength;
  const ifRange = request.headers.get("If-Range");
  const useRange = request.method === "GET" && (!ifRange || ifRange === etag);
  const range = useRange ? parseRange(request.headers.get("Range"), size) : null;

  if (range === "invalid") {
    headers.set("Content-Range", `bytes */${size}`);
    return new Response(null, { status: 416, headers });
  }
  if (!range) {
    headers.set("Content-Length", String(size));
    return new Response(request.method === "HEAD" ? null : data, { headers });
  }

  const [start, end] = range;
  headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  headers.set("Content-Length", String(end - start + 1));
  return new Response(data.slice(start, end + 1), { status: 206, headers });
}
