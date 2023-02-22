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
          class="sign-out"
          icon="fa-duotone fa-right-from-bracket"
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
