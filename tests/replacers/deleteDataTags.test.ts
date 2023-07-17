import test from 'ava';

import { deleteDataTags } from '../../src/replacers/deleteDataTags';

const input = `<img class="graf-image" data-image-id="1*asdf.jpeg" data-width="2448" data-height="2533" src="https://cdn-images-1.medium.com/max/800/1*asdf.jpeg">`;

test('It should delete data tags', (t) => {
  const expected =
    '<img class="graf-image"       src="https://cdn-images-1.medium.com/max/800/1*asdf.jpeg">';

  const result = deleteDataTags(input);

  t.deepEqual(result, expected);
});
