import test from 'ava';

import { addMobileMeta } from '../../src/utils/addMobileMeta';

const document = `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Some example document</title>
    <style>
      * {
        font-family: Georgia, Cambria, 'Times New Roman', Times, serif;
      }
    </style>
  </head>
  <body>
    <article class="h-entry">
      Something here
    </article>
  </body>
</html>
`;

test('It should add the mobile meta tag before the <title> tag', (t) => {
  const expected = `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Some example document</title>
    <style>
      * {
        font-family: Georgia, Cambria, 'Times New Roman', Times, serif;
      }
    </style>
  </head>
  <body>
    <article class="h-entry">
      Something here
    </article>
  </body>
</html>
`;

  const result = addMobileMeta(document);

  t.deepEqual(result, expected);
});
