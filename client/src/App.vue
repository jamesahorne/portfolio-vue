<template>
  <div id="app">
    <Header/>
    <main class="l-main">
      <Home/>
      <About/>
      <Technologies/>
      <Projects/>
      <Cv/>
      <Contact/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Cv from './components/Cv'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    About,
    Technologies,
    Projects,
    Cv,
    Contact,
    Footer
  }
}
</script>

<style lang="scss">  
@import './assets/css/style.min.css';
</style>
