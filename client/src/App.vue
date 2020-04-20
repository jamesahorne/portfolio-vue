<template>
  <div id="app">
    <Header/>
    <main class="l-main">
      <Home/>
      <About/>
      <Technologies/>
      <Projects/>
      <Cv/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Cv from './components/Cv'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    About,
    Technologies,
    Projects,
    Cv
  }
}
</script>

<style lang="scss">  
@import './assets/css/style.min.css';
</style>
