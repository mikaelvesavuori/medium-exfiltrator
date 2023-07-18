import test from 'ava';
import fs from 'fs';

import { MediumExfiltrator } from '../../src/domain/MediumExfiltrator';

import { exists } from '../../src/utils/exists';
import { readFile } from '../../src/utils/readFile';

/**
 * SETUP
 */

const deleteDirectory = (dir: string) => {
  if (exists(dir)) fs.rmdirSync(dir, { recursive: true });
};

const fileHasContents = (path: string, matchingString: string) => {
  const file = readFile(path);
  return file.includes(matchingString);
};

const tempTestingDir = (name: string) => `__temp_${name}__`;
const htmlPath = (dir: string, file?: string) =>
  file ? `${dir}/${file}` : `${dir}/example-1234abcd7890.html`;

const baseConfig = {
  contentDirectory: 'testdata'
};

/**
 * TESTS
 */

test('It should work with the base configuration', async (t) => {
  const testDir = tempTestingDir('base');
  deleteDirectory(testDir);

  const config = {
    ...baseConfig,
    outputDirectory: testDir
  };

  const exfil = new MediumExfiltrator(config);
  await exfil.exfiltrate();
  const htmlExists = exists(htmlPath(testDir));

  t.deepEqual(htmlExists, true);
});

/**
 * TODO: This test times out
 */
test.skip('It should work with the base configuration and local images', async (t) => {
  const testDir = tempTestingDir('local');
  deleteDirectory(testDir);

  const config = {
    ...baseConfig,
    outputDirectory: testDir,
    useLocalImages: true
  };

  const exfil = new MediumExfiltrator(config);
  await exfil.exfiltrate();

  const htmlExists = exists(htmlPath(testDir));
  const imageExists = exists(`${testDir}/1*l4DowLbl8ic2UZskD3QFGA.jpeg`);

  t.deepEqual(htmlExists && imageExists, true);
});

test('It should work with custom CSS', async (t) => {
  const testDir = tempTestingDir('css');
  deleteDirectory(testDir);

  const config = {
    ...baseConfig,
    outputDirectory: testDir,
    css: `h1 {
      font-size: 120rem;
    }`
  };

  const exfil = new MediumExfiltrator(config);
  await exfil.exfiltrate();

  const htmlExists = exists(htmlPath(testDir));
  const hasCss = fileHasContents(htmlPath(testDir), 'font-size: 120rem');

  t.deepEqual(htmlExists && hasCss, true);
});

test('It should work with the footer removed', async (t) => {
  const testDir = tempTestingDir('footer');
  deleteDirectory(testDir);

  const config = {
    ...baseConfig,
    outputDirectory: testDir,
    removeFooter: true
  };

  const exfil = new MediumExfiltrator(config);
  await exfil.exfiltrate();

  const htmlExists = exists(htmlPath(testDir));
  const hasFooter = fileHasContents(htmlPath(testDir), '<footer');

  t.deepEqual(htmlExists && !hasFooter, true);
});

test('It should work with original HTML', async (t) => {
  const testDir = tempTestingDir('original');
  deleteDirectory(testDir);

  const config = {
    ...baseConfig,
    outputDirectory: testDir,
    useOriginalHtml: true
  };

  const exfil = new MediumExfiltrator(config);
  await exfil.exfiltrate();

  const htmlExists = exists(htmlPath(testDir));
  const hasOriginalHtml = fileHasContents(
    htmlPath(testDir),
    '<section name="d172" class="section section--body section--first">'
  );

  t.deepEqual(htmlExists && hasOriginalHtml, true);
});

test('It should work with draft documents', async (t) => {
  const testDir = tempTestingDir('draft');
  deleteDirectory(testDir);

  const config = {
    ...baseConfig,
    outputDirectory: testDir,
    includeDrafts: true
  };

  const exfil = new MediumExfiltrator(config);
  await exfil.exfiltrate();

  const htmlExists = exists(htmlPath(testDir));
  const draftExists = exists(htmlPath(testDir, 'draft_example.html'));

  t.deepEqual(htmlExists && draftExists, true);
});

test('It should work with stripped random IDs on files', async (t) => {
  const testDir = tempTestingDir('random');
  deleteDirectory(testDir);

  const config = {
    ...baseConfig,
    outputDirectory: testDir,
    stripRandom: true
  };

  const exfil = new MediumExfiltrator(config);
  await exfil.exfiltrate();

  const htmlExists = exists(htmlPath(testDir, 'example.html'));

  t.deepEqual(htmlExists, true);
});
