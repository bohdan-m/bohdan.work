# bohdan.work (v2)

`public/` is the website: upload exactly this folder to the host (Cloudflare Pages or Netlify). Everything outside it is for working on the site and is never published.

## Preview

Run `python serve.py`, then open http://localhost:8001. It serves the site with the same cache and security headers as production.

## What is in public/

- `_headers`: cache rules and security headers (CSP, HSTS, frame and permission policies).
- `assets/js/config.js`: the booking link, email and LinkedIn URL.
- `assets/video/spendsplif-en.vtt`: English subtitles for the SpendSplif video. Edit the text there if a line is wrong.
- `assets/img/og.jpg`: the link preview image.
