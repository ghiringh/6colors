<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/board7">Board7</RouterLink>
      <RouterLink to="/">Board19</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  grid-area: 1 / 1 / 2 / 2;
  background-color: var(--main-color);
  color: var(--dark-background-color);
}

nav{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
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
  background-color: var(--dark-background-color);
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 1fr 2fr;
}

</style>