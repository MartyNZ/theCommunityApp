<template>
  <div class="site-footer">
    <div class="community-title">
      <div class="community-icon">
        <font-awesome-icon icon="fa-duotone fa-users-viewfinder" size="2x" />
      </div>
      <h3 class="title">Compass FM Community</h3>
    </div>
    <div class="nav-open-close-icon">
      <font-awesome-icon icon="fa-duotone fa-angles-up" size="2x" />
    </div>
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
      line-height: 1.1;
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
