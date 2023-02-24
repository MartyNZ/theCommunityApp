<template>
  <div class="main">
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
    </div>
    <div class="site-nav-container">
      <SiteNavMenu />
    </div>
    <SiteNavHeader />
  </div>
</template>

<script setup></script>

<style lang="scss">
.main {
  position: relative;
  #main-layout {
    --appbar-hgt-sm: 88px;
    --appbar-hgt-md: 44px;

    min-height: 100vh;
    min-height: 100dvh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas:
      "siteAppbar"
      "homeHeader"
      "pageContent";

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
      z-index: 502;
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
    }
    // .footer-container {
    //   grid-area: siteNav;
    //   position: fixed;
    //   bottom: 0;
    //   width: 100%;
    // }
  }
}
@media (width >= 700px) {
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
    }
  }
}

@media (width >= 1140px) {
  // #mainLayout {
  //   grid-template-areas:
  //     "siteAppbar siteAppbar"
  //     "siteNav homeHeader"
  //     "siteNav pageContent";
  // }
}

div[class$="-icon"] {
  width: fit-content;
  .fa-duotone-group {
    .fa-primary {
      fill: var(--clr-secondary);
    }
    .fa-secondary {
      fill: var(--clr-secondary);
    }
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

.site-nav-container {
  position: fixed;
  bottom: 0;
  // height: calc(100% - var(--appbar-hgt-md));
  width: 100vw;
  background-color: var(--clr-gray-200);
  z-index: 500;
  transform: translateY(100%);
  transition: transform ease-in 400ms;
}
.nav-open {
  // bottom: 0;
  height: calc(100% - 156px);
  bottom: 68px;
  transform: translateY(0);
  transition: transform ease-out 400ms;
}
</style>
