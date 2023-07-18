/**
 * @description Filters out HTML files.
 */
export function filterFiles(files: string[], includeDrafts = false) {
  return files
    .filter((file: string) => file.endsWith('.html'))
    .filter((file: string) =>
      includeDrafts ? file.endsWith('.html') : !file.startsWith('draft_')
    );
}
