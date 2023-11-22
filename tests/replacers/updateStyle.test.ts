import test from 'ava';

import { updateStyle } from '../../src/replacers/updateStyle';

const input = `<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Some title here</title><style>
* {
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
}
html, body {
  margin: 0;
  padding: 0;
}
h1 {
  font-size: 50px;
  margin-bottom: 17px;
  color: #333;
}
h2 {
  font-size: 24px;
  line-height: 1.6;
  margin: 30px 0 0 0;
  margin-bottom: 18px;
  margin-top: 33px;
  color: #333;
}
h3 {
  font-size: 30px;
  margin: 10px 0 20px 0;
  color: #333;
}
header {
  width: 640px;
  margin: auto;
}
section {
  width: 640px;
  margin: auto;
}
section p {
  margin-bottom: 27px;
  font-size: 20px;
  line-height: 1.6;
  color: #333;
}
section img {
  max-width: 640px;
}
pre {
  background-color: #1e1e2d;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  width: auto;
}
pre,
pre > span,
pre > span > span {
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas,
    'DejaVu Sans Mono', monospace;
  white-space: pre-wrap;
  line-height: 1.5;
  font-weight: normal;
  font-size: 0.8rem;
}
footer {
  padding: 0 20px;
  margin: 50px 0;
  text-align: center;
  font-size: 12px;
}
.aspectRatioPlaceholder {
  max-width: auto !important;
  max-height: auto !important;
}
.aspectRatioPlaceholder-fill {
  padding-bottom: 0 !important;
}
header,
section[data-field=subtitle],
section[data-field=description] {
  display: none;
}
</style></head>`;

test('It should update the style', (t) => {
  const expected = `<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Some title here</title><style>

  h1 {
    font-size: 10rem
  };
</style></head>`;

  const css = `
  h1 {
    font-size: 10rem
  };`;

  const result = updateStyle(input, css);

  t.deepEqual(result, expected);
});
