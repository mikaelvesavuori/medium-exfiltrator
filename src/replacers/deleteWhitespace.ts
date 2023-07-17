export function deleteWhitespace(fileContents: string) {
  const regex = RegExp(/(?:(\s{2,})|(\s>))/gis);
  return fileContents.replaceAll(regex, ' ');
}
