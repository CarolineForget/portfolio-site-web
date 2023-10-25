/** Composante Scrolly de Timtools */
export default class Clip {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée.
   */
  constructor(element) {
    this.element = element;
    this.clip = this.element.querySelector("video");

    /*     // Options par défaut pour les margins de la zone d'affichage.
        this.options = {
          rootMargin: '0px 0px 0px 0px',
        }; */

    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    this.initPlayer = this.initPlayer.bind(this);
    this.stopPlayer = this.stopPlayer.bind(this);

    this.element.addEventListener('mouseenter', this.initPlayer);
    this.element.addEventListener('mouseleave', this.stopPlayer);
  }

  initPlayer(evt) {
    this.clip.play();
  }

  stopPlayer(evt) {
    this.clip.pause();
    this.clip.currentTime = 0;
  }

}
