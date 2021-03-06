/** Composante Snackbar de Timtools */
export default class Video {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;

    this.videoContainer = this.element.querySelector('.js-video');
    this.poster = this.element.querySelector('.js-poster');
    this.videoId = this.element.dataset.videoId;
    this.playlistId = this.element.dataset.videoId;
    this.autoplay = 0;
    this.playerReady = false;
    this.showControls = this.element.dataset.showControls == 'true' ? 1 : 0;
    this.isLooping = this.element.dataset.isLooping == 'true' ? 1 : 0;
    this.muteBtn = this.element.querySelector('.button--mute');
    this.unmuteBtn = this.element.querySelector('.button--unmute');
    this.playBtn = this.element.querySelector('.button--play');
    this.pauseBtn = this.element.querySelector('.button--pause');

    Video.instances.push(this);

    //Vérifie si l'élément HTML de la vidéo possède un ID.
    if (this.videoId) {
      Video.loadScript();
    } else {
      console.error('Vous devez spécifier un ID.');
    }
  }

  /**
   * Méthode loadScript - Démarre le chargement de la librairie externe YouTube en créant une balise script
   */
  static loadScript() {
    if (!Video.scriptIsLoading) {
      Video.scriptIsLoading = true;
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script);
    }
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    this.initPlayer = this.initPlayer.bind(this);

    if (this.poster) {
      this.autoplay = 1;
    }

    if (this.element.dataset.autoPlay == 'true') {
      this.autoplay = 1;
    }

    if (this.poster) {
      this.element.addEventListener('click', this.initPlayer);
    } else {
      this.initPlayer();
    }
  }

  /**
   * Méthode initPlayer - Initialisation du player de YouTube.
   * @param {Event} evt - Élément HTML cible de l'événement.
   */
  initPlayer(evt) {
    if (evt) {
      this.element.removeEventListener('click', this.initPlayer);
    }

    // Options par défaut pour la librairie YouTube
    this.player = new YT.Player(this.videoContainer, {
      height: '100%',
      width: '100%',
      videoId: this.videoId,
      playerVars: {
        rel: 0,
        showinfo: 0,
        autoplay: this.autoplay,
        controls: this.showControls,
        loop: this.isLooping,
        playlist: this.videoId,
      },
      events: {
        onReady: () => {
          this.playerReady = true;

          this.player.playVideo();

          if (!this.poster) {
            this.player.mute();
          }

          //
          if (this.muteBtn) {
            this.muteBtn.addEventListener('click', this.unmutePlayer.bind(this));
          }

          if (this.unmuteBtn) {
            this.unmuteBtn.addEventListener('click', this.mutePlayer.bind(this));
          }

          if (this.pauseBtn) {
            this.pauseBtn.addEventListener('click', this.pauseVideo.bind(this));
          }

          if (this.playBtn) {
            this.playBtn.addEventListener('click', this.playVideo.bind(this));
          }
          //

          const observer = new IntersectionObserver(this.watch.bind(this), {
            rootMargin: '0px 0px 0px 0px',
          });
          observer.observe(this.element);
        },
        onStateChange: (evt) => {
          if (evt.data == YT.PlayerState.PLAYING) {
            Video.pauseAll(this);
          } else if (evt.data == YT.PlayerState.ENDED) {
            this.player.seekTo(0);
            this.player.pauseVideo();
          }
        },
      },
    });
  }

  //
  unmutePlayer(evt) {
    this.player.unMute();
    this.player.setVolume(50);
    this.unmuteBtn.classList.toggle('switch');
    this.muteBtn.classList.toggle('switch');
  }

  mutePlayer(evt) {
    this.player.mute();
    this.unmuteBtn.classList.toggle('switch');
    this.muteBtn.classList.toggle('switch');
  }

  playVideo(evt) {
    this.player.playVideo();
    this.pauseBtn.classList.toggle('switch');
    this.playBtn.classList.toggle('switch');
  }

  pauseVideo(evt) {
    this.player.pauseVideo();
    this.pauseBtn.classList.toggle('switch');
    this.playBtn.classList.toggle('switch');
  }
  //

  /**
   * Méthode watch - Vérifie si des players sortent de la vue de l'utilisateur
   * @param {Event} entries - Élément HTML du player.
   */
  watch(entries) {
    if (this.playerReady && !entries[0].isIntersecting) {
      this.player.pauseVideo();
    }
  }

  /**
   * Méthode d'initialisation de tous les vidéos
   */
  static initAll() {
    document.documentElement.classList.add('is-video-ready');

    for (let i = 0; i < Video.instances.length; i++) {
      const instance = Video.instances[i];
      instance.init();
    }
  }

  /**
   * Méthode pauseAll - Met en pause tous les vidéos ne devant pas jouer.
   * @param {HTMLElement} currentInstance - Élément HTML du player cliqué
   */
  static pauseAll(currentInstance) {
    for (let i = 0; i < Video.instances.length; i++) {
      const instance = Video.instances[i];

      if (instance.playerReady && instance !== currentInstance) {
        instance.player.pauseVideo();
      }
    }
  }
}

//Array contenant tous les players de la page HTML
Video.instances = [];

/**
 * Méthode pour charger toute la librairie JS de YouTube
 * Remplacée par la méthode initAll()
 */
window.onYouTubeIframeAPIReady = Video.initAll;
