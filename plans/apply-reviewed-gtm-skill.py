"""Apply only the 20 reviewed skill files, with exact preimage checks."""
from pathlib import Path
import hashlib
import json

ROOT = Path(__file__).resolve().parent.parent
ACTIVE = ROOT / '.agents/skills/gtm-deep-research'
CANDIDATE = ROOT / 'plans/gtm-skill-usefulness-candidate'
MANIFEST = ROOT / 'plans/gtm-skill-usefulness-validation.json'
BACKUP = ROOT / 'plans/gtm-skill-pre-install-2026-11-12.json'
RESULT = ROOT / 'plans/gtm-skill-installation-result.json'

def digest(data):
    return hashlib.sha256(data).hexdigest()

items = json.loads(MANIFEST.read_text(encoding='utf-8'))['changed_files']
assert len(items) == 20
prepared = []
for item in items:
    relative = Path(item['path'])
    target = (ACTIVE / relative).resolve()
    candidate = (CANDIDATE / relative).resolve()
    assert target.is_relative_to(ACTIVE.resolve())
    assert candidate.is_relative_to(CANDIDATE.resolve())
    before, after = target.read_bytes(), candidate.read_bytes()
    assert digest(before) == item['source_sha256'], f'Active file changed: {relative}'
    assert digest(after) == item['candidate_sha256'], f'Candidate changed: {relative}'
    prepared.append((item, target, before, after))
assert not BACKUP.exists(), 'Backup already exists; inspect before retrying'
BACKUP.write_text(json.dumps({'files': [dict(path=x['path'], sha256=digest(b), text=b.decode('utf-8')) for x, _, b, _ in prepared]}, ensure_ascii=False, indent=2), encoding='utf-8')
for item, target, _, after in prepared:
    target.write_bytes(after)
for item, target, _, after in prepared:
    assert target.read_bytes() == after, item['path']
RESULT.write_text(json.dumps({'status': 'installed', 'date': '2026-11-12', 'files': [dict(path=x['path'], sha256=digest(a)) for x, _, _, a in prepared], 'permissions_changed': False}, indent=2), encoding='utf-8')
print('Installed and hash-verified 20 reviewed skill files; no permission changes.')
