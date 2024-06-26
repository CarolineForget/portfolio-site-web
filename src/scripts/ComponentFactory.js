import Carousel from './components/Carousel';
import Header from './components/Header';
import Scrolly from './components/Scrolly';
import Video from './components/Video';
import Type from './components/Type';
import Modal from './components/Modal';
import Cursor from './components/Cursor';
import Clip from './components/Clip';
import Language from './components/Language';
import Filter from './components/Filter';

export default class ComponentFactory {
  constructor() {
    this.componentInstances = [];
    this.componentList = {
      Carousel,
      Header,
      Scrolly,
      Video,
      Type,
      Cursor,
      Modal,
      Clip,
      Language,
      Filter,
    };
    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        const instance = new this.componentList[componentName](element);
        this.componentInstances.push(instance);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}
