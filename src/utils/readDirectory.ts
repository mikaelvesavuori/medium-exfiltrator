import fs from 'fs';
import path from 'path';

import { exists } from './exists';
import { isDirectory } from './isDirectory';

/**
 * @description Gets the contents of a directory as an array of strings.
 */
export function readDirectory(basePath: string) {
  const _path = path.join(basePath);
  if (exists(_path) && isDirectory(_path)) return fs.readdirSync(_path);
  return [];
}
