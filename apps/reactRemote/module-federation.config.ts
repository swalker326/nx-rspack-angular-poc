import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'reactRemote',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
