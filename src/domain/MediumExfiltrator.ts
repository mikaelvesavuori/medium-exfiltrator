import { MediumExfiltratorConfiguration } from '../interfaces/types';

import { closeTags } from '../replacers/closeTags';
import { deleteClasses } from '../replacers/deleteClasses';
import { deleteDataFields } from '../replacers/deleteDataFields';
import { deleteDataTags } from '../replacers/deleteDataTags';
import { deleteFooter } from '../replacers/deleteFooter';
import { deleteIds } from '../replacers/deleteIds';
import { deleteMetaText } from '../replacers/deleteMetaText';
import { deleteNames } from '../replacers/deleteNames';
import { deleteWhitespace } from '../replacers/deleteWhitespace';
import { replaceOnlineMediaWithLocalReference } from '../replacers/replaceOnlineMediaWithLocalReference';
import { updateStyle } from '../replacers/updateStyle';

import { addMobileMeta } from '../utils/addMobileMeta';
import { download } from '../utils/download';
import { filterFiles } from '../utils/filterFiles';
import { getFilePath } from '../utils/getFilePath';
import { getImagePaths } from '../utils/getImagePaths';
import { makeDirectory } from '../utils/makeDirectory';
import { readDirectory } from '../utils/readDirectory';
import { readFile } from '../utils/readFile';
import { writeFile } from '../utils/writeFile';

import { css } from '../config';

/**
 * @description Medium Exfiltrator helps you clean up
 * exported Medium posts into a nicer format, ready
 * for use on your own blog or for backup purposes.
 */
export class MediumExfiltrator {
  private css = '';
  private contentDirectory = '';
  private outputDirectory = '';
  private removeFooter = false;
  private useOriginalHtml = false;
  private useLocalImages = false;
  private includeDrafts = false;
  private stripRandom = false;

  constructor(config: MediumExfiltratorConfiguration) {
    if (!config || !config.contentDirectory || !config.outputDirectory)
      throw new Error(
        'Missing one or more required input parameters: "contentDirectory", "outputDirectory"!'
      );

    this.init(config);
  }

  private init(config: MediumExfiltratorConfiguration) {
    this.contentDirectory = config.contentDirectory;
    this.outputDirectory = config.outputDirectory;
    this.css = config.css || css;
    this.removeFooter = config.removeFooter || false;
    this.useOriginalHtml = config.useOriginalHtml || false;
    this.useLocalImages = config.useLocalImages || false;
    this.includeDrafts = config.includeDrafts || false;
    this.stripRandom = config.stripRandom || false;
  }

  /**
   * @description Outputs your exported Medium posts into a cleaned format.
   */
  public async exfiltrate() {
    this.log();

    // Setup
    const files = this.getAllFiles();
    makeDirectory(this.outputDirectory);

    const imageUrls: string[] = [];

    // Files
    files.forEach(async (filePath: string) => {
      const fileContents = readFile(`${this.contentDirectory}/${filePath}`);
      const imagePaths = getImagePaths(fileContents);
      imageUrls.push(...imagePaths);
      const fixedFilePath = getFilePath(filePath, this.stripRandom);
      this.writeCleanedPosts(fileContents, fixedFilePath);
    });

    // Images
    if (this.useLocalImages) {
      const imagesToDownload = imageUrls.map(
        async (filePath: string) =>
          await download(filePath, this.outputDirectory)
      );

      return await Promise.all(imagesToDownload);
    }
  }

  private getAllFiles() {
    const files = readDirectory(this.contentDirectory);
    return filterFiles(files, this.includeDrafts);
  }

  private writeCleanedPosts(fileContents: string, filePath: string) {
    let updatedFile = fileContents;

    if (!this.useOriginalHtml) updatedFile = this.cleanHtml(updatedFile);
    if (!this.useOriginalHtml) updatedFile = updateStyle(updatedFile, this.css);
    if (this.removeFooter) updatedFile = deleteFooter(updatedFile);
    if (this.useLocalImages)
      updatedFile = replaceOnlineMediaWithLocalReference(updatedFile);

    writeFile(updatedFile, `${this.outputDirectory}/${filePath}`);
  }

  private cleanHtml(html: string) {
    html = deleteMetaText(html);
    html = deleteClasses(html);
    html = deleteIds(html);
    html = deleteNames(html);
    html = deleteDataFields(html);
    html = deleteDataTags(html);
    html = closeTags(html);
    html = deleteWhitespace(html);
    html = addMobileMeta(html);
    return html;
  }

  private log() {
    const useOriginalHtml = this.useOriginalHtml === true ? 'Yes' : 'No';
    const hasCustomCss = this.css !== undefined ? 'Yes' : 'No';
    const useLocalImages = this.useLocalImages === true ? 'Yes' : 'No';
    const removeFooter = this.removeFooter === true ? 'Yes' : 'No';

    console.log(
      `Medium Exfiltrator running...\n* Keep original HTML? ${useOriginalHtml}\n* Use custom CSS? ${hasCustomCss}\n* Use local images? ${useLocalImages}\n* Remove footer? ${removeFooter}`
    );
  }
}
