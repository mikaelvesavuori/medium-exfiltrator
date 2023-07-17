export function deleteDataTags(fileContents: string) {
  const regex = RegExp(/data-(.*?)"(.*?)"/gis);
  return fileContents.replaceAll(regex, ' ');
}
