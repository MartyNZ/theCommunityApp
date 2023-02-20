<template>
  <div class="simple-media-player">
    <audio controls name="media">
      <source
        src="http://stream.compassfm.org.nz:8000/Compass_FM_104.9"
        type="audio/mpeg"
      />
    </audio>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.simple-media-player {
  audio {
    height: 40px;
    padding-block: 2px;
  }
}
</style>
