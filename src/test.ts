import { MediumExfiltrator } from './domain/MediumExfiltrator';

import { MediumExfiltratorConfiguration } from './interfaces/types';

import { css } from './config';

const config: MediumExfiltratorConfiguration = {
  css,
  contentDirectory: 'test',
  outputDirectory: 'output',
  removeFooter: true,
  useOriginalHtml: false,
  useLocalImages: true,
  includeDrafts: true
};

const exfil = new MediumExfiltrator(config);
exfil.exfiltrate();
