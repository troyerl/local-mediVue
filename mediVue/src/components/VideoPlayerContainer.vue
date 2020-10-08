<template>
  <div class="videoPlayer-container">
    <div v-show="userInfo" class="w-100 h-100">
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
    <div v-show="!userInfo" class="w-100 h-100 black-screen"></div>
  </div>
</template>

<script>
import videoPlayer from './VideoPlayer';

import { mapState } from 'vuex';

export default {
  name: 'videoPlayerContainer',
  props: {
    mutePlayer: Boolean
  },
  components: {
    videoPlayer,
  },
  computed: {
    ...mapState([
      // map this.count to store.state.count
      'message',
      'userInfo'
    ]),
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
.black-screen {
  background: black;
}
</style>