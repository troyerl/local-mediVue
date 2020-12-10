<template>
  <b-modal id="custom-message-modal" v-model="showCustomMessageModal" class="text-center" hide-footer hide-header centered>
    <b-form @submit="onAddMessage" class="d-flex flex-column justify-content-center align-items-center">
      <div class="w-75 mb-3">
        <h3 class="text-center mb-3">Custom Message</h3>
        <b-form-input
          id="custom-message"
          v-model="message"
          placeholder="Enter custom message"
          trim
        ></b-form-input>
        <b-form-text id="custom-message">This message will be sent to the patient and added to your messages for this session</b-form-text>
      </div>
      <div v-if="error" class="text-center">
        <b-alert show variant="danger">{{error}}</b-alert>
      </div>
      <div class="d-flex justify-content-center w-100">
        <b-button type="button" class="w-25 cancel-button mr-3" @click="toggleCustomMessageModal">Cancel</b-button>
        <b-button type="submit" variant="danger" class="w-25">Send</b-button> 
      </div>
    </b-form>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CustomMessage',
  props: ['showCustomMessageModal', 'toggleCustomMessageModal'],
  data() {
    return {
      message: '',
      error: null
    }
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  methods: {
    onAddMessage(e) {
      e.preventDefault();
      if (this.message) {
        this.$socket.emit('SEND_MESSAGE', { text: this.message, language: this.userInfo.selectedLanugage });
        this.$store.commit('togglePlayerView');
        this.$store.dispatch('addCustomMessage', this.message);
        this.toggleCustomMessageModal();
        this.message = '';
      } else {
        this.error = 'Custom message required to send to patient';
      }
    }
  }
}
</script>

<style>

</style>