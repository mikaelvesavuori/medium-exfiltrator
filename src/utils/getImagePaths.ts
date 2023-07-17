export function getImagePaths(fileContents: string) {
  const regex = RegExp(/(src=").*?(")/gis);
  const imagePaths = fileContents.match(regex) || [];
  return imagePaths
    .map((path: string) => path.replace('src=', '').replaceAll('"', ''))
    .filter(
      (path: string) =>
        path.endsWith('.jpg') ||
        path.endsWith('.jpeg') ||
        path.endsWith('.gif') ||
        path.endsWith('.png')
    );
}
