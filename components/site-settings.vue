<template>
  <div class="settings-container">
    <TheUser />
    <div class="settings">
      <font-awesome-icon
        class="settings-icon"
        icon="fa-duotone fa-circle-ellipsis-vertical"
      />
      <ul class="settings-menu" aria-labelledby="dropdownMenuButton2">
        <h6 class="settings-menu__title">Site Settings</h6>
        <li>
          <a class="settings-menu__item" href="#">Action</a>
        </li>
        <li>
          <a class="settings-menu__item" href="#">Another action</a>
        </li>
        <li>
          <a class="settings-menu__item" href="#">Something else here</a>
        </li>
        <li>
          <hr class="settings-menu__hr" />
        </li>
        <li>
          <a class="settings-menu__item" href="#">Separated link</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.settings-container {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
  .settings {
    position: relative;
    display: block;
    width: 32px;

    &:hover .settings-menu {
      transform: translateX(0);
    }

    &:hover .settings-icon {
      transform: rotate(270deg);
    }

    &-icon {
      height: 30px;
      width: 30px;
      margin: 1px;
      transition: transform ease-out 500ms;
    }

    &-menu {
      position: absolute;
      right: 0;
      background-color: var(--clr-secondary);
      list-style-type: none;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      padding-block: 0.5rem;
      margin: 0;
      min-width: max-content;
      box-shadow: 5px 5px 10px 2px #c3c3c3;

      transform: translateX(125%);
      transition: transform ease-out 500ms;

      &__title {
        font-weight: 600;
        font-size: 1.25rem;
        padding-right: 1rem;
        margin-block: 0.5rem;
      }

      li {
        display: block;
        padding-inline: 1rem;

        &:hover {
          background: #222;
          color: #fff;
        }
      }
    }
  }
}
</style>
