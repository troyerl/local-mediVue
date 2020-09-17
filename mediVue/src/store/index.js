import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    message: null,
    showVideoPlayer: true,
    playing: false,
  },
  mutations: {
    SOCKET_SEND_MESSAGE: (state,  message) => {
      state.message = message;
    },
    SOCKET_TOGGLE_PLAYER: (state, playingBool) => {
      state.playing = playingBool;
    },
    togglePlayerView: (state) => {
      state.showVideoPlayer = !state.showVideoPlayer;
    },
    SOCKET_END_SESSION: (state, data) => {
      // state = data;
      console.log(data);
      state.playing = false
    },
    SOCKET_UPDATE_USER: (state, data) => {
      state.userInfo = data
    }
  },
  actions: {
    updateUserInfo: (payload) => {
      this.$socket.emit('UPDATE_USER', payload);
    }
  }
})