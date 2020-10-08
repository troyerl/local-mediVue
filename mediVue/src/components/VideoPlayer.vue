<template>
  <div class="fullscreen">
    <youtube
      height="100%"
      :player-vars="playerVars"
      width="100%"
      ref="youtube"
    ></youtube>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'videoPlayer',
  props: ['mutePlayer'],
  data() {
    return {
      firstTimePlayed: true,
      videos: [],
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
  computed: {
    ...mapState([
      'playing',
      'userInfo',
    ]),
    player() {
      return this.$refs.youtube.player;
    },
  },
  watch: {
    userInfo (newInfo) {
      if (newInfo) {
        this.initialize(newInfo.playlist);
      }
    },
    playing (newPlayValue) {
      if (newPlayValue) {
        this.playVideo();
      } else {
        this.stopVideo();
      } 
    }
  },
  mounted() {
    this.mutePlayer ? this.player.mute() : '';
  },
  methods: {
    initialize(playlist) {
      this.firstTimePlayed = true;
      this.videos = playlist.map((v) => this.getId(v.url));
      this.player.cuePlaylist(this.videos);
    },
    playVideo() {
      if (this.firstTimePlayed) {
        this.player.loadPlaylist(this.videos);
        this.player.setLoop(true);
        this.firstTimePlayed = false;
      }

      this.player.playVideo();
    },
    stopVideo() {
      this.player.pauseVideo();
    },
    getId(url) {
      return this.$youtube.getIdFromUrl(url);
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