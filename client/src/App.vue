<template>
  <div id="app">
    <Header/>
    <main class="l-main">
      <Home/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>

<style lang="scss">  
@import './assets/css/style.min.css';
</style>
