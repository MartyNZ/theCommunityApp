<script setup>
import mainNav from "~/server/mainNav.json";
import systemNav from "~/server/systemNav.json";

const mainMenu = mainNav;
const systemMenu = systemNav;
// const subMenu = "";

const mainTitle = ref("How may I direct your call?");

const setMenu = (item) => {
  mainTitle.value = item.title;
  const itemId = item.title;
  // console.log(Item);
  const linkType = item.linkType;
  if (linkType === "page") {
    window.location.href = item.link;
    toggleNav();
  } else if (linkType === "submenu") {
    setSubMenu(itemId);
  } else {
    console.log("From SetMenu");
  }
};
const setSubMenu = (subMenuId) => {
  const subMenu = mainMenu.find((subMenu) => subMenu.title === subMenuId);
  const activeMenu = subMenu.subMenu;
  // const m = mainMenu.subMenu.find((subMenu) => subMenu.title === subMenuId);
  toggleSubNav();
  // console.log(mainMenu);
  console.log(activeMenu);
};

const toggleNav = () => {
  const setNav = document.getElementsByClassName("site-nav")[0];
  setNav.classList.toggle("nav-open");

  const setNavBtn = document.getElementsByClassName(
    "site-nav__header-open-close-icon"
  )[0];
  setNavBtn.classList.toggle("toggle-icon");
};
const toggleSubNav = () => {
  const setNav = document.getElementsByClassName("site-nav__submenu")[0];
  setNav.classList.toggle("sub-nav-open");
};
</script>

<template>
  <div class="site-nav">
    <div class="site-nav__mainmenu">
      <h3 class="site-nav__mainmenu-title">{{ mainTitle }}</h3>
      <div class="site-nav__mainmenu-grid">
        <div
          class="site-nav__mainmenu-item"
          v-for="item in mainMenu"
          :key="item.title"
        >
          <font-awesome-icon
            :icon="`fa-thin ${item.icon}`"
            class="site-nav__mainmenu-item-icon"
            @click="setMenu(item, item.link, item.title, item.linkType)"
          /><span class="site-nav__mainmenu-item-title">{{ item.title }}</span>
        </div>
      </div>
      <div class="site-nav__contactmenu"></div>
      <div class="site-nav__contactmenu-grid">
        <div
          class="site-nav__contactmenu-item"
          v-for="item in systemMenu"
          :key="item.title"
        >
          <font-awesome-icon
            :icon="`fa-thin ${item.icon}`"
            class="site-nav__contactmenu-item-icon"
            @click="setMenu(item, item.link, item.title, item.linkType)"
          /><span class="site-nav__contactmenu-item-title">{{
            item.title
          }}</span>
        </div>
      </div>
    </div>
    <div class="site-nav__submenu">
      <div class="breadcrumbs">
        <span @click="toggleSubNav()" class="site-nav__submenu-title"
          >Main Menu</span
        >
        <span class="site-nav__submenu-title"> >> {{ mainTitle }}</span>
      </div>
      <pre>{{ activeMenu }}</pre>
      <div class="site-nav__submenu-grid">
        <div
          class="site-nav__submenu-item"
          v-for="item in activeMenu"
          :key="item.title"
        >
          <font-awesome-icon
            :icon="`fa-thin ${item.icon}`"
            class="site-nav__submenu-item-icon"
            @click="setSubMenu(item.title)"
          /><span class="site-nav__submenu-item-title">{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-nav {
  position: relative;
  container-type: inline-size;
  display: grid;
  height: 100%;
  z-index: -3;
  top: 0;
  padding: 1rem 1rem 1.5rem 1rem;

  &__submenu {
    position: absolute;
    bottom: 0;
    // position: absolute;
    // width: 100%;
    // margin-inline: auto;
    transform: translateY(100%);
    transition: transform ease-in 400ms;

    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // gap: 1rem;
    // justify-items: start;
    // max-width: 550px;
    // margin-inline: auto;
    // background-color: var(--clr-gray-200);
  }
  .breadcrumbs {
    align-self: start;
    font-family: "Open Sans", sans-serif;
    color: #241e5f;
    font-size: 1.17em;
    font-weight: bold;
    padding-block: 1rem;
    margin-inline: auto;
  }
  .sub-nav-open {
    bottom: 0;
    height: 100%;
    width: 100%;
    padding: 1rem 1rem 1rem 1.5rem;
    transform: translateY(0);
    transition: transform ease-in 400ms;
  }

  &__mainmenu,
  &__contactmenu,
  &__submenu {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    max-width: 100%;
    background-color: var(--clr-gray-200);

    &-title {
      text-align: center;
      padding-bottom: 1rem;
    }
    div[class$="-grid"] {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      align-content: start;
      height: 100%;
      max-width: 550px;
      margin-inline: auto;
    }
  }
  &__contactmenu {
    border-top: 1px solid var(--clr-gray-500);
    padding-top: 1rem;
  }
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
  [class$="-title"] {
    // display: block;
    font-size: 0.65rem;
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
    [class$="-title"] {
      // display: block;
      font-size: 1rem;
    }
  }
}
</style>
