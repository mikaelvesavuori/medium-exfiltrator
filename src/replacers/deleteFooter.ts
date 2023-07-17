export function deleteFooter(fileContents: string) {
  const regex = RegExp(/(<footer>.*?<\/footer>)/gis);
  return fileContents.replaceAll(regex, '');
}
