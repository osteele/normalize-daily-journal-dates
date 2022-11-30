#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { DateTime } = require('luxon');
require('any-date-parser');

function pathnameToIso(filename) {
  if (path.dirname(filename) !== '.') {
    return path.join(path.dirname(filename), pathnameToIso(path.basename(filename)));
  }
  if (path.extname(filename)) {
    const ext = path.extname(filename);
    return pathnameToIso(path.basename(filename, ext)) + path.extname(filename);
  }
  const dt = DateTime.fromJSDate(Date.fromString(filename));
  return dt.invalid ? filename : dt.toISODate();
}

function main(dirpath, { dryRun, verbose }) {
  let count = 0;
  for (let filename of glob.sync(path.join(dirpath, '**/*'))) {
    const newname = pathnameToIso(filename);
    const changed = filename !== newname;
    if (changed) {
      console.log(`Rename ${filename} -> ${newname}`);
      count++;
      if (!dryRun) {
        fs.renameSync(filename, newname);
      }
    } else if (verbose) {
      console.log('Skipping', filename);
    }
  }
  console.log(`Renamed ${count} files`);
}

program
  .description("Rename files with date names to ISO standard")
  .argument('<dir>', 'directory name')
  .option('-n --dry-run', 'dry run')
  .option('-v, --verbose', 'verbose')
  .action(main)

program.parse();
