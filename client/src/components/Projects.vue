<template>
  <article class="projects" id="projects">
    <div class="l-spacing">
      <h2 class="u-heading-1">Enjoy my previous work:</h2>
      <div class="projects__grid projects__grid--1">
        <!-- Can't loop through template root, so am including the ProjectCard component inside Projects -->
        <div class="project-card"
            v-for="project in projects"
            :key="`project__${project.id}`"
        >
          <h3 class="u-heading-3 u-heading-3--center">{{ project.heading }}</h3>
          <figure class="project-card__figure">
            <picture>
              <source :srcset="getProjectImage( project.image_webp )"
                      media="(min-width: 320px)"
                      type="image/webp"
              >
              <img class="project-card__image"
                   :src="getProjectImage( project.image_other )"
                   :alt="`A screenshot of ${ project.image_alt }`"
              >
            </picture>
            <figcaption class="project-card__caption">
              <p class="u-text u-text--center">{{ project.description}}</p>
              <p class="u-text u-text--center">
                <a class="u-link u-link--invert-@md" :href="project.link">See for yourself</a>
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          "id": "my-portfolio",
          "heading": "My portfolio site",
          "description": "This is my personal site. It doesn't do very much, but it looks nice!",
          "image_webp": "my-portfolio.webp",
          "image_other": "my-portfolio.png",
          "image_alt": "my portfolio site",
          "link": "https://www.jamesahorne.dev"
        }
      ]
    }
  },
  methods: {
    getProjectImage(projectImage) {
      return require(`../assets/images/projects/${ projectImage }`)
    }
  }
}
</script>
