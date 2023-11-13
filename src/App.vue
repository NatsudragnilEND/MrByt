<template>
  <div class="app">
    <div class="main-content">
      <Nav />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
</script>

<style lang="scss" scoped>
.app {
  position: relative;
  min-height: 100vh;
}

.main-content {
  padding-bottom: 100px; /* Установите такой же отступ, как высота футера */
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #3e3e3e;
  color: white;
  text-align: center;
}
</style>