<template>
  <div class="sign-in-out">
    <NuxtLink to="/login" id="sing-in-out-btn">
      <div class="sign-in-out-icon">
        <font-awesome-icon
          class="sign-in"
          icon="fa-duotone fa-right-to-bracket"
          size="2x"
        />
        <font-awesome-icon
          class="user-avatar"
          icon="fa-duotone fa-user-vneck"
          size="2x"
        />
      </div>
    </NuxtLink>
  </div>
</template>
<style>
.sign-in {
  display: block;
}
.user-avatar {
  display: none;
}

.signed-in .user-avatar {
  display: block;
}

.signed-in .sign-in {
  display: none;
}
</style>
<script setup></script>
