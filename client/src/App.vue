<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/images/logo.png">
    <HelloWorld msg="Welcome to my portfolio site"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">  
@import './assets/css/style.min.css';
</style>
