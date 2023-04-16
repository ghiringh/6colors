<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Board19</RouterLink>
        <RouterLink to="/board7">Board7</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>