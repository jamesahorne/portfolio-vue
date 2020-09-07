<template>
  <article class="cv" id="cv">
    <div class="l-spacing">
      <h2 class="u-heading-1">Wanna see my CV?</h2>
      <div class="cv__main">
        <header class="cv__header">
          <h1 class="cv__title">James Horne</h1>
          <h2 class="cv__subtitle">Front-End Developer</h2>
        </header>
        <div class="cv__layout">
          <section class="cv__primary">
            <article class="cv__section cv__section--summary">
              <h3 class="cv__heading-1">Summary</h3>
              <div class="cv__content">
                <p>Driven and enthusiastic front-end developer with a desire to deliver a high-quality front-end, looking to gain experience and keep learning and growing.</p>
              </div>
            </article>
            <article class="cv__section cv__section--projects">
              <h3 class="cv__heading-1">Projects</h3>
              <div class="cv__content">
                <ul class="cv__list cv__list--bullets">
                  <li
                    v-for="(project, index) in projects"
                    :key="project.id + index"
                  >{{ project.item }}</li>
                </ul>
              </div>
            </article>
            <article class="cv__section cv__section--experience">
              <h3 class="cv__heading-1">Experience</h3>
              <div class="cv__content">
                <article
                  class="cv__experience-block"
                  v-for="experience in experiences"
                  :key="'cv__experience--' + experience.id"
                >
                  <h4 class="cv__heading-2">
                    {{ experience.title }}
                    <span
                      class="cv__date"
                      v-if="experience.endDate"
                    >{{ experience.startDate }} - {{ experience.endDate }}</span>
                    <span class="cv__date" v-else>{{ experience.startDate }} - present</span>
                  </h4>
                  <h5 class="cv__heading-3">{{ experience.company }}</h5>
                  <p>{{ experience.description }}</p>
                  <ul class="cv__list cv__list--bullets">
                    <li
                      v-for="detail in experience.details"
                      :key="'cv__experience-details--' + detail.id"
                    >{{ detail.item }}</li>
                  </ul>
                </article>
              </div>
            </article>
          </section>
          <section class="cv__secondary">
            <aside class="cv__section cv__section--contact">
              <h3 class="cv__heading-1">Contact</h3>
              <div class="cv__content">
                <ul class="cv__list cv__list--icons">
                  <li class="cv__portfolio">
                    <a
                      class="u-link u-link--cv"
                      href="https://www.jamesahorne.dev"
                    >www.jamesahorne.dev</a>
                  </li>
                  <li class="cv__linked-in">
                    <a
                      class="u-link u-link--cv"
                      href="https://www.linkedin.com/in/jamesahorne/"
                    >jamesahorne</a>
                  </li>
                  <li class="cv__github">
                    <a class="u-link u-link--cv" href="https://github.com/jamesahorne/">jamesahorne</a>
                  </li>
                  <li class="cv__email">
                    <a
                      class="u-link u-link--cv"
                      href="mailto:james99h39@gmail.com"
                    >james99h39@gmail.com</a>
                  </li>
                  <li class="cv__phone">07531 180950</li>
                </ul>
              </div>
            </aside>
            <article class="cv__section cv__section--skills">
              <h3 class="cv__heading-1">Skills</h3>
              <div class="cv__content">
                <ul class="cv__list cv__list--skills">
                  <li v-for="skill in skills" :key="'cv__skill--' + skill.id">
                    {{ skill.item }}
                    <div class="cv__star">
                      <span
                        v-for="number in skill.starNumber"
                        :key="'cv__skill-star--' + skill.id + number"
                      >&#9733;</span>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
            <article class="cv__section cv__section--education">
              <h3 class="cv__heading-1">Education</h3>
              <div class="cv__content">
                <ul class="cv__list">
                  <li>Diploma in Software Development</li>
                  <li class="cv__sublist">
                    A Levels
                    <ul>
                      <li>A (maths)</li>
                      <li>B (further maths)</li>
                      <li>C (biology)</li>
                    </ul>
                  </li>
                  <li class="cv__sublist">
                    GCSEs
                    <ul>
                      <li>7 As</li>
                      <li>4 Bs</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Cv",
  data() {
    return {
      projects: [
        {
          id: Date.now(),
          item:
            "My portfolio site is made with Vue, which I use for list rendering and passing data with props",
        },
        {
          id: Date.now(),
          item: "I built a todo app in Vue, with full CRUD functionality",
        },
        {
          id: Date.now(),
          item:
            "I made a pattern library for my portfolio site with Pattern Lab. I also used Gulp and Browsersync",
        },
      ],
      experiences: [
        {
          id: Date.now(),
          title: "Web developer",
          company: "Daughter",
          startDate: "Sep 19",
          endDate: "Mar 20",
          description:
            "Front-end builds, usually in the form of a pattern library.",
          details: [
            {
              id: Date.now(),
              item:
                "Build the frontend for a charity whose Twitter hashtag reached #5 in the UK on their fundraiser's launch day",
            },
            {
              id: Date.now() + 1,
              item:
                "Work on ongoing development for one of the UK's leading car leasing companies",
            },
            {
              id: Date.now() + 2,
              item: "Lead small and medium-size projects",
            },
            {
              id: Date.now() + 3,
              item: "Support and liaise with clients",
            },
            {
              id: Date.now() + 4,
              item: "Agile development",
            },
            {
              id: Date.now() + 5,
              item: "Use Trello and Jira for project management",
            },
          ],
        },
      ],
      skills: [
        {
          id: Date.now(),
          item: "HTML & CSS",
          starNumber: 4,
        },
        {
          id: Date.now() + 1,
          item: "JavaScript",
          starNumber: 3,
        },
        {
          id: Date.now() + 2,
          item: "SASS (SCSS)",
          starNumber: 3,
        },
        {
          id: Date.now() + 3,
          item: "REST APIs",
          starNumber: 3,
        },
        {
          id: Date.now() + 4,
          item: "Git",
          starNumber: 3,
        },
        {
          id: Date.now() + 5,
          item: "React",
          starNumber: 2,
        },
        {
          id: Date.now() + 6,
          item: "Vue",
          starNumber: 2,
        },
        {
          id: Date.now() + 7,
          item: "jQuery",
          starNumber: 2,
        },
      ],
    };
  },
};
</script>
