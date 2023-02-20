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
  margin-bottom: 9rem;

  > * {
    container-type: inline;
    border: 2px dashed purple;
  }
  .app-bar-container {
  }
  .header-container {
  }
  .content-container {
  }
  .footer-container {
    margin-top: auto;
  }
}
</style>
