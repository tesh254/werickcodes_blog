const { parsed: localEnv } = require("dotenv").config();

// module.exports = {
//   webpack: config => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: "empty"
//     };
//     config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

//     return config;
//   }
// };

const withCSS = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");
const withPWA = require("next-pwa");

module.exports = withCSS(
  withPWA({
    pwa: {
      disable: false,
      register: true,
      sw: "service-worker.js"
    },
    webpack(config, options) {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: "empty"
      };
      // config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
      return config;
    }
  })
);
