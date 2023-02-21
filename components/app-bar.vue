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

  display: grid;
  grid-template-rows: 44px 44px;
  grid-template-areas:
    "social settings"
    "media media";
  height: 88px;

  > * {
    container-type: inline-size;
    // border: 1px dotted darkslategrey;
  }

  .social-icons-container {
    grid-area: social;
  }
  .media-player-container {
    grid-area: media;
    min-width: 300px;
    text-align: center;
  }
  .site-settings-container {
    grid-area: settings;
    text-align: right;
    padding-right: 1rem;
    padding-top: 0.25rem;
  }
}
@media screen and (width >= 600px) {
  .app-bar {
    height: 44px;
    grid-template-columns: 15% 1fr 15%;
    grid-template-areas: "social media settings";
  }
}
</style>
