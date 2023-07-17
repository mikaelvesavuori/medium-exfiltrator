export function deleteIds(fileContents: string) {
  const regex = RegExp(/id="(.*?)"/gis);
  return fileContents.replaceAll(regex, ' ');
}
