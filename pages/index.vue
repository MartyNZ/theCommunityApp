<template>
  <div class="main-content">
    <Login />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main-content {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 460px, 1fr));
  place-items: center;
  padding-inline: auto;
}
</style>
