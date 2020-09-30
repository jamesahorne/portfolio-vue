<template>
  <article class="technologies">
    <div class="l-spacing">
      <h2 class="u-heading-1">What are my tools and tech?</h2>
      <p class="u-text">
        Here's a list of some the main tools and tech that I use.
        <br />
        For more info see my CV.
      </p>
      <div class="technologies__accordion">
        <Accordion :technologies="technologies" />
      </div>
    </div>
  </article>
</template>

<script>
import Accordion from "./Accordion";

export default {
  name: "Techonologies",
  components: {
    Accordion,
  },
  data() {
    return {
      technologies: [
        {
          id: "react",
          heading: "React.js",
          contents:
            "I'm learning React while looking for work. For my first project, I'm rebuilding my portfolio site with React, so watch this space.",
        },
        {
          id: "vue",
          heading: "Vue.js",
          contents:
            "This site is built with Vue! This will become a secondary version of my portfolio site as the main version, once built, will be built with React.",
        },
        {
          id: "pattern-lab",
          heading: "Pattern Lab",
          contents:
            "I build a pattern library for every major project I do, using Gulp and Browsersync for tasks such as watching files and compiling SCSS into minified, autoprefixed CSS.",
        },
      ],
    };
  },
};
</script>
