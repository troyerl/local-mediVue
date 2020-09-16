<template>
  <div class="videoPlayer-container">
    <videoPlayer
      :mutePlayer="false"
    ></videoPlayer>
    <div
      v-if="message"
      class="d-flex w-100 align-items-center justify-content-center"
      style="position: fixed; bottom: 5rem;"
    >
      <div class="player-message d-flex align-content-center justify-content-center">
        <p class="text-center">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import videoPlayer from './VideoPlayer';

export default {
  name: 'videoPlayerContainer',
  props: {
    mutePlayer: Boolean
  },
  components: {
    videoPlayer,
  },
  mounted() {
    this.sockets.subscribe('SEND_MESSAGE', (data) => {
      console.log(`got message at client with timeout`);
      this.message = data.message;
      setTimeout(() => {
        this.message = '';
      }, 15 * 1000);
    });
  },
  data() {
    return {
      message: '',
    };
  }
};
</script>

<style>
.videoPlayer-container {
  width: 100vw;
  height: 100vh;
}
.player-message {
  width: 50vw;
  height: auto;
  background-color: black;
  overflow-wrap: break-word;
  opacity: 0.85;
  filter: alpha(opacity=85);
  color: white;
  bottom: 50rem;
  z-index: 2;
}
.player-message p {
  font-size: 1.5rem;
}
</style>