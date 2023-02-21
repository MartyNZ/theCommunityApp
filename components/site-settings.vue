<template>
  <div class="">
    <div>
      <div class="dropdown">
        <font-awesome-icon
          class="dropdown-icon"
          icon="fa-light fa-circle-ellipsis-vertical"
        />
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <h6 class="dropdown-menu__title">Site Settings</h6>
          <li>
            <a class="dropdown-menu__item" href="#">Action</a>
          </li>
          <li>
            <a class="dropdown-menu__item" href="#">Another action</a>
          </li>
          <li>
            <a class="dropdown-menu__item" href="#">Something else here</a>
          </li>
          <li>
            <hr class="dropdown-menu__hr" />
          </li>
          <li>
            <a class="dropdown-menu__item" href="#">Separated link</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.dropdown {
  position: relative;

  &-icon {
    height: 30px;
    width: 30px;
    margin: 1px;
    transition: transform 500ms;

    &:hover {
      transform: rotate(270deg);

      & .dropdown-menu {
        display: block;
      }
    }
  }

  &-menu {
    position: absolute;
    // display: none;
    background-color: #b2b2b2;
    list-style-type: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-block: 0.5rem;

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
</style>
