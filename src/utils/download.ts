import fs from 'fs';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

export async function download(url: string, outputDirectory: string) {
  const response = await fetch(url);
  const contentType = response.headers.get('Content-Type') || '';
  if (!verifyContentType(contentType)) return;

  const fileName = url.split('/')[5] || '';
  const output = `${outputDirectory}/${fileName}`;

  const body = Readable.fromWeb(response.body as any);
  const stream = fs.createWriteStream(output);
  await finished(body.pipe(stream)).then(() => Promise.resolve());
}

function verifyContentType(contentType: string) {
  const validFormats = ['image/png', 'image/jpeg', 'image/jpg'];
  return validFormats.includes(contentType);
}
