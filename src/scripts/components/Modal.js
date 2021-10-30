import Utils from '../utils/Utils';

/** Composante Modal de Timtools */
export default class Modal {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;
    this.modalId = this.element.dataset.modalId;
    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    this.element.addEventListener('click', this.open.bind(this));

    this.close = this.close.bind(this);
  }

  /**
   * Méthode open - Ouvre la fenêtre modale.
   * @param {Event} evt - Élément HTML cible de l'événement
   */
  open(event) {
    event.preventDefault();
    this.appendModal();
  }

  /**
   * Méthode close - Ferme la fenêtre modale.
   * @param {Event} evt - Élément HTML cible de l'événement
   */
  close(event) {
    document.documentElement.classList.remove('modal-is-active');
    this.closeButton.removeEventListener('click', this.close);
    this.window.removeEventListener('click', this.close);
    setTimeout(this.destroy(), 1000);
  }

  /**
   * Méthode appendModal - Crée un clone du template de la fenêtre modale.
   */
  appendModal() {
    const template = document.querySelector(`#${this.modalId}`);

    if (template) {
      this.modalElement = template.content.firstElementChild.cloneNode(true);

      this.updateContent();

      document.body.appendChild(this.modalElement);
      this.element.getBoundingClientRect();
      document.documentElement.classList.add('modal-is-active');

      this.closeButton = this.modalElement.querySelector('.js-close');
      this.closeButton.addEventListener('click', this.close);

      this.window = this.modalElement.querySelector('.modal__scrim');
      this.window.addEventListener('click', this.close);
    } else {
      console.log("Il n'y a pas d'ID pour la fenêtre modale.");
    }
  }

  /**
   * Méthode destroy- Retire la fenêtre modale du HTML.
   */
  destroy() {
    this.modalElement.parentElement.removeChild(this.modalElement);
  }

  /**
   * Méthode updateContent- Met à jour le contenu de la fenêtre modale.
   * en fonction du type (ID) de fenêtre modale.
   */
  updateContent() {
    if (this.modalId == 'tpl-modal-simple') {
      const bgModal = this.modalElement.querySelector('.modal__box img');

      bgModal.setAttribute(
        'src',
        Utils.parseTemplate(bgModal.getAttribute('src'), {
          src: this.element.dataset.modalBg,
        })
      );
    }
  }
}
