// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'FloodGate Church',
  siteDescription: 'We passionately worship, enthusiastically serve and compassionately care for people!',
  siteUrl: 'https://floodgate.church',
  icon: './src/assets/logo.png',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      /**
      options: {
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    },
    {
      use: 'gridsome-plugin-pug',
      options: {
        pug: { /* Options for `pug-plain-loader` */ },
        pugLoader: { /* Options for `pug-loader` */ }
      }
    }
  ]
}
