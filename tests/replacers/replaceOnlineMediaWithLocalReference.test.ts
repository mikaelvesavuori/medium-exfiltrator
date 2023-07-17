import test from 'ava';

import { replaceOnlineMediaWithLocalReference } from '../../src/replacers/replaceOnlineMediaWithLocalReference';

const input =
  '<img src="https://cdn-images-1.medium.com/max/800/1*asdf.jpeg">asdf</img><img src="https://cdn-images-1.medium.com/max/800/1*qwerty.jpeg">qwerty</img>';

test('It should replace the online URLs with local URLs', (t) => {
  const expected =
    '<img src="1*asdf.jpeg">asdf</img><img src="1*qwerty.jpeg">qwerty</img>';

  const result = replaceOnlineMediaWithLocalReference(input);

  t.deepEqual(result, expected);
});
