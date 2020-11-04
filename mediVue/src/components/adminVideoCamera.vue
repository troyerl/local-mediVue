<template>
  <div class="videoCamera">
    <video autoplay="true" id="videoElement"></video>
  </div>
</template>

<script>
export default {
  name: 'adminVideoCamera',
  mounted() {
    this.video = document.querySelector("#videoElement");
      // request access to webcam
    navigator.mediaDevices.getUserMedia({video: true}).then((stream) => this.video.srcObject = stream);

    const FPS = 30;
    setInterval(() => {
      this.$socket.emit('CAMERA_DATA', this.getFrame());
    }, 1000 / FPS);
  },
  data() {
    return {
      video: null
    }
  },
  methods: {
    getFrame() {
      const canvas = document.createElement('canvas');
      canvas.width = this.video.videoWidth;
      canvas.height = this.video.videoHeight;
      canvas.getContext('2d').drawImage(this.video, 0, 0);
      const data = canvas.toDataURL('image/png');
      return data;
    }
  }
}
</script>

<style>
  #videoElement {
    width: 100%;
    height: 100%;
    background-color: #666;
  }
  .videoCamera {
    width: 20%;
    height: 20%;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>