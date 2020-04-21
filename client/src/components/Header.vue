<template>
  <header class="header">
    <Brand/>
    <Nav/>
  </header>
</template>

<script>
import Brand from './Brand'
import Nav from './Nav'

export default {
  name: 'Header',
  components: {
    Brand,
    Nav
  }
}
</script>
