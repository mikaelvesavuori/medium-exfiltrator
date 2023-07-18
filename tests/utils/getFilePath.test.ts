import test from 'ava';

import { getFilePath } from '../../src/utils/getFilePath';

const file = 'my/folder/file-abcd1234dgca.html';

test('It should get an unchanged file path', (t) => {
  const expected = file;

  const result = getFilePath(file, false);

  t.deepEqual(result, expected);
});

test('It should get a file path without the 12 random characters at the end', (t) => {
  const expected = 'my/folder/file.html';

  const result = getFilePath(file, true);

  t.deepEqual(result, expected);
});
