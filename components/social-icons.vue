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
      target="blank"
    >
      <font-awesome-icon :icon="['fa-brands', link.icon]" />
    </a>
  </div>
</template>
