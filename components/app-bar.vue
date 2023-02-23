<template>
  <div class="app-bar">
    <div class="title-container"><SiteTitle /></div>
    <div class="media-player-container"><SimpleMediaPlayer /></div>
    <div class="app-tools-container"><AppTools /></div>
  </div>
</template>
<style lang="scss">
.app-bar {
  position: relative;
  height: 88px;
  box-shadow: 0 2px 3px 1px;
  padding-top: 0.25rem;
  padding-left: 0.25rem;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: var(--appbar-hgt-md) var(--appbar-hgt-md);
  grid-template-areas:
    "title app-tools"
    "media media";

  > * {
    container-type: inline-size;
  }

  .title-container {
    grid-area: title;
  }
  .media-player-container {
    grid-area: media;
    width: 320px;
    align-self: center;
    justify-self: center;
  }
  .app-tools-container {
    grid-area: app-tools;
  }
}
@media screen and (width >= 700px) {
  .app-bar {
    height: var(--appbar-hgt-md);
    grid-template-columns: 1fr 322px 1fr;
    grid-template-areas: "title media app-tools";
  }
}
</style>
