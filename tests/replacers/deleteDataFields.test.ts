import test from 'ava';

import { deleteDataFields } from '../../src/replacers/deleteDataFields';

const input = `
header,
section[data-field=subtitle],
section[data-field=description] {
  display: none;
}`;

test('It should delete data fields', (t) => {
  const expected = `
header,
section,
section {
  display: none;
}`;

  const result = deleteDataFields(input);

  t.deepEqual(result, expected);
});
