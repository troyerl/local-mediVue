<template>
  <form @submit.prevent="onSubmit" class="procedure-info">
    <h4 class="mb-0">Procedure Type:</h4>
    <div class="icon-list mt-3">
        <div class="d-flex flex-column align-items-center" :key="type.id" v-for="type in procedureTypes">
          <b-card class="shadow-sm procedure-card ml-2" @click="procedureSelect = type.id">
            <div :class="(procedureSelect === type.id ? 'clicked' : '') + ' test1'">
              <img class="procedure-icon svg" :src="'assets/svg/' + (procedureSelect === type.id ? 'clicked-' : '') +  type.svg"/>
            </div>
            <p class="mb-0 text-center">{{type.text}}</p>
          </b-card>
        </div>
    </div>

    <hr>

    <h4>Procedure Number:</h4>
    <div class="d-flex justify-content-center align-items-center align-content-center text-center">
      <b-form-input
        type="number"
        required
        placeholder="Proc. #"
        class="w-25"
        v-model="procedureNum"
        min="0"
      ></b-form-input>
      <p class="mx-3 pt-3">out of</p>
      <b-form-input
        type="number"
        required
        placeholder="Total Proc."
        class="w-25 text-center"
        v-model="totalProcedures"
        min="0"
      ></b-form-input>
    </div>

    <hr>

    <h4>Select Playlist:</h4>
    <b-form-select v-model="playlistSelect" :options="playlistList" class="w-50 mt-1 mb-5"></b-form-select>
    <!-- <div class="d-flex justify-content-center my-3">
      <div :key="playlist.value" v-for="(playlist, idx) in playlistList" >
        <button v-if="idx < 4" type="button" class="ml-3 dot">{{playlist.text}}</button>
      </div>
      <button class="ml-3 dot" type="button">Other</button>
    </div> -->
    
    
    <!-- <b-form-select v-model="playlistSelect" :options="playlistList" class="w-50 mt-1 mb-5"></b-form-select> -->
    <div class="controls">
      <div class="control-buttons"></div>
      <div class="control-buttons center-control"><b-button type="submit" class="start-session"><b-icon-tv></b-icon-tv> Start Session</b-button></div>
      <div class="control-buttons"></div>
    </div>
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
        { value: null, text: 'Please select a playlist'},
        { value: 'superhero', text: 'Superhero' },
        { value: 'princess', text: 'Princess' },
        { value: 'twitch', text: 'Twitch' },
        { value: 'peppa the pig', text: 'Peppa the Pig' },
        { value: 'live news', text: 'Live News' },
        { value: 'other', text: 'Other' },
      ],
      procedureNum: null,
      totalProcedures: null,
      error: null
    }
  },
  methods: {
    onSubmit() {
      this.error = null;
      if (this.procedureSelect && this.procedureTypes) {
        this.$router.push({name: 'missionControls'});
      } else {
        this.error = 'Missing required info to begin';
      }
    }
  }
}
</script>

<style>
  .procedure-card {
    width: 17vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .procedure-info {
    min-height: 100vh;
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

  .controls {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 10vh;
    background: #3AB5F1;
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

  .dot {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    font-size: 11px;
    color: white;
    font-weight: bold;
    text-align: center;
    background: red;
    border: 1px solid red;
    word-wrap: break-word;
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
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 4px solid black;
  }

  .clicked {
    background: #3AB5F1;
  }

  .svg {
    color: white;
  }
</style>