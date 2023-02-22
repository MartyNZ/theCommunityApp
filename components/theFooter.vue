<template>
  <div class="site-footer">
    <div class="community-title">
      <font-awesome-icon icon="fa-duotone fa-users-viewfinder" size="2x" />
      <h3 class="title">Compass FM Community</h3>
    </div>
    <font-awesome-icon icon="fa-duotone fa-arrow-up-from-bracket" size="2x" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.site-footer {
  display: grid;
  grid-template-columns: 1fr auto;
  border-top: 1px solid #bdbdbd;
  background-color: var(--clr-primary);
  color: var(--clr-secondary);
  box-shadow: 0 2px 3px 1px;
  align-items: center;
  padding: 0.25rem 1.5rem;

  .community-title {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    .title {
      color: var(--clr-secondary);
      text-align: left;
      font-size: 1.5rem;
      font-style: italic;
    }
  }
}
@media screen and (width > 400px) {
  .site-footer {
    padding-block: 1rem;
    .community-title {
      gap: 0.75rem;
      .title {
        font-size: 1.75rem;
      }
    }
  }
}
</style>
