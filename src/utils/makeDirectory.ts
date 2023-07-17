import fs from 'fs';

import { exists } from './exists';

export function makeDirectory(directory: string) {
  if (!exists(directory)) fs.mkdirSync(directory, { recursive: true });
}
