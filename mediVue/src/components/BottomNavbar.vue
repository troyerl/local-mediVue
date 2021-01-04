<template>
  <div class="controls">
    <div class="control-buttons" @click="toggleShowPlayer"><b-icon-chevron-double-left class="mr-2 mt-1" v-if="!showVideoPlayer"></b-icon-chevron-double-left>{{showVideoPlayer ? '' : 'Controls'}}</div>
    <div class="control-buttons center-control" >
      <b-icon-skip-start-fill class="h1 mb-0 test-icon" v-if="showVideoPlayer" @click="playPreviousVideo"/>
      <div class="d-flex flex-column justify-content-center align-items-center align-content-center" @click="centerControl">
        <b-icon-play-fill v-if="!playing && showVideoPlayer" class="h1 mb-0 test-icon"/> 
        <b-icon-pause-fill class="h1 mb-0 test-icon" v-else-if="playing && showVideoPlayer"/> 
        <b-icon-chat-dots-fill class="pt-n3" v-else />{{showVideoPlayer ? null : 'Custom Message'}}
      </div>
      <b-icon-skip-end-fill class="h1 mb-0 test-icon" v-if="showVideoPlayer" @click="playNextVideo"/>
    </div>
    <div class="control-buttons" @click="toggleShowPlayer">{{showVideoPlayer ? 'Messages' : ''}} <b-icon-chevron-double-right class="ml-2 mt-1" v-if="showVideoPlayer"></b-icon-chevron-double-right></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BottomNavbar',
  props: ['toggleCustomMessageModal'],
  computed: {
    ...mapState([
      'playing',
      'showVideoPlayer',
    ]),
    playPauseText() {
      return this.playing ? 'Pause' : 'Play'
    },
  },
  methods: {
    playNextVideo() {
      this.$socket.emit('PLAY_NEXT_VIDEO', true);
    },
    playPreviousVideo() {
      this.$socket.emit('PLAY_PREVIOUS_VIDEO', true);
    },
    centerControl() {
      if (this.showVideoPlayer) {
        this.togglePlay();
      } else {
        this.toggleCustomMessageModal();
      }
    },
    togglePlay() {
      this.$socket.emit('TOGGLE_PLAYER', !this.playing);
    },
    toggleShowPlayer() {
      this.$store.commit('togglePlayerView');
    },
  }
}
</script>

<style>
.controls {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 10vh;
  background: #981e32;
  display: flex;
  justify-content: center;
  align-items: center;
}

.control-buttons {
  width: 33.33vw;
  text-align: center;
  color: white;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.center-control {
  border-left: 1px solid white;
  border-right: 1px solid white;
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.test-icon {
  border: 2px solid white;
  border-radius: 50px;
}
</style>