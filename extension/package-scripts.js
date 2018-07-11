const npsUtils = require('nps-utils')

const { crossEnv } = npsUtils

const firefoxTarget = crossEnv('TARGET=firefox');
const chromeTarget = crossEnv('TARGET=chrome');

module.exports = {
  scripts: {
    default: {
      default: npsUtils.concurrent.nps('default.parcel.firefox', 'default.parcel.chrome','default.ext'),
      parcel: {
        firefox: `${firefoxTarget} parcel --no-hmr src/manifest.json --out-dir dist/firefox`,
        chrome: `${chromeTarget} parcel --no-hmr src/manifest.json --out-dir dist/chrome`
      },
      ext: 'web-ext run --source-dir ./dist/firefox'
    }
  }
};
