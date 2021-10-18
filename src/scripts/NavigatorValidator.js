/** Composante NavigatorValidator de Timtools
 * Nécessite la librairie detect-borwser (https://www.npmjs.com/package/detect-browser)
 */
export default class NavigatorValidator {
  /**
   * Méthode constructeur
   */
  constructor() {
    this.html = document.documentElement;

    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    const { detect } = require('detect-browser');
    const browser = detect();

    if (window.location.href !== 'http://localhost:3000/error.html') {
      switch (browser && browser.name) {
        case 'chrome':
        case 'firefox':
          console.log('supported');
          break;

        case 'edge':
          console.log('supported');
          break;

        default:
          window.location.href = 'http://localhost:3000/error.html';
          console.log('not supported');
      }
    }
  }
}

/* The MIT License (MIT)

Copyright (c) 2019 Damon Oehlman damon.oehlman@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */
