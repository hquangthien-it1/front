<template>
  <div class="container" id="app">
    <navbar></navbar>
    <login></login>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Login from './components/authentication/Login.vue'
export default {
  components: {
      'navbar': Navbar,
      'login': Login
  }
}
</script>

<style lang="scss">

</style>
