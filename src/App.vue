<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="container">
    <h1>App.vue</h1>
    <header class="nav">
      <RouterLink to="/home" class="link">home</RouterLink>
      <RouterLink to="/v-bind" class="link">v-bind</RouterLink>
      <RouterLink to="/about" class="link">about</RouterLink>
      <RouterLink to="/v-for" class="link">v-for</RouterLink>
      <RouterLink to="/props" class="link">props</RouterLink>
      <RouterLink to="/emit" class="link">emit</RouterLink>
      <RouterLink to="/v-show" class="link">v-show</RouterLink>
      <RouterLink to="/model" class="link">model</RouterLink>
    </header>
    <div class="router-view">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 248, 196);
  display: flex;
  align-items: center;
  flex-direction: column;
}

.nav {
  background-color: rgb(252, 217, 90);
  width: 100vw;
  height: 20px;
  text-align: center;
  padding: 2px;
}

.link {
  margin: 30px;
  color: white;
  text-decoration: none;
}

.link:hover {
  color: rgb(36, 138, 63);
}
</style>
