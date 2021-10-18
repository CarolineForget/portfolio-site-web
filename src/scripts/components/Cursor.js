/** Composante Cursor de Timtools */
export default class Cursor {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;
    this.html = document.documentElement;
    this.arrayLink = document.querySelectorAll('a');

    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    this.moveCursor();
    this.hoverCursorLink();

    // Vérifie ce que contient la page HTML
    if (this.html.querySelector('.swiper-container')) {
      this.hoverCursorCarousel();
    }

    if (this.html.querySelector('form')) {
      this.hoverForm();
    }
  }

  /**
   * Méthode moveCursor - Bouge le curseur personnalisé en fonction de la position de la souris
   */
  moveCursor() {
    this.html.addEventListener('mousemove', (e) => {
      this.element.setAttribute('style', 'top: ' + (e.pageY - 20) + 'px; left: ' + (e.pageX - 20) + 'px;');
    });
  }

  /**
   * Méthode hoverCursorLink - Contrôle l'effet d'hover du curseur sur les liens
   */
  hoverCursorLink() {
    for (let i = 0; i < this.arrayLink.length; i++) {
      const button = this.arrayLink[i];

      button.addEventListener('mouseover', (e) => {
        this.element.classList.add('hover__cursor');
      });

      button.addEventListener('mouseout', (e) => {
        this.element.classList.remove('hover__cursor');
      });
    }
  }

  /**
   * Méthode hoverCursorCarousel - Contrôle l'effet d'hover du curseur sur les flèches de navigation du carousel
   */
  hoverCursorCarousel() {
    this.html.querySelector('.swiper-button-prev').addEventListener('mouseover', (e) => {
      this.element.classList.add('hover__cursor-carousel');
    });
    this.html.querySelector('.swiper-button-prev').addEventListener('mouseout', (e) => {
      this.element.classList.remove('hover__cursor-carousel');
    });

    this.html.querySelector('.swiper-button-next').addEventListener('mouseover', (e) => {
      this.element.classList.add('hover__cursor-carousel');
    });
    this.html.querySelector('.swiper-button-next').addEventListener('mouseout', (e) => {
      this.element.classList.remove('hover__cursor-carousel');
    });
  }

  /**
   * Méthode hoverForm - Contrôle l'effet d'hover du curseur sur les champs d'un formulaire
   */
  hoverForm() {
    const inputArray = this.html.querySelectorAll('.input__element');

    for (let i = 0; i < inputArray.length; i++) {
      const input = inputArray[i];

      input.addEventListener('mouseover', (e) => {
        this.element.classList.add('hover__cursor');
      });

      input.addEventListener('mouseout', (e) => {
        this.element.classList.remove('hover__cursor');
      });
    }
  }
}
