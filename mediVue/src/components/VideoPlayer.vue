<template>
  <div class="fullscreen">
    <youtube
      height="100%"
      :player-vars="playerVars"
      width="100%"
      ref="youtube"
      :video-id="videoId"
    ></youtube>
  </div>
</template>

<script>
export default {
  name: 'videoPlayer',
  props: ['mutePlayer'],
  data() {
    return {
      firstTimePlayed: true,
      videoId: 'xe2FPP4lX14',
      videos: ['https://www.youtube.com/watch?v=xe2FPP4lX14'],
      playerVars: {
        modestbranding: 1,
        showinfo: 0,
        autoplay: 0,
        rel: 0,
        constrols: 0,
        disablekb: 1,
        muted: true
      },
    };
  },
  mounted() {
    this.mutePlayer ? this.player.mute() : '';

    this.sockets.subscribe('TOGGLE_PLAYER', (bool) => {
      if (bool) {
        this.playVideo();
      } else {
        this.stopVideo();
      }
    });
  },
  methods: {
    playVideo() {
      if (this.firstTimePlayed) {
        this.player.mute();
        // this.$refs.youtube.player.loadPlaylist(this.videos);
        // this.$refs.youtube.player.setLoop(true);
        this.$refs.youtube.player.playVideo();

        this.firstTimePlayed = false;
      } else {
        this.$refs.youtube.player.playVideo();
      }
    },
    stopVideo() {
      this.player.pauseVideo();
    },
    initialize() {
      this.firstTimePlayed = true;
    },
    getId(url) {
      return this.$youtube.getIdFromUrl(url);
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<style scoped>
iframe {
  width: 100vw;
}
.fullscreen {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}
</style>