import Vuex from 'vuex';
import Vue from 'vue';
import gql from './graphql';
import apolloClient from './apollo';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    message: null,
    startTime: null,
    showVideoPlayer: true,
    playing: false,
    playlists: null,
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
    },
    UPDATE_PLAYLIST: (state, data) => {
      state.playlists = data.playlists;
    },
    SET_START_TIME: (state, data) => {
      state.startTime = data.startTime;
    },
  },
  actions: {
    updateUserInfo: (payload) => {
      this.$socket.emit('UPDATE_USER', payload);
    },
    addCustomMessage: ({ commit }, payload) => {
      commit('updateDefaultMessage', payload);
    },
    async getPlaylists({ commit }) {
      const {
        data: {
          getAdminById: { ...playlists },
        },
      } = await apolloClient.query({
        query: gql.getPlaylists,
        variables: { id: process.env.VUE_APP_ADMIN_ID },
      });
      playlists.playlists.sort(function(a, b) {
        return b.timesPlayed - a.timesPlayed;
      });
      commit('UPDATE_PLAYLIST', { playlists: playlists.playlists });
    },
    setStartTime({ commit }) {
      commit('SET_START_TIME', { startTime: new Date() });
    },
    async endSession({ state }) {
      await apolloClient.mutate({
        mutation: gql.createUsageReport,
        variables: { mediVueId: process.env.VUE_APP_MEDIVUE_ID, startTime: state.startTime.toISOString(), endTime: new Date().toISOString(), playlistId: state.userInfo.playlist.id },
      });
    }
  }
})