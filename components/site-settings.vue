<template>
  <div class="">
    <div>
      <div class="dropdown">
        <button
          class="dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <font-awesome-icon icon="fa-duotone fa-circle-ellipsis-vertical" />
          <!-- Dropdown button
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            class=""
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
            ></path>
          </svg> -->
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <h6 class="">Dropdown header</h6>
          <span class="">Dropdown item text</span>
          <li>
            <a class="dropdown-item" href="#">Action</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another action</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
          <li>
            <hr class="" />
          </li>
          <li>
            <a class="dropdown-item" href="#">Separated link</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<style lang="scss" scoped></style>
