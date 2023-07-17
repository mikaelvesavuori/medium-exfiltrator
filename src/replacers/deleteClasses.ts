export function deleteClasses(fileContents: string) {
  const regex = RegExp(/class="(.*?)"/gis);
  return fileContents.replaceAll(regex, ' ');
}
