import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    message: null,
    showVideoPlayer: true,
    playing: false,
    defaultMessages: [
      'You are half-way done', 
      'Ten minutes remaining',
      'Five minutes remaining',
      'Hold your breath',
      'You are doing great!',
      'About 2 minutes remaining',
      'You may breathe normally now',
      'Your parents are proud of you!',
      'Please do not move while we come into the room',
    ]
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
    SOCKET_END_SESSION: (state) => {
      state.playing = false
    },
    SOCKET_UPDATE_USER: (state, data) => {
      state.userInfo = data
    },
    updateDefaultMessage: (state, data) => {
      state.defaultMessages.push(data);
    }
  },
  actions: {
    updateUserInfo: (payload) => {
      this.$socket.emit('UPDATE_USER', payload);
    },
    addCustomMessage: ({ commit }, payload) => {
      commit('updateDefaultMessage', payload);
    }
  }
})