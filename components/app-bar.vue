<template>
  <div class="app-bar">
    <div class="social-icons-container"><SocialIcons /></div>
    <div class="media-player-container"><SimpleMediaPlayer /></div>
    <div class="site-settings-container"><SiteSettings /></div>
  </div>
</template>
<style lang="scss">
.app-bar {
  position: relative;
  display: flex;
  height: 44px;
  background-color: #eaeaea;

  > * {
    container-type: inline-size;
    border: 2px dotted blue;
  }

  .social-icons-container,
  .site-settings-container {
    flex: 1 1 15%;
  }
  .media-player-container {
    flex: 1 1 70%;
    min-width: 300px;
    text-align: center;
  }
  .site-settings-container {
    text-align: right;
    padding-right: 1rem;
    padding-top: 0.25rem;
  }
}
</style>
