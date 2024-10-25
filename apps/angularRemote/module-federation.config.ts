const config = {
  name: 'angularRemote',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './src/app/app.component.ts',
  },
};

export default config;
