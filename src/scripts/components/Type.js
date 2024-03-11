import Typed from 'typed.js';

/** Composante Type de Timtools */
export default class Type {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;

    this.defaultOptions = {
      strings: ['autonome.', 'persévérante.', 'polyvalente.', 'curieuse.', 'proactive.', 'Caroline.'],
      typeSpeed: 100,
      backDelay: 700,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
    };

    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    let options = this.defaultOptions;

    if (localStorage.getItem('preferredLanguage') != 'fr-CA') {
      options = {
        ...this.defaultOptions,
        ...{
          strings: ['autonomous.', 'persevering.', 'versatile.', 'curious.', 'proactive.', 'Caroline.'],
        },
      };
    }

    if (this.element.dataset.type == '404') {
      options = {
        ...this.defaultOptions,
        ...{
          strings: ['La vilaine 404.', 'La fameuse 404.', "L'horrible 404."],
        },
      };
    }

    new Typed(this.element, options);
  }
}
