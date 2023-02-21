<template>
  <div id="main-layout">
    <div class="app-bar-container">
      <AppBar />
    </div>
    <div class="header-container">
      <TheHeader />
    </div>
    <div class="content-container">
      <NuxtPage />
    </div>
    <div class="footer-container">
      <TheFooter />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
#main-layout {
  min-height: 100vh;
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas:
    "pageAppBar"
    "pageHeader"
    "pageContent"
    "pageFooter";

  > * {
    container-type: inline-size;
  }
  .app-bar-container {
    background-color: #eaeaea;
    grid-area: pageAppBar;
    position: fixed;
    top: 0;
    width: 100%;
  }
  .header-container {
    background-color: #fff;
    grid-area: pageHeader;
    position: relative;
    margin-top: 88px;
    width: 100%;
    z-index: -1;
  }
  .content-container {
    grid-area: pageContent;
    overflow: auto;
    z-index: -1;
    margin-bottom: 120px;
    width: 100%;
  }
  .footer-container {
    grid-area: pageFooter;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
@media (width >= 600px) {
  #main-layout > .header-container {
    margin-top: 44px;
  }
}
</style>
