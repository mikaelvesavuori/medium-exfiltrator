export function updateStyle(fileContents: string, css: string) {
  const regex = RegExp(/(?<=<style>\s+).*?(?=\s+<\/style>)/gis);
  return fileContents.replaceAll(regex, css);
}
