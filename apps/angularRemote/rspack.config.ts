// // import { ModuleFederationPlugin } from '@module-federation/enhanced';

// // console.log('RSPACK CONFIG: angularRemote');
// // export default {
// //   plugins: [
// //     new ModuleFederationPlugin({
// //       name: 'angularRemote',
// //       filename: 'remoteEntry.js',
// //       exposes: {
// //         './Module': './src/app/app.component.ts',
// //       },
// //     }),
// //   ],
// // };

// import { composePlugins, withNx } from '@nx/rspack';
// import { withModuleFederation } from '@nx/rspack/module-federation';
// import baseConfig from './module-federation.config';

// const config = {
//   ...baseConfig,
// };

// // // Nx plugins for rspack to build config object from Nx options and context.
// // /**
// //  * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support Module Federation
// //  * The DTS Plugin can be enabled by setting dts: true
// //  * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
// //  */
// const composedPlugins = composePlugins(
//   withNx(),
//   withModuleFederation(config, { dts: false })
// );

// console.log(composedPlugins);
// console.log('RSPACK CONFIG: angularRemote', composedPlugins);
// export default composedPlugins;

import { NgRspackModuleFederationPlugin } from '@ng-rspack/build';
import config from './module-federation.config';

export default {
  plugins: [new NgRspackModuleFederationPlugin(config, { dts: false })],
};
