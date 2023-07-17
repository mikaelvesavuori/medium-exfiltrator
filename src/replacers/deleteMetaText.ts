export function deleteMetaText(fileContents: string) {
  const headerRegex = RegExp(/<header>(.*?)<\/header>/gims);
  const sectionRegex = RegExp(
    /<section (.*?) class="p-summary">(.*?)<\/section>/gims
  );
  return fileContents.replaceAll(headerRegex, '').replaceAll(sectionRegex, '');
}
