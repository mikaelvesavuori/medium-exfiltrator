export function deleteNames(fileContents: string) {
  const regex = RegExp(/name="(.*?)"/gis);
  return fileContents.replaceAll(regex, ' ');
}
