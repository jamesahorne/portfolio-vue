<template>
  <article class="cv" id="cv">
    <div class="l-spacing">
      <h2 class="u-heading-1">Wanna see my CV?</h2>
      <div class="cv__main">
        <header class="cv__header">
          <h1 class="cv__title">James Horne</h1>
          <h2 class="cv__subtitle">Online CV</h2>
        </header>
        <div class="cv__layout">
          <section class="cv__primary">
            <article class="cv__section cv__section--summary">
              <h3 class="cv__heading-1">Summary</h3>
              <div class="cv__content">
                <p>Driven and enthusiastic front-end developer with a desire to deliver a high-quality front-end, looking to gain more experience and keep learning and growing.</p>
              </div>
            </article>
            <article class="cv__section cv__section--experience">
              <h3 class="cv__heading-1">Experience</h3>
              <div class="cv__content">
                <article class="cv__experience-block">
                  <h4 class="cv__heading-2">
                    Web developer
                    <span class="cv__date">Sep 19 - Mar 20</span>
                  </h4>
                  <h5 class="cv__heading-3">Daughter</h5>
                  <p>Front-end builds including building pattern libraries with Pattern Lab. Some integration with backend.</p>
                  <ul class="cv__list cv__list--bullets">
                    <li>Lead small and medium-size projects</li>
                    <li>Build and use pattern libraries</li>
                    <li>Liaise with and support clients</li>
                    <li>Agile development</li>
                    <li>Introduce use of CSS Grid</li>
                    <li>Using Trello and Jira for project management</li>
                  </ul>
                </article>
              </div>
            </article>
            <article class="cv__section cv__section--skills">
              <h3 class="cv__heading-1">Skills</h3>
              <div class="cv__content">
                <ul class="cv__list cv__list--skills">
                  <li>HTML5 <span class="cv__star">&#9733; &#9733; &#9733; &#9733;</span></li>
                  <li>CSS3 <span class="cv__star">&#9733; &#9733; &#9733; &#9733;</span></li>
                  <li>JavaScript <span class="cv__star">&#9733; &#9733; &#9733;</span></li>
                  <li>SASS (SCSS) <span class="cv__star">&#9733; &#9733; &#9733;</span></li>
                  <li>jQuery <span class="cv__star">&#9733; &#9733;</span></li>
                  <li>Mobile-first <span class="cv__star">&#9733; &#9733; &#9733; &#9733;</span></li>
                  <li>Bootstrap <span class="cv__star">&#9733; &#9733; &#9733; &#9733;</span></li>
                  <li>Git <span class="cv__star">&#9733; &#9733; &#9733;</span></li>
                </ul>
              </div>
            </article>
          </section>
          <section class="cv__secondary">
            <aside class="cv__section cv__section--contact">
              <h3 class="cv__heading-1">Contact</h3>
              <div class="cv__content">
                <ul class="cv__list cv__list--icons cv__list--big">
                  <li class="cv__portfolio"><a class="u-link u-link--cv" href="https://www.jamesahorne.dev">www.jamesahorne.dev</a></li>
                  <li class="cv__github"><a class="u-link u-link--cv" href="https://github.com/jamesahorne/">jamesahorne</a></li>
                  <li class="cv__email"><a class="u-link u-link--cv" href="mailto:james99h39@gmail.com">james99h39@gmail.com</a></li>
                  <li class="cv__phone">07531 180950</li>
                </ul>
              </div>
            </aside>
            <article class="cv__section cv__section--education">
              <h3 class="cv__heading-1">Education</h3>
              <div class="cv__content">
                <ul class="cv__list">
                  <li>Diploma in Software Development</li>
                  <li class="cv__sublist">A Levels
                    <ul>
                      <li>A (maths)</li>
                      <li>B (further maths)</li>
                      <li>C (biology)</li>
                    </ul>
                  </li>
                  <li class="cv__sublist">GCSEs
                    <ul>
                      <li>7 As (including maths and English)</li>
                      <li>4 Bs</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </article>
            <article class="cv__section cv__section--interests">
              <h3 class="cv__heading-1">Interests</h3>
              <div class="cv__content">
                <ul class="cv__list cv__list--icons">
                  <li class="cv__music">I am a keen musician and self-taught guitarist. I sing and play piano too.</li>
                  <li class="cv__fitness">I also go the gym, run and play football.</li>
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
  name: 'Cv'
}
</script>