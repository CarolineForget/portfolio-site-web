
export default class Filter {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée.
   */
  constructor(element) {
    this.element = element;
    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    //Gestion des éléments scrolly (cibles).
    //Initialisation d'un tableau avec tous les éléments <HTML> avec le dataset scrolly.

    const filterButtons = this.element.querySelectorAll('[data-filter]');
    const items = document.querySelectorAll('[data-filter-item]');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        filterButtons.forEach(btn => {
          if (btn !== button) {
            btn.querySelector('[data-filter-selected]').classList.remove('content__select');
          } else {
            btn.querySelector('[data-filter-selected]').classList.add('content__select');
          }
        });

        items.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-filter-item') === filter || item.getAttribute('data-filter-item') === 'all') {
            item.classList.remove('hidden--card');
          } else {
            item.classList.add('hidden--card');
          }
        });
      });
    });



  }


}
