<template>
  <div id="main-layout">
    <div class="app-bar-container">
      <AppBar />
    </div>
    <div v-if="$route.fullPath === '/'" class="header-container">
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
  --appbar-hgt-sm: 88px;
  --appbar-hgt-md: 44px;

  min-height: 100vh;
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas:
    "siteAppbar"
    "homeHeader"
    "pageContent"
    "siteNav";

  & > :nth-child(2) {
    margin-top: calc(var(--appbar-hgt-sm) + 1rem);
  }

  > * {
    container-type: inline-size;
  }
  .app-bar-container {
    background-color: #1d184c;
    grid-area: siteAppbar;
    position: fixed;
    top: 0;
    width: 100%;
  }
  .header-container {
    background-color: #fff;
    grid-area: homeHeader;
    position: relative;
    margin-top: calc(var(--appbar-hgt-sm) + 1rem);
    width: 100%;
    z-index: -1;
  }
  .content-container {
    grid-area: pageContent;
    overflow: auto;
    z-index: -1;
    margin-bottom: 120px;
    width: 100%;
    // margin-top: calc(var(--appbar-hgt-sm) + 1rem);
  }
  .footer-container {
    grid-area: siteNav;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
@media (width >= 600px) {
  #main-layout {
    & > :nth-child(2) {
      margin-top: calc(var(--appbar-hgt-md) + 1rem);
    }

    .content-container {
      grid-area: pageContent;
      overflow: auto;
      z-index: -1;
      margin-bottom: 120px;
      width: 100%;
      // margin-top: calc(var(--appbar-hgt-sm) + 1rem);
    }
  }
}

@media (width >= 1140px) {
  #mainLayout {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas:
      "siteAppbar siteAppbar"
      "siteNav homeHeader"
      "siteNav pageContent";
  }
}

.fa-duotone-group {
  .fa-primary {
    fill: var(--clr-secondary);
  }
  .fa-secondary {
    fill: var(--clr-secondary);
  }

  &:hover {
    .fa-primary {
      opacity: 0.4;
    }
    .fa-secondary {
      opacity: 1;
    }
  }
}
</style>
