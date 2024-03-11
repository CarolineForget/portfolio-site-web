import en from '../../assets/translation/en.json';
import fr from '../../assets/translation/fr.json';

/** Composante Scrolly de Timtools */
export default class Language {
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

    if (!localStorage.getItem('preferredLanguage')) {
      localStorage.setItem('preferredLanguage', 'fr-CA');
      this.applyLanguage('fr-CA');
    }
    else {
      this.applyLanguage(localStorage.getItem('preferredLanguage'));
    }

    this.element.addEventListener('click', this.toggleLanguage);
  }

  toggleLanguage(evt) {
    if (localStorage.getItem('preferredLanguage') == 'fr-CA') {
      localStorage.setItem('preferredLanguage', 'en');

    } else {
      localStorage.setItem('preferredLanguage', 'fr-CA');
    }

    location.reload();

  }

  applyLanguage(language) {
    console.log(localStorage.getItem('preferredLanguage'));

    if (language == 'fr-CA') {
      var varTags = document.querySelectorAll("var");
      for (var i = 0; i < varTags.length; i++) {
        try {
          varTags[i].innerHTML = (
            new Function('return this.' + varTags[i].innerHTML.toLowerCase() + ';')).call(fr);
        } catch (e) {
          varTags[i].innerHTML = "";
          console.log("Error in <var/> Tag: " + e.message);
        }

      }
    }
    else {
      var varTags = document.querySelectorAll("var");
      for (var i = 0; i < varTags.length; i++) {
        try {
          varTags[i].innerHTML = (
            new Function('return this.' + varTags[i].innerHTML.toLowerCase() + ';')).call(en);
        } catch (e) {
          varTags[i].innerHTML = "";
          console.log("Error in <var/> Tag: " + e.message);
        }

      }
    }
  }


}
