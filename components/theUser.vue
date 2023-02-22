<template>
  <NuxtLink to="/login" id="user-btn">
    <font-awesome-icon class="sign-in" icon="fa-duotone fa-right-to-bracket" />
    <font-awesome-icon
      class="sign-out"
      icon="fa-duotone fa-right-from-bracket"
    />
  </NuxtLink>
</template>
<style>
#user-btn {
  margin-left: auto;
}
#user-btn > * {
  height: 30px;
  width: 30px;
  margin: 1px;
}
.sign-in {
  display: block;
}
.sign-out {
  display: none;
}

.signed-in .sign-out {
  display: block;
}

.signed-in .sign-in {
  display: none;
}
</style>
<script setup></script>
