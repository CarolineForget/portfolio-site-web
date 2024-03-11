import ComponentFactory from './ComponentFactory';
import NavigatorValidator from './NavigatorValidator';
import Icons from './utils/Icons';
import Cache from './utils/Cache';

class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add('has-js');

    Icons.load();

    new ComponentFactory();
  }
}
new Main();
