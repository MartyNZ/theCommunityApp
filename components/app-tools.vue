<template>
  <div class="app-tools">
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
          <a class="settings-menu__item" href="/about">About the project</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-tools {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  gap: 1rem;
  padding-right: 0.75rem;

  .settings {
    position: relative;
    display: block;

    &-menu {
      background-color: var(--clr-secondary);
      z-index: 100;
    }

    &-icon {
      width: 32px;
      height: 32px;
      transition: transform ease-out 500ms;
    }

    &-menu {
      position: absolute;
      top: 2.5rem;
      right: 0;
      background-color: var(--clr-gray-300);
      list-style-type: none;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      padding-block: 0.5rem;
      margin: 0;
      min-width: max-content;
      box-shadow: 3px 3px 5px 3px #888;
      text-align: left;

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
          background: clr(var(--clr-secondary, dark));
        }
      }
    }
    &:hover .settings-menu {
      transform: translateX(0);
    }

    &:hover .settings-icon {
      transform: rotate(270deg);
    }
  }
}
</style>
