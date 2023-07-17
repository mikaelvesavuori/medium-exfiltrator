import test from 'ava';

import { deleteWhitespace } from '../../src/replacers/deleteWhitespace';

const input =
  '<img       src="https://cdn-images-1.medium.com/max/800/1*asdf.jpeg">';

test('It should delete unnecessary whitespace', (t) => {
  const expected =
    '<img src="https://cdn-images-1.medium.com/max/800/1*asdf.jpeg">';

  const result = deleteWhitespace(input);

  t.deepEqual(result, expected);
});
