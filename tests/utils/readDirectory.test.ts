import test from 'ava';

import { readDirectory } from '../../src/utils/readDirectory';

test('It should get an empty array when using a non-existent path', (t) => {
  const expected: string[] = [];

  const result = readDirectory('d2k3ugd287td');

  t.deepEqual(result, expected);
});
