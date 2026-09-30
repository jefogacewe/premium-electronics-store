const fs = require('fs');
const path = require('path');

const ignore = [
  '.next',
  'node_modules',
  '.git',
  'out',
  'coverage',
];

const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignore.includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else {
      files.push(full);
    }
  }
}

walk('.');

const data = files
  .filter((file) => !file.includes('/.next/') && !file.includes('/node_modules/'))
  .join('\n');

console.log(data);
