export function getFilePath(filePath: string, stripRandom: boolean) {
  return stripRandom
    ? filePath.substring(0, filePath.length - 18) + '.html'
    : filePath;
}
