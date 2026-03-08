#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import os
import datetime
import shutil
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]  # Project root: .../AdhkarWeb
DATA_DIR = ROOT / 'data'
VERSES_PATH = DATA_DIR / 'verses.json'

class SaveRequestHandler(SimpleHTTPRequestHandler):
    server_version = "SaveServer/1.0"

    def log_message(self, format, *args):
        # More readable server logs
        print("[server]", format % args)

    def end_headers(self):
        # CORS and basic headers (safe locally; same-origin will ignore)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        # Handle CORS preflight if the browser sends it
        self.send_response(204)
        self.end_headers()

    def _send_json(self, obj: dict, status: int = 200):
        payload = json.dumps(obj, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Content-Length', str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path != '/save':
            self.send_error(404, "Endpoint not found")
            return

        length = int(self.headers.get('Content-Length', '0'))
        if length <= 0:
            self._send_json({'status': 'error', 'message': 'Empty request body'}, status=400)
            return
        raw = self.rfile.read(length).decode('utf-8')
        if not raw.strip():
            self._send_json({'status': 'error', 'message': 'Empty request body'}, status=400)
            return
        try:
            incoming = json.loads(raw)
        except Exception as e:
            self._send_json({'status': 'error', 'message': f'Invalid JSON: {e}'}, status=400)
            return
        if not isinstance(incoming, dict):
            self._send_json({'status': 'error', 'message': 'JSON root must be an object'}, status=400)
            return

        # Ensure data directory exists
        DATA_DIR.mkdir(parents=True, exist_ok=True)

        # Load existing content to merge 
        existing = {}
        if VERSES_PATH.exists():
            try:
                with open(VERSES_PATH, 'r', encoding='utf-8') as f:
                    existing = json.load(f) or {}
            except Exception:
                existing = {}

        # Shallow merge: apply incoming keys, keep others
        merged = dict(existing)
        for k, v in incoming.items():
            merged[k] = v

        if not merged:
            self._send_json({'status': 'error', 'message': 'Refusing to write empty dataset'}, status=400)
            return

        # Make rolling backup BEFORE writing merged content (keep 5 files: 1..5)
        latest_idx = None
        latest_mtime = -1.0
        for i in range(1, 6):
            p = DATA_DIR / f'verses.backup.{i}.json'
            if p.exists():
                try:
                    m = p.stat().st_mtime
                    if m > latest_mtime:
                        latest_mtime = m
                        latest_idx = i
                except Exception:
                    pass
        next_i = (latest_idx % 5 + 1) if latest_idx is not None else 1
        backup_name = f'verses.backup.{next_i}.json'
        backup_path = DATA_DIR / backup_name

        try:
            if VERSES_PATH.exists():
                shutil.copy2(VERSES_PATH, backup_path)
            else:
                with open(backup_path, 'w', encoding='utf-8') as bf:
                    json.dump(merged, bf, ensure_ascii=False, indent=2)

            # Atomic write to verses.json
            tmp_path = VERSES_PATH.with_suffix('.json.tmp')
            with open(tmp_path, 'w', encoding='utf-8') as f:
                json.dump(merged, f, ensure_ascii=False, indent=2)
            os.replace(tmp_path, VERSES_PATH)

            self._send_json({
                'status': 'ok',
                'saved': str(VERSES_PATH.relative_to(ROOT)),
                'backup': str(backup_name)
            }, status=200)
        except Exception as e:
            self._send_json({'status': 'error', 'message': str(e)}, status=500)


def run(port: int = 8000):
    os.chdir(str(ROOT))  # Serve static files from project root
    httpd = ThreadingHTTPServer(('', port), SaveRequestHandler)
    print(f"[server] Serving at http://localhost:{port}/ (static + /save endpoint)")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        httpd.server_close()
        print("[server] Stopped.")


if __name__ == '__main__':
    p = int(os.environ.get('PORT', '8000'))
    run(p)