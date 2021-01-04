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
    <BottomNavbar :toggleCustomMessageModal="toggleCustomMessageModal"/>
    <CustomMessage :showCustomMessageModal="showCustomMessageModal" :toggleCustomMessageModal="toggleCustomMessageModal"/>
  </div>
</template>

<script>
import VideoPlayer from './VideoPlayer';
import ControlMessages from './ControlMessages';
import CustomMessage from './CustomMessage';
import BottomNavbar from './BottomNavbar';

import { mapState } from 'vuex';

export default {
  name: 'MissionControls',
  components: {
    VideoPlayer,
    ControlMessages,
    CustomMessage,
    BottomNavbar
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
    ]),
  },
  methods: {
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