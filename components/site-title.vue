<template>
  <a href="/" class="site-title">
    <compass-fm-icon />
    <h1>COMPASS FM</h1>
  </a>
</template>

<script setup></script>

<style lang="scss" scoped>
.site-title {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
  align-content: center;
  text-decoration: none;

  h1 {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 500;
    color: var(--clr-secondary);
    font-size: 1.5em;
  }
}
</style>
