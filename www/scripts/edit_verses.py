#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import os
import sys
import datetime
import shutil

BANNER = """
====================================================
               Verses Editor (CLI)
====================================================
- Iterates cards and lets you paste corrected Arabic
  and displayArabic text; writes back to verses.json.
- Can insert a new core verse after a specific ID.
- Creates a rolling backup (1..5) before saving.
====================================================
"""


def load_json(path: str):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)


def save_json(data: dict, path: str, make_backup: bool = True):
    base_dir = os.path.dirname(path)
    if make_backup:
        # Rolling 5 backups: choose next slot by most recent mtime
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
        # Copy the original file to backup before writing changes
        shutil.copy2(path, backup_path)
        print(f"Backup written: {backup_path}")
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Saved changes to: {path}")


def prompt_multiline(label: str, current: str | None = None) -> str | None:
    print(f"\n{label}:")
    if current:
        print(f"Current: {current}")
    print("Paste new text. End with an empty line. Leave empty to keep.")
    lines: list[str] = []
    while True:
        try:
            line = input()
        except EOFError:
            break
        if line.strip() == '':
            break
        lines.append(line)
    if not lines:
        return None
    return ' '.join(lines).strip()


def edit_card(card: dict):
    header = f"ID {card.get('id')} | {card.get('surah', '')} {card.get('verse', card.get('type', ''))}"
    print("\n" + "-" * 60)
    print(header)
    print("-" * 60)
    new_arabic = prompt_multiline('Arabic', card.get('arabic'))
    if new_arabic is not None:
        card['arabic'] = new_arabic
    new_display = prompt_multiline('DisplayArabic', card.get('displayArabic'))
    if new_display is not None:
        card['displayArabic'] = new_display


def edit_core(data: dict):
    verses = data.get('coreVerses', [])
    if not verses:
        print("No coreVerses found.")
        return
    for card in verses:
        edit_card(card)
        proceed = input("Continue to next? [Enter] or type 'q' to stop: ").strip().lower()
        if proceed == 'q':
            break


def edit_targeted(data: dict):
    targeted = data.get('targetedVerses', {})
    if not targeted:
        print("No targetedVerses found.")
        return
    for cat_name, cat_list in targeted.items():
        print(f"\n### Category: {cat_name}")
        for card in cat_list:
            edit_card(card)
            proceed = input("Continue? [Enter], 'skip' to skip category, or 'q' to quit: ").strip().lower()
            if proceed == 'skip':
                break
            if proceed == 'q':
                return


def edit_supplications(data: dict):
    supp = data.get('supplications', {})
    if not supp:
        print("No supplications found.")
        return
    for sec in ['opening', 'closing']:
        items = supp.get(sec, [])
        print(f"\n## Supplications: {sec}")
        for card in items:
            # Supplications may not have displayArabic; allow adding if desired
            edit_card(card)
            proceed = input("Continue? [Enter] or 'q' to quit: ").strip().lower()
            if proceed == 'q':
                return


def add_core_after(data: dict, after_id: int):
    verses = data.get('coreVerses', [])
    if not verses:
        print("No coreVerses found.")
        return
    idx = next((i for i, c in enumerate(verses) if c.get('id') == after_id), None)
    if idx is None:
        print(f"ID {after_id} not found in coreVerses.")
        return
    print("\nEnter new core verse details:")
    new_id_str = input("New ID (integer): ").strip()
    try:
        new_id = int(new_id_str)
    except Exception:
        print("Invalid ID.")
        return
    if any(c.get('id') == new_id for c in verses):
        print("ID already exists in coreVerses. Choose a unique ID.")
        return
    surah = input("Surah name: ").strip()
    verse = input("Verse numbers (e.g., '54-56'): ").strip()
    arabic = prompt_multiline('Arabic')
    translation = prompt_multiline('Translation (optional)')
    display = prompt_multiline('DisplayArabic (optional)')
    new_card = {
        'id': new_id,
        'surah': surah,
        'verse': verse,
    }
    if arabic:
        new_card['arabic'] = arabic
    if translation:
        new_card['translation'] = translation
    if display:
        new_card['displayArabic'] = display
    verses.insert(idx + 1, new_card)
    print(f"Inserted new core verse ID {new_id} after ID {after_id}.")


def main():
    print(BANNER)
    script_dir = os.path.dirname(os.path.abspath(__file__))
    default_json_path = os.path.join(script_dir, '..', 'data', 'verses.json')
    json_path = default_json_path
    if len(sys.argv) > 1:
        json_path = sys.argv[1]
    print(f"Using JSON file: {json_path}")

    data = load_json(json_path)

    while True:
        print("\n=== Menu ===")
        print("[1] Edit core verses")
        print("[2] Edit targeted verses (sihr, evilEye, healing)")
        print("[3] Edit supplications (opening, closing)")
        print("[4] Add core verse after specific ID")
        print("[5] Save and exit")
        print("[6] Exit without saving")
        choice = input("Choose: ").strip()
        if choice == '1':
            edit_core(data)
        elif choice == '2':
            edit_targeted(data)
        elif choice == '3':
            edit_supplications(data)
        elif choice == '4':
            try:
                after_id = int(input("After which core ID? ").strip())
            except Exception:
                print("Invalid ID.")
                continue
            add_core_after(data, after_id)
        elif choice == '5':
            save_json(data, json_path, make_backup=True)
            break
        elif choice == '6':
            print("No changes saved.")
            break
        else:
            print("Invalid choice.")
    print("Done.")


if __name__ == '__main__':
    main()