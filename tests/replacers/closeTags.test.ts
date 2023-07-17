import test from 'ava';

import { closeTags } from '../../src/replacers/closeTags';

const input = '<p      >';

test('It should close the bracket by removing excess whitespace at end', (t) => {
  const expected = '<p>';

  const result = closeTags(input);

  t.deepEqual(result, expected);
});
