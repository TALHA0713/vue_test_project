<template>
  <div id="app" class="app-container">
    <navbar />
    <main class="content">
      <router-view />
    </main>
    <footer-component />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    FooterComponent
  }
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #333;
}
</style>
