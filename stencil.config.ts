import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  autoprefixCss: true,
  namespace: 'blank-stencil-repro',
  outputTargets: [
    {
      type: 'dist-hydrate-script'
    },
  ],
};
