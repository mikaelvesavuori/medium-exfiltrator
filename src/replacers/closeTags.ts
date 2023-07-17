/**
 * @description Close tags by removing whitespace before end bracket.
 */
export function closeTags(fileContents: string) {
  const regex = RegExp(/(\s*)>/gis);
  return fileContents.replaceAll(regex, '>');
}
