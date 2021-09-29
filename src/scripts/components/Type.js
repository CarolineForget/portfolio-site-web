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
      strings: ['autonome.', 'organisée.', 'polyvalente.', 'débrouillarde.', 'passionnée.', 'Caroline.'],
      typeSpeed: 100,
      backDelay: 700,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
      /*       stringsElement: null, */
    };

    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    /*     console.log('Type component'); */

    new Typed(this.element, this.defaultOptions);
  }
}
