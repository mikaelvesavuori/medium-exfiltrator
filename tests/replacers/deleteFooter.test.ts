import test from 'ava';

import { deleteFooter } from '../../src/replacers/deleteFooter';

const input = `<section>Content here</section><footer><p>By <a href="https://medium.com/@mikaelvesavuori" class="p-author h-card">Mikael Vesavuori</a> on <a href="https://medium.com/p/6ca73dcfd055"><time class="dt-published" datetime="2017-06-01T13:46:46.023Z">June 1, 2017</time></a>.</p><p><a href="https://medium.com/@mikaelvesavuori/design-isnt-important-and-neither-is-your-business-6ca73dcfd055" class="p-canonical">Canonical link</a></p><p>Exported from <a href="https://medium.com">Medium</a> on July 16, 2023.</p></footer></article></body></html>`;

test('It should delete the footer', (t) => {
  const expected = '<section>Content here</section></article></body></html>';

  const result = deleteFooter(input);

  t.deepEqual(result, expected);
});
