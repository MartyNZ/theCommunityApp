<template>
  <div class="primary-navigation-container">
    <div class="tab-group">
      <a href="#" class="menu-tab"
        ><font-awesome-icon icon="fa-duotone fa-newspaper" size="6x" fa-inverse
      /></a>
      <a href="#" class="menu-tab">Events</a>
      <a href="#" class="menu-tab">Groups</a>
      <a href="#" class="menu-tab">About</a>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.primary-navigation-container {
  // position: absolute;
  // width: 100%;
  // bottom: 0px;
  // z-index: 9999;

  .tab-group {
    background-color: 1px solid #eaeaea;
    width: min(100%, 450px);
    margin-inline: auto;
    display: flex;
    justify-content: space-around;
    padding-block: 0.25rem;

    .menu-tab {
      padding: 1rem 1.5rem;
      border: 1px solid #222;
      border-radius: 0.75rem;
    }
  }
}
</style>
