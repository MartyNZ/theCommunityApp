<template>
  <div class="app-bar">
    <div class="title-container"><SiteTitle /></div>
    <div class="media-player-container"><SimpleMediaPlayer /></div>
    <div class="site-settings-container"><SiteSettings /></div>
  </div>
</template>
<style lang="scss">
.app-bar {
  position: relative;
  height: 88px;
  box-shadow: 0 2px 3px 1px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: var(--appbar-hgt-md) var(--appbar-hgt-md);
  grid-template-areas:
    "title settings"
    "media media";

  > * {
    container-type: inline-size;
    // border: 1px dotted darkslategrey;
  }

  .title-container {
    grid-area: title;
    padding-top: 0.25rem;
    padding-left: 0.25rem;
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
    height: var(--appbar-hgt-md);
    grid-template-columns: 15% 1fr 15%;
    grid-template-areas: "title media settings";
  }
}
</style>
