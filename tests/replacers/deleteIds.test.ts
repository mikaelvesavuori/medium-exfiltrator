import test from 'ava';

import { deleteIds } from '../../src/replacers/deleteIds';

const input = `<p name="a059" id="a059" class="graf graf--p graf-after--p graf--trailing"><strong class="markup--strong markup--p-strong">Designers and business people share the same goal: they want to provide people with things they love and need.</strong></p></div></div></section><section name="7de0" class="section section--body section--last"><div class="section-divider"><hr class="section-divider"></div><div class="section-content"><div class="section-inner sectionLayout--insetColumn"><h4 name="64a3" id="64a3" class="graf graf--h4 graf--leading"><strong class="markup--strong markup--h4-strong">Design as fluid, living culture</strong></h4><p name="7c17" id="7c17" class="graf graf--p graf-after--h4">`;

test('It should delete IDs', (t) => {
  const expected =
    '<p name="a059"   class="graf graf--p graf-after--p graf--trailing"><strong class="markup--strong markup--p-strong">Designers and business people share the same goal: they want to provide people with things they love and need.</strong></p></div></div></section><section name="7de0" class="section section--body section--last"><div class="section-divider"><hr class="section-divider"></div><div class="section-content"><div class="section-inner sectionLayout--insetColumn"><h4 name="64a3"   class="graf graf--h4 graf--leading"><strong class="markup--strong markup--h4-strong">Design as fluid, living culture</strong></h4><p name="7c17"   class="graf graf--p graf-after--h4">';

  const result = deleteIds(input);

  t.deepEqual(result, expected);
});
