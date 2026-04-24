#!/usr/bin/env node
/**
 * Fails CI if any app/**\/page.tsx (or its associated *-client.tsx) contains
 * more than one top-level <h1>. A simple static check — not a full JSX parser —
 * but sufficient to catch the common regression of designers adding a second
 * <h1> for styling.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(import.meta.url), '..', '..');
const appDir = join(root, 'app');

const H1_REGEX = /<h1[\s>]/g;
const errors = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry.startsWith('.')) continue;
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walk(p);
    else if (/\.(tsx|jsx)$/.test(entry)) check(p);
  }
}

function check(file) {
  const rel = relative(root, file).replace(/\\/g, '/');
  // Only enforce on page-level files (admin is internal, skip)
  if (!/\/page(-client)?\.(tsx|jsx)$/.test(rel)) return;
  if (rel.startsWith('app/admin/')) return;
  const content = readFileSync(file, 'utf8');
  // Split on `return (` boundaries — each block is an independent render path.
  // A single render path must contain 0 or 1 <h1>. Early-return branches are
  // counted separately, which matches runtime behavior.
  const blocks = content.split(/return\s*\(/);
  for (const block of blocks) {
    const h1s = (block.match(H1_REGEX) ?? []).length;
    if (h1s > 1) {
      errors.push(`${rel}: found ${h1s} <h1> elements within a single render path.`);
      return;
    }
  }
}

walk(appDir);

if (errors.length > 0) {
  console.error('\nH1 duplicate check failed:\n');
  for (const e of errors) console.error('  ✗ ' + e);
  console.error('\nEach page should have exactly one <h1>. Use <h2>/<h3> for subheadings.\n');
  process.exit(1);
}

console.log('H1 check passed — no duplicate <h1> elements found.');
