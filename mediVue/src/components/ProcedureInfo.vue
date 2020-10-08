<template>
  <form class="procedure-info">
    <b-card class="shadow-sm w-75">
      <p class="mb-2 text-center font-weight-bold mt-n1">Procedure Type</p>

      <div class="d-flex mb-2 ">
        <div @click="procedureSelect = type.id" :key="type.text" v-for="(type, idx) in procedureTypes" :class="(idx !== procedureTypes.length - 1 ? 'border-right ' : '') + 'procedure-div d-flex flex-column justify-content-center align-items-center'">
          <div :class="(procedureSelect === type.id ? 'clicked' : '') + ' test1'">
            <img class="procedure-icon svg" :src="'assets/svg/' + (procedureSelect === type.id ? 'clicked-' : '') +  type.svg"/>
          </div>
          <p class="mb-0 text-center">{{type.text}}</p>
        </div>
      </div>
    </b-card>
    <!-- <h5 class="mb-0 mb-2">Procedure Type:</h5>
    <div class="icon-list">
      <div :key="type.text" v-for="type in procedureTypes">
        <b-card class="procedure-card1 ml-2 shadow-sm" @click="procedureSelect = type.id">
          <div class="w-100 d-flex justify-content-center">
            <div :class="(procedureSelect === type.id ? 'clicked' : '') + ' test1'">
              <img class="procedure-icon svg" :src="'assets/svg/' + (procedureSelect === type.id ? 'clicked-' : '') +  type.svg"/>
            </div>
          </div>
          <p class="mb-0 text-center">{{type.text}}</p>
        </b-card>
      </div>
    </div> -->

    <div class="w-100 d-flex justify-content-center mt-3">
      <div class="w-50 text-center border-right d-flex flex-column justify-content-center align-items-center">
        <b-card class="w-75 shadow-sm">
          <p class="mb-2 text-center font-weight-bold">Procedure Number</p>
          <div class="d-flex  justify-content-center align-items-center align-content-center text-center">

  
            <b-form-input
              type="number"
              required
              placeholder="1"
              class="procedure-input text-center"
              v-model="procedureNum"
              min="0"
            ></b-form-input>

            <p class="mx-2 pt-3">out of</p>
            <b-form-input
              type="number"
              required
              placeholder="19"
              class="procedure-input text-center"
              v-model="totalProcedures"
              min="0"
            ></b-form-input>
          </div>
        </b-card>
      </div>

      <div class="w-50 d-flex flex-column justify-content-center align-items-center">
        <b-card class="w-50 shadow-sm">
          <p class="mb-2 text-center font-weight-bold">Patient Language</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="prev" @click="plusSlides(-1)">&#10094;</span>
            <div class="d-flex flex-column align-items-center">
              <img class="language-icon" :src="'assets/svg/lang/' + languageOptions[selectedLanugage].svg" :alt="languageOptions[selectedLanugage].text">
              <p class="mb-0">{{languageOptions[selectedLanugage].text}}</p>
            </div>
            <span class="next" @click="plusSlides(1)">&#10095;</span>
          </div>
        </b-card>
      </div>
    </div>

    <b-card class="mt-3 shadow-sm">
      <p class="mb-2 text-center font-weight-bold">Select Playlist</p>

      <b-button-group class="mb-1 mx-3">
        <b-button @click="playlistSelect = playlist.value" :variant="playlistSelect === playlist.value ? 'dark' : 'outline-dark'" :style="idx < 4 ? '' : 'display: none;'" :key="playlist.value" v-for="(playlist, idx) in playlistList">{{playlist.text}}</b-button>
        <b-button @click="playlistSelect = null" variant="outline-dark">Other</b-button>
      </b-button-group>
    </b-card>

    <div class="procedure-controls">
      <div class="control-buttons"></div>
      <div class="control-buttons center-control"><b-button type="button" @click="onSubmit" class="start-session"><b-icon-tv></b-icon-tv> Start Session</b-button></div>
      <div class="control-buttons"></div>
    </div>
    <b-modal v-model="showError" hide-footer hide-header centered>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h2 class="text-red">Oops!</h2>
        <span>{{error}}</span>
        <b-button @click="showError = false" style="background: #981e32; color: white; width: 40%;" variant="#981e32" class="mt-3 mb-2"><b-icon-x></b-icon-x>Close</b-button>
      </div>
    </b-modal>
  </form>
</template>

<script>
export default {
  name: 'ProcedureInfo',
  data() {
    return {
      procedureSelect: null,
      procedureTypes: [
        {id: 'head', svg: 'head.svg', text: 'Head'},
        {id: 'chest', svg: 'chest.svg', text: 'Chest'},
        {id: 'abdomen', svg: 'abdomen.svg', text: 'Abdomen'},
        {id: 'extremeties', svg: 'extremeties.svg', text: 'Extremeties'},
        {id: 'other', svg: 'other.svg', text: 'Other'},
      ],
      playlistSelect: null,
      playlistList: [
        { value: 'superhero', text: 'Superhero' },
        { value: 'princess', text: 'Princess' },
        { value: 'twitch', text: 'Twitch' },
        { value: 'peppa the pig', text: 'Peppa the Pig' },
        { value: 'live news', text: 'Live News' },
      ],
      procedureNum: null,
      totalProcedures: null,
      languageOptions: [
        { text: 'English', svg: 'english.svg', value: 'en' },
        { text: 'Spanish', svg: 'spanish.svg', value: 'es' },
        { text: 'Burmese', svg: 'burmese.svg', value: 'my' },
        { text: 'Arabic', svg: 'arabic.svg', value: 'ar' },
      ],
      selectedLanugage: 0,
      showError: false,
      error: null
    }
  },
  methods: {
    onSubmit() {
      this.error = null;
      if (this.procedureSelect && this.playlistSelect) {
        if (!this.procedureNum) {
          this.procedureNum = 1;
        }
        if (!this.totalProcedures) {
          this.totalProcedures = 19;
        }

        this.$socket.emit('UPDATE_USER', {
          playlist: [
            {url: 'https://www.youtube.com/watch?v=3mMVcCMO_Ng'},
            {url: 'https://www.youtube.com/watch?v=V-kT1oGCRCE'},
            {url: 'https://www.youtube.com/watch?v=HJq3m-Ck2FI'},
          ],
          procedureType: ''
        })
        this.$router.push({name: 'missionControls'});
      } else {
        this.error = 'Missing required info to begin';
        this.showError = true;
      }
    },
    plusSlides(slideChoice) {
      this.selectedLanugage = this.selectedLanugage + slideChoice;
      if (this.selectedLanugage < 0) {
        this.selectedLanugage = this.languageOptions.length - 1;
      } else if (this.selectedLanugage > this.languageOptions.length - 1) {
        this.selectedLanugage = 0;
      }
    }
  }
}
</script>

<style>
  .procedure-div {
    width: 20% !important;
  }
  .procedure-input {
    width: 37% !important;
  }
  .card-body {
    padding: 0.75rem !important;
  }
  .language-icon {
    width: 50px;
    height: 50px;
  }
  .procedure-card {
    width: 13vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .procedure-card1 {
    width: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .procedure-info {
    min-height: 90vh;
    width: 100vw;
    background: #F7FBFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .start-session {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .btn-secondary {
    background: none !important;
  }
  .procedure-controls {
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
    font-family: bold,sans-serif;
    font-weight: 400;
  }
  .icon-list {
    display: flex;
    justify-content: center;
    width: 90% !important;
  }
  .procedure-icon {
    width: 70%;
    height: 70%;
  }
  .test1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid black;
  }
  .clicked {
    background: #981e32;
  }
  .svg {
    color: white;
  }
</style>