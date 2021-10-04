export default class Cursor {
  constructor(element) {
    this.element = element;
    this.html = document.documentElement;
    this.arrayLink = document.querySelectorAll('a');

    this.init();
  }

  init() {
    this.moveCursor();
    this.hoverCursorLink();

    if (this.html.querySelector('.swiper-container')) {
      this.hoverCursorCarousel();
    }

    /*     if (this.html.querySelector('.js-video')) {
      console.log('a une video');
      this.hoverVideo();
    } */
  }

  moveCursor() {
    this.html.addEventListener('mousemove', (e) => {
      this.element.setAttribute('style', 'top: ' + (e.pageY - 20) + 'px; left: ' + (e.pageX - 20) + 'px;');
    });
  }

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

  /*   hoverVideo() {
    const videoArray = this.html.querySelectorAll('.js-video');
    console.log(videoArray);

    for (let i = 0; i < videoArray.length; i++) {
      const video = videoArray[i];
      console.log(video);

      video.addEventListener('mouseover', (e) => {
        this.element.classList.add('hover__cursor');
        console.log('mouseover');
      });

      video.addEventListener('mouseout', (e) => {
        this.element.classList.remove('hover__cursor');
      });
    }
  } */
}