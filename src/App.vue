<template>
  <div>
    <app-Header></app-Header>
    <!-- <component v-bind:is="component"></component> -->
    <router-view :key="$route.path"></router-view>
    <!-- <app-Footer></app-Footer> -->
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    'app-Footer': Footer,
    'app-Header': Header
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
