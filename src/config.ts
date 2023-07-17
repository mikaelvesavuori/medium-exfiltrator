export const css = `
* {
  font-family: 'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, serif;
}
html, body {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;
}
h2 {
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 30px 0 0 0;
  margin-bottom: 1rem;
  margin-top: 2rem;
  color: #333;
}
h3 {
  font-size: 2rem;
  margin: 0.75rem 0 1.5rem 0;
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
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}
section img,
section iframe {
  width: 100%;
  max-width: 640px;
}
footer {
  padding: 0 1.25rem;
  margin: 3rem 0;
  text-align: center;
  font-size: 0.75rem;
}
blockquote {
  font-style: italic;
  font-size: 2rem;
}
figcaption {
  font-family: Optima, Candara, 'Noto Sans', source-sans-pro, sans-serif;
  font-size: 0.75rem;
  margin-bottom: 2rem;
}
hr {
  margin: 2rem 0;
  border-top: 0.5px solid #999;
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
}`;
