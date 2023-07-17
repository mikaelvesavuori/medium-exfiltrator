import fs from 'fs';

/**
 * @description Writes a file to disk.
 */
export function writeFile(data: string, fileName: string) {
  fs.writeFileSync(`${process.cwd()}/${fileName}`, data);
}
