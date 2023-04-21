<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Board19</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
@media screen, print {
  header {
    grid-area: 1 / 1 / 2 / 2;
    background-color: var(--header-background-color);
    color: var(--font-neg-color);
    display: grid;
    justify-items: center;
  }

  nav {
    height: 100%;
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: right;
    align-items: center;
    font-size: 2.5rem;
    font-weight: bold;
    font-family: var(--font-family);
    gap: 2.5rem;
    margin-right: 2.5rem;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  main {
    grid-area: 2 / 1 / 3 / 2;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr;
    max-width: 1400px;
  }
}

@media (orientation: landscape) {
  main {
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr 1fr;
    justify-self: center;
  }
}
</style>