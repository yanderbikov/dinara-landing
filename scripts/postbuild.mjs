import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

for (const name of ['CNAME', '404.html']) {
  const from = path.join(root, name);
  const to = path.join(dist, name);
  if (fs.existsSync(from)) {
    fs.copyFileSync(from, to);
    console.log(`postbuild: copied ${name} → dist/`);
  }
}
