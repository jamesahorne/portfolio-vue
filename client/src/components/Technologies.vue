<template>
  <article class="technologies">
    <div class="l-spacing">
      <h2 class="u-heading-1">What are my tools and tech?</h2>
      <p class="u-text">
        Here's a list of some the main tools and tech that I use.
        <br>
        For more info see my CV.
      </p>
      <div class="technologies__accordion">
        <Accordion :technologies="technologies" />
      </div>
    </div>
  </article>
</template>

<script>
import Accordion from './Accordion'

export default {
  name: 'Techonologies',
  data() {
    return {
      technologies: [
        {
          "id": "vue",
          "heading": "Vue.js",
          "contents": "I'm teaching myself Vue at the moment to learn a front-end framework. This site is built with Vue, with more coming soon!"
        },
        {
          "id": "express",
          "heading": "Express",
          "contents": "I've not used Express much, only for some basic routing. Once I finish my portfolio I'll start work on a e-commerce app which will be more complex and will grow me more."
        },
        {
          "id": "pattern-lab",
          "heading": "Pattern Lab",
          "contents": "I build a pattern library for every major project I do, with a bit of gulp on the side too."
        }
      ]
    }
  },
  components: {
    Accordion
  }
}
</script>
