<script setup>
const toggleNav = () => {
  const setNav = document.getElementsByClassName("site-nav-container")[0];
  setNav.classList.toggle("nav-open");

  const setNavBtn = document.getElementsByClassName(
    "site-nav__header-open-close-icon"
  )[0];
  setNavBtn.classList.toggle("toggle-icon");
};
</script>
<template>
  <div class="site-nav__header">
    <div class="site-nav__header-icon">
      <font-awesome-icon icon="fa-duotone fa-users-viewfinder" size="2x" />
    </div>
    <h2 class="site-nav__header-title">Compass FM Community</h2>
    <div @click="toggleNav()" class="site-nav__header-open-close-icon">
      <font-awesome-icon icon="fa-duotone fa-angles-up" size="2x" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-nav__header {
  position: fixed;
  background-color: var(--clr-primary);
  bottom: 0;
  width: 100%;
  height: 68px;
  padding: 0.25rem 1.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  z-index: 501;

  &-title {
    color: var(--clr-secondary);
    text-align: left;
    font-size: 1.5rem;
    font-style: italic;
    line-height: 1.1;
  }

  &-open-close-icon {
    position: absolute;
    background-color: var(--clr-primary);
    width: 3rem;
    height: 3rem;
    right: 1rem;
    text-align: center;
    padding-top: 0.5rem;
    top: -25%;
    border-radius: 5px;
    transition: transform ease-out 300ms;
    box-shadow: 1px 1px 2px #888;
  }
  .toggle-icon {
    transform: rotateX(180deg);
    box-shadow: 1px -1px 2px #888;
  }
}
</style>
