"""Local preview server for bohdan.work (v2) with the same caching and
security headers as production. Serves the public/ folder.

HTML is revalidated on every visit (cheap 304s), everything else is cached
for a year: CSS, JS and icons carry a ?v= version and images get a new file
name when they change, so a cached copy is never stale.
"""
import http.server, os, sys

LONG = "public, max-age=31536000, immutable"

def _security_headers():
    # read the same rules the host uses, from public/_headers (the "/*" block)
    out, block = {}, False
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "_headers")
    for line in open(path, encoding="utf-8"):
        if not line.strip() or line.startswith("#"):
            block = False if not line.strip() else block
            continue
        if not line.startswith(" "):
            block = line.strip() == "/*"
            continue
        if block and ":" in line:
            k, v = line.strip().split(":", 1)
            if k.lower() != "strict-transport-security":  # HTTPS only, not on localhost
                out[k.strip()] = v.strip().replace("; upgrade-insecure-requests", "")
    return out

SECURITY = _security_headers()
SHORT = "no-cache"

class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {**http.server.SimpleHTTPRequestHandler.extensions_map,
                      ".webp": "image/webp", ".woff2": "font/woff2", ".js": "text/javascript",
                      ".svg": "image/svg+xml", ".mp4": "video/mp4"}

    def end_headers(self):
        path = self.path.split("?")[0]
        name = os.path.basename(path)
        if path.endswith("/") or name.endswith((".html", ".txt", ".xml")) or "." not in name:
            self.send_header("Cache-Control", SHORT)
        else:
            self.send_header("Cache-Control", LONG)
        for k, v in SECURITY.items():
            self.send_header(k, v)
        super().end_headers()

    def send_head(self):
        # Byte ranges, so the video can seek (production hosts do this too)
        rng = self.headers.get("Range")
        path = self.translate_path(self.path)
        if not rng or not os.path.isfile(path):
            return super().send_head()
        size = os.path.getsize(path)
        try:
            start_s, end_s = rng.replace("bytes=", "").split("-", 1)
            start = int(start_s) if start_s else max(0, size - int(end_s))
            end = int(end_s) if (end_s and start_s) else size - 1
            end = min(end, size - 1)
            if start > end:
                raise ValueError
        except ValueError:
            self.send_error(416)
            return None
        f = open(path, "rb")
        f.seek(start)
        self.send_response(206)
        self.send_header("Content-Type", self.guess_type(path))
        self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.send_header("Content-Length", str(end - start + 1))
        self.send_header("Accept-Ranges", "bytes")
        self.end_headers()
        self._remaining = end - start + 1
        return f

    def copyfile(self, source, outputfile):
        left = getattr(self, "_remaining", None)
        if left is None:
            return super().copyfile(source, outputfile)
        while left > 0:
            chunk = source.read(min(65536, left))
            if not chunk:
                break
            outputfile.write(chunk)
            left -= len(chunk)
        self._remaining = None

    def log_message(self, *args):
        pass

if __name__ == "__main__":
    os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), "public"))
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8001
    print(f"bohdan.work preview: http://localhost:{port}  (video seeking on, Ctrl+C to stop)")
    http.server.ThreadingHTTPServer(("", port), Handler).serve_forever()
