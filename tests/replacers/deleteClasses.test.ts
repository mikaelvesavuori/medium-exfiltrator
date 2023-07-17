import test from 'ava';

import { deleteClasses } from '../../src/replacers/deleteClasses';

const input = `<div class="section-inner sectionLayout--insetColumn"><h3 name="5c8e" id="5c8e" class="graf graf--h3 graf--leading graf--title"><strong class="markup--strong markup--h3-strong">`;

test('It should delete classes', (t) => {
  const expected = '<div  ><h3 name="5c8e" id="5c8e"  ><strong  >';

  const result = deleteClasses(input);

  t.deepEqual(result, expected);
});
