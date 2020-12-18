<template>
  <div>
    <b-button v-show="showVideoPlayer" v-b-modal.modal-1 variant="danger" class="end-session-button">End Session</b-button>

    <b-modal id="modal-1" class="text-center" hide-footer hide-header centered>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <p class="my-4">Are you sure you want to end the session?</p>
        <div class="d-flex justify-content-center w-100">
          <b-button class="w-25 cancel-button mr-3" @click="$bvModal.hide('modal-1')">Cancel</b-button>
          <b-button variant="danger" class="w-25" @click="endSession">End</b-button> 
        </div>
      </div>
    </b-modal>

    <div class="video-container" v-show="showVideoPlayer">
      <VideoPlayer :mutePlayer="true"/>
    </div>
    <ControlMessages v-if="!showVideoPlayer"/>
    <div
      v-if="message"
      class="d-flex w-100 align-items-center justify-content-center"
      style="position: fixed; bottom: 5rem;"
    >
      <div class="message d-flex align-content-center justify-content-center">
        <p class="text-center">{{ message }}</p>
      </div>
    </div>
    <div class="controls">
      <div class="control-buttons" @click="toggleShowPlayer"><b-icon-chevron-double-left class="mr-2 mt-1" v-if="!showVideoPlayer"></b-icon-chevron-double-left>{{showVideoPlayer ? '' : 'Controls'}}</div>
      <div class="control-buttons center-control" @click="centerControl"><b-icon-play-fill v-if="!playing && showVideoPlayer" class="mb-n1"/> <b-icon-pause-fill v-else-if="playing && showVideoPlayer" class="mb-n1"/> <b-icon-chat-dots-fill v-else class="mb-n1"/>{{showVideoPlayer ? playPauseText : 'Custom Message'}}</div>
      <div class="control-buttons" @click="toggleShowPlayer">{{showVideoPlayer ? 'Messages' : ''}} <b-icon-chevron-double-right class="ml-2 mt-1" v-if="showVideoPlayer"></b-icon-chevron-double-right></div>
    </div>
    <CustomMessage :showCustomMessageModal="showCustomMessageModal" :toggleCustomMessageModal="toggleCustomMessageModal"/>
  </div>
</template>

<script>
import VideoPlayer from './VideoPlayer';
import ControlMessages from './ControlMessages';
import CustomMessage from './CustomMessage';

import { mapState } from 'vuex';

export default {
  name: 'MissionControls',
  components: {
    VideoPlayer,
    ControlMessages,
    CustomMessage
  },
  data() {
    return {
      showCustomMessageModal: false
    }
  },
  computed: {
    ...mapState([
      'message',
      'showVideoPlayer',
      'playing'
    ]),
    playPauseText() {
      return this.playing ? 'Pause' : 'Play'
    },
  },
  methods: {
    togglePlay() {
      this.$socket.emit('TOGGLE_PLAYER', !this.playing);
    },
    toggleShowPlayer() {
      this.$store.commit('togglePlayerView');
    },
    centerControl() {
      if (this.showVideoPlayer) {
        this.togglePlay();
      } else {
        this.toggleCustomMessageModal();
      }
    },
    endSession() {
      this.$store.dispatch('endSession').then(() => {
        this.$socket.emit('END_SESSION', null);
        this.$socket.emit('UPDATE_USER', null);
      });

      this.$router.push({name: 'procedureInfo'});
    },
    toggleCustomMessageModal() {
      this.showCustomMessageModal = !this.showCustomMessageModal;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.message {
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
.message p {
  font-size: 1.5rem;
}

.video-container {
  width: 100vw;
  height: 90vh;
}

.end-session-button {
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 2%;
  margin-top: 2%;
}

.cancel-button {
  background: gray !important;
}
</style>