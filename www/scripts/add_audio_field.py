#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Add or normalize an 'audio' field across verses.json entries.
- Adds audio: "" (empty string) when missing
- Normalizes 'Audio' -> 'audio' if present
- Applies to: coreVerses, evilEye, healing, targetedVerses (if present), and supplications (opening/closing)
Creates a rolling backup before writing (reusing the same logic pattern).
"""

import json
import os
import shutil

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
JSON_PATH = os.path.join(SCRIPT_DIR, '..', 'data', 'verses.json')


def add_audio_field_to_list(items):
    changed = 0
    for item in items:
        if not isinstance(item, dict):
            continue
        # Normalize 'Audio' to 'audio'
        if 'Audio' in item:
            if 'audio' not in item:
                item['audio'] = item['Audio']
            del item['Audio']
            changed += 1
        # Ensure 'audio' exists
        if 'audio' not in item:
            item['audio'] = ""
            changed += 1
    return changed


def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)


def save_with_backup(path, data):
    base_dir = os.path.dirname(path)
    latest_idx = None
    latest_mtime = -1.0
    for i in range(1, 6):
        p = os.path.join(base_dir, f'verses.backup.{i}.json')
        if os.path.exists(p):
            try:
                m = os.path.getmtime(p)
                if m > latest_mtime:
                    latest_mtime = m
                    latest_idx = i
            except Exception:
                pass
    next_i = (latest_idx % 5 + 1) if latest_idx is not None else 1
    backup_path = os.path.join(base_dir, f'verses.backup.{next_i}.json')
    shutil.copy2(path, backup_path)
    print(f"Backup written: {backup_path}")
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Saved changes to: {path}")


if __name__ == '__main__':
    data = load_json(JSON_PATH)
    total_changes = 0

    # root-level collections
    if isinstance(data.get('coreVerses'), list):
        total_changes += add_audio_field_to_list(data['coreVerses'])

    targeted = data.get('targetedVerses')
    if isinstance(targeted, dict):
        for k, items in list(targeted.items()):
            if isinstance(items, list):
                total_changes += add_audio_field_to_list(items)

    # appInfo collections
    app = data.get('appInfo', {})
    if isinstance(app.get('coreVerses'), list):
        total_changes += add_audio_field_to_list(app['coreVerses'])
    for key in ('evilEye', 'healing', 'sihr'):
        if isinstance(app.get(key), list):
            total_changes += add_audio_field_to_list(app[key])

    # supplications
    supp = data.get('supplications', {})
    for sec in ('opening', 'closing'):
        if isinstance(supp.get(sec), list):
            total_changes += add_audio_field_to_list(supp[sec])

    save_with_backup(JSON_PATH, data)
    print(f"Total entries updated (added/normalized audio): {total_changes}")