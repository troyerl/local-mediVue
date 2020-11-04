<template>
  <div class="videoCamera">
    <img id="videoElement" src="">
  </div>
</template>

<script>
export default {
  name: 'patientCameraView',
  mounted() {
    const img = document.querySelector('img');
    this.sockets.subscribe('CAMERA_DATA', (message) => {
      img.src = message;
    });
  }
}
</script>

<style>

</style>