<template>
  <div class="disk"
       :class="{disk_playing: isPlaying}">
    <label class="disk_cover"
           ref="cover"
           for="file"
           :style="{transform: stopMatrix, backgroundImage: coverUrl ? `url(${coverUrl})` : ''}" />
    <input type="file"
           id="file"
           ref="file"
           accept=".mp3"
           multiple
           @change="handleChange" />
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>