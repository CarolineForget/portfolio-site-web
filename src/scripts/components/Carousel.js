import Swiper from 'swiper/bundle';

/** Composante Carousel de Timtools */
export default class Carousel {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;

    // Options par défaut pour la librairie Swiper
    this.defaultOptions = {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    };

    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    let options = this.defaultOptions;

    // Gestion des paramètres différents lorsqu'on veut avoir
    // 2 slides visibles sur grand écran et une seule sur petit écran
    if (this.element.dataset.carousel == 'split') {
      options = {
        ...this.defaultOptions,
        ...{
          slidesPerView: 1,
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
          },
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: 'true',
          },
          loop: false,
        },
      };
    }

    if (this.element.dataset.carousel == 'split-loop') {
      options = {
        ...this.defaultOptions,
        ...{
          slidesPerView: 1,
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
          },
          loop: true,
        },
      };
    }

    // 2 slides par colonne en une vue
    if (this.element.dataset.carousel == 'column') {
      options = {
        ...this.defaultOptions,
        ...{
          slidesPerView: 1,
          scrollbar: {
            el: '.swiper-scrollbar',
          },
          slidesPerColumn: 2,
          spaceBetween: 30,
          slidesPerColumnFill: 'row',
        },
      };
    }

    // Instanciation d'un nouveau Swiper avec les options
    new Swiper(this.element, options);
  }
}
