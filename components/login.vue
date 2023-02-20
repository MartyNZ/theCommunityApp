<template>
  <div class="">
    <h2 class="">Login</h2>
    <form>
      <div class="">
        <label for="exampleInputEmail2" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail2"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group mb-6">
        <label for="exampleInputPassword2" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword2"
          placeholder="Password"
        />
      </div>
      <div class="flex justify-between items-center mb-6">
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck2" />
          <label class="form-check-label" for="exampleCheck2"
            >Remember me</label
          >
        </div>
        <a href="#!" class="">Forgot password?</a>
      </div>
      <button type="submit" class="">Sign in</button>
      <p class="">
        Not a member?
        <a href="#!" class="">Register</a>
      </p>
    </form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
