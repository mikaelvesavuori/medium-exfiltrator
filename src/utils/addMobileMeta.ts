export function addMobileMeta(fileContents: string) {
  const mobileMeta = `<meta name="viewport" content="width=device-width, initial-scale=1" />\n`;
  const title = `<title>`;
  return fileContents.replace(title, `${mobileMeta}${title}`);
}
