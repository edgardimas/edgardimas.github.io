const currentScript = document.currentScript || document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1];
const mainModuleUrl = new URL('./scripts/main.js', currentScript.src).href;

import(mainModuleUrl)
  .then((module) => {
    if (module && typeof module.initApp === 'function') {
      module.initApp();
    }
  })
  .catch((error) => {
    console.error('Unable to load application module:', error);
  });
