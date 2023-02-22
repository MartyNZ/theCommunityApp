<template>
  <div class="app-tools">
    <div class="user-icon">
      <font-awesome-icon icon="fa-duotone fa-user-vneck" size="2x" />
    </div>
    <SignInOut />
    <div class="settings">
      <div class="settings-icon">
        <font-awesome-icon
          icon="fa-duotone fa-circle-ellipsis-vertical"
          size="2x"
        />
      </div>
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
.app-tools {
  display: grid;
  grid-template-columns: repeat(3, calc(2rem + 2px));
  justify-items: center;
  padding-inline: 1rem;
  gap: 1rem;

  margin-left: auto;
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
      transition: transform ease-out 500ms;
    }

    &-menu {
      position: absolute;
      top: 3rem;
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
