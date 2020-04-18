<template>
  <div id="app">
    <Header/>
    <main class="l-main">
      <Home/>
      <About/>
      <Technologies/>
      <Projects/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    About,
    Technologies,
    Projects
  }
}
</script>

<style lang="scss">  
@import './assets/css/style.min.css';
</style>
