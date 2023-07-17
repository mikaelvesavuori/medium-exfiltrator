import fs from 'fs';

/**
 * @description Reads back the contents of a file.
 */
export function readFile(file: string) {
  return fs.readFileSync(file, { encoding: 'utf8' });
}
