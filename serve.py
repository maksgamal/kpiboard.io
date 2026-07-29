#!/usr/bin/env python3
"""
Local static server with URL rewrites matching vercel.json (for dev without Vercel).
Usage: python serve.py [port]
Default: 8009, bind 127.0.0.1
"""
import http.server
import os
import socketserver
import sys

# Paths without .html — same as vercel.json rewrites
REWRITES = {
    "/bi-team": "/bi-team/index.html",
    "/payment-success": "/payment-success.html",
    "/thankyou": "/thankyou.html",
    "/blogs": "/blogs.html",
    "/blog-posts/the-retail-ecommerce-metrics-that-actually-drive-profit": "/the-retail-ecommerce-metrics-that-actually-drive-profit.html",
    "/blog-posts/struggling-with-scattered-reports-save-20-hours-a-month-with-smarter-bi-dashboards": "/struggling-with-scattered-reports-save-20-hours-a-month-with-smarter-bi-dashboards.html",
    "/blog-posts/the-hidden-leak-how-one-e-commerce-brand-discovered-a-120k-problem-using-data": "/the-hidden-leak-how-one-e-commerce-brand-discovered-a-120k-problem-using-data.html",
    "/blog-posts/how-one-digital-agency-stopped-drowning-in-spreadsheets-and-started-scaling-smarter": "/how-one-digital-agency-stopped-drowning-in-spreadsheets-and-started-scaling-smarter.html",
}


class RewriteHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        path = path.split("?", 1)[0].split("#", 1)[0]
        if path in REWRITES:
            path = REWRITES[path]
        elif len(path) > 1 and path.endswith("/"):
            key = path.rstrip("/")
            if key in REWRITES:
                path = REWRITES[key]
        return super().translate_path(path)


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8009
    host = "127.0.0.1"
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with socketserver.TCPServer((host, port), RewriteHandler) as httpd:
        print(f"Serving http://{host}:{port}/  (with /payment-success etc. rewrites)")
        print("Ctrl+C to stop")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")


if __name__ == "__main__":
    main()
