export function replaceOnlineMediaWithLocalReference(fileContents: string) {
  const regex = RegExp(/src="https:\/\/cdn-images-(.*?)\/max\/(\d+)\//gis);
  return fileContents.replaceAll(regex, `src="`);
}
