export function deleteDataFields(fileContents: string) {
  const regex = RegExp(/\[data-field=(.*?)\]/gis);
  return fileContents.replaceAll(regex, '');
}
