/**
 * @description Filters out HTML files.
 */
export function filterFiles(files: string[], includeDrafts = false) {
  return files
    .filter((file: string) => file.endsWith('.html'))
    .filter((file: string) =>
      includeDrafts ? file.startsWith('draft_') : !file.startsWith('draft_')
    );
}
