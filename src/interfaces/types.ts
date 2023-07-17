export type MediumExfiltratorConfiguration = {
  contentDirectory: string;
  outputDirectory: string;
  css?: string;
  removeFooter?: boolean;
  useOriginalHtml?: boolean;
  useLocalImages?: boolean;
};
