import Vuex from 'vuex';
import Vue from 'vue';
import gql from './graphql';
import apolloClient from './apollo';

import config from '../../config';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    message: null,
    startTime: null,
    showVideoPlayer: true,
    playing: false,
    playlists: null,
    playNextVideo: false,
    playPreviousVideo: false,
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
      state.playing = false;
    },
    SOCKET_UPDATE_USER: (state, data) => {
      state.userInfo = data;
    },
    SOCKET_PLAY_NEXT_VIDEO: (state, data) => {
      state.playNextVideo = data;
      state.playing = true;
    },
    SOCKET_PLAY_PREVIOUS_VIDEO: (state, data) => {
      state.playPreviousVideo = data;
      state.playing = true;
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
    RESET_PLAY_VIDEOS: (state) => {
      state.playNextVideo = false;
      state.playPreviousVideo = false;
    }
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
          getHospitalById: { ...playlists },
        },
      } = await apolloClient.query({
        query: gql.getPlaylists,
        variables: { hospitalId: config.HOSPITAL_ID },
      });

      playlists[0].playlists.sort(function(a, b) {
        return b.timesPlayed - a.timesPlayed;
      });
      commit('UPDATE_PLAYLIST', { playlists: playlists[0].playlists });
    },
    setStartTime({ commit }) {
      commit('SET_START_TIME', { startTime: new Date() });
    },
    async endSession({ state }) {
      let variables = {
        mediVueId: config.MEDIVUE_ID, 
        startTime: state.startTime.toISOString(), 
        endTime: new Date().toISOString(), 
        playlistId: state.userInfo.playlist.id,
        procedureNum: parseInt(state.userInfo.procedureNum), 
        procedureSelect: state.userInfo.procedureSelect, 
        selectedLanugage: state.userInfo.selectedLanugage, 
        totalProcedures: parseInt(state.userInfo.totalProcedures),
        hospitalId: config.HOSPITAL_ID
      };

      await apolloClient.mutate({
        mutation: gql.createUsageReport,
        variables
      });
    },
    resetVideoPlaying({ commit }) {
      commit('RESET_PLAY_VIDEOS')
    }
  }
})