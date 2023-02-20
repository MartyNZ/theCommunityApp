<template>
  <div class="app-bar">
    <SocialIcons />
    <simple-media-player />
    <SiteSettings />
  </div>
</template>
<style lang="scss">
.app-bar {
  display: flex;
  justify-content: space-between;
  height: 40px;
  background-color: #eaeaea;

  .social-icons {
  }
  .btn-site-settings {
    margin-left: auto;
    margin-right: 0.75rem;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid red;
  }
}
</style>
