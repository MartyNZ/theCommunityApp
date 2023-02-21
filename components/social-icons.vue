<script setup>
const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/#",
    icon: "fa-facebook",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/#",
    icon: "fa-youtube",
  },
];
</script>
<template>
  <div class="social-icons">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      class="social-icons-link"
      target="blank"
    >
      <font-awesome-icon :icon="['fa-brands', link.icon]" />
    </a>
  </div>
</template>
<style lang="scss" scoped>
.social-icons-link {
  svg {
    color: #5f5f5f;
    height: 40px;
    width: 40px;
    margin: 2px;
  }
}
</style>
