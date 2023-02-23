<script setup>
import menuMain from "~/server/menuMain.json";
const mainMenu = menuMain;
</script>

<template>
  <div class="site-nav">
    <h3>How may I direct your call?</h3>
    <div class="site-nav_grid">
      <div
        v-for="item in mainMenu"
        :key="item.title"
        class="site-nav__menu-icon"
      >
        <font-awesome-icon :icon="`fa-duotone ${item.icon}`" size="6x" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-nav {
  width: 100vw;
  // z-index: -3;
  top: 0;

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
