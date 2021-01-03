<template>
  <div class="control-messages">
    <div class="test">
      <b-card no-body :key="messageInfo.message" class="message-container" v-for="messageInfo in defaultMessages">
        <button class="button shadow d-flex flex-column justify-content-center align-items-center" @click="setMessage(messageInfo.message)">
          <b-icon class="h3" :icon="messageInfo.icon"></b-icon>
          {{messageInfo.message}}
        </button>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ControlMessages',
  computed: {
    ...mapState([
      'defaultMessages',
      'userInfo'
    ])
  },
  methods: {
    setMessage(message) {
      this.$socket.emit('SEND_MESSAGE', { text: message, language: this.userInfo.selectedLanugage });
      this.$store.commit('togglePlayerView');
      setTimeout(() => {
        this.$socket.emit('SEND_MESSAGE', null);
      }, 15 * 1000);
    },
  }
}
</script>

<style>
.control-messages {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  background: #F7FBFF;
}
.message-container {
  width: 230px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
}
.button {
  display: inline-block;
  text-decoration: none;
  color: black;
  font-weight: bold;
  height: 90%;
  width: 90%;
  font-size: 1.15rem;
  border-radius: 10px;
}

.button:focus {
  outline: none;
}

.test {
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 13vh;
}
</style>