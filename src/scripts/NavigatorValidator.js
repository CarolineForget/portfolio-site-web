/** Composante NavigatorValidator de Timtools
 * Nécessite la librairie detect-borwser (https://www.npmjs.com/package/detect-browser)
 */
export default class NavigatorValidator {
  constructor() {
    this.html = document.documentElement;

    this.init();
  }

  init() {
    const { detect } = require('detect-browser');
    const browser = detect();

    // handle the case where we don't detect the browser
    /*     if (browser) {
      console.log(browser.name);
      console.log(browser.version);
      console.log(browser.os);
    } */

    const isSupported = null;

    while (isSupported == null) {
      switch (browser && browser.name) {
        case 'chrome':
        case 'firefox':
          /* window.location.href = 'http://localhost:3000/error.html'; */
          isSupported = true;
          console.log('supported');
          break;

        case 'edge':
          isSupported = true;
          console.log('supported');
          break;

        default:
          isSupported = false;
          console.log('not supported');
      }
    }

    console.log(isSupported);
  }
}
