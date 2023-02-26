<script setup>
import mainNav from "~/server/mainNav.json";
import systemNav from "~/server/systemNav.json";
// import { ref } from "vue";

const mainMenu = mainNav;
const systemMenu = systemNav;

const mainTitle = ref("How may I direct your call?");

const setMainTitle = (link, title, type) => {
  mainTitle.value = title;
  const linkType = type;
  if (linkType === "page") {
    // open page
    window.location.href = link;
    // toggle .nav-open
    toggleNav();
    console.log(linkType);
  } else {
    // open submenu

    // toggleNav();
    console.log(linkType);
  }
};
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
  <div class="site-nav">
    <h3 class="site-nav-main-title">{{ mainTitle }}</h3>
    <div class="site-nav__grid">
      <div
        class="site-nav__grid-item"
        v-for="item in mainMenu"
        :key="item.title"
      >
        <font-awesome-icon
          :icon="`fa-thin ${item.icon}`"
          class="site-nav__grid-item-icon"
          @click="setMainTitle(item.link, item.title, item.linkType)"
        /><span class="site-nav__system-item-title">{{ item.title }}</span>
      </div>
    </div>
    <div class="site-nav__system">
      <div
        class="site-nav__system-item"
        v-for="item in systemMenu"
        :key="item.title"
      >
        <font-awesome-icon
          :icon="`fa-thin ${item.icon}`"
          class="site-nav__system-item-icon"
          @click="setMainTitle(item.link, item.title, item.linkType)"
        /><span class="site-nav__system-item-title">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-nav {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  position: relative;
  align-items: start;
  width: 100%;
  height: 100%;
  z-index: -3;
  top: 0;
  padding: 1rem 0 2rem;

  &-main-title {
    text-align: center;
    padding-bottom: 1rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    justify-items: start;
    max-width: 550px;
    margin-inline: auto;
  }

  &__system {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    justify-items: center;
    max-width: 550px;
    margin-inline: auto;
    border-top: 1px solid var(--clr-gray-500);
    padding-top: 1rem;
  }

  div[class$="-item"] {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 4rem;
    height: 4rem;
    padding: 0.25rem 0.75rem;
    border: 1px solid var(--clr-gray-600);
    border-radius: 0.75rem;
    box-shadow: 1px 1px 2px #888;

    &:hover {
      background-color: var(--clr-primary);
      color: var(--clr-secondary);
    }

    [class$="-icon"] {
      font-size: 1.5em;
      padding: 0.5rem 0;
    }
    .site-nav__system-item-title {
      font-size: 0.65rem;
      // display: none;
    }
  }
  @media screen and (width >= 450px) {
    div[class$="-item"] {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 6rem;
      height: 6rem;
      padding: 0.25rem 0.75rem;
      border: 1px solid var(--clr-gray-600);
      border-radius: 1rem;
      box-shadow: 1px 1px 2px #888;

      [class$="-icon"] {
        font-size: 3em;
        padding: 0.5rem 0;
      }
      .site-nav__system-item-title {
        // display: block;
        font-size: 1rem;
      }
    }
  }
}
</style>
