<template>
  <div class="accordion"
       id="accordion"
  >
    <div class="accordion__section"
         v-for="technology in technologies"
         :key="`accordion__technology--${technology.id}`"
    >
      <h3 class="accordion__heading">
        <button class="accordion__button"
                :id="`accordion__button--${ technology.id }`"
                aria-expanded="false"
                :aria-controls="`accordion__panel--${ technology.id }`"
        >
          {{ technology.heading }}
        </button>
      </h3>
      <div class="accordion__panel"
          :id="`accordion__panel--${ technology.id }`"
          role="region"
          :aria-labelledby="`accordion__button--${ technology.id }`"
      >
        <p class="accordion__contents">{{ technology.contents }}</p>
      </div>
    </div>
    <p class="accordion__description">Click on a technology for more info.</p>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: [
    'technologies'
  ],
  mounted() {
    const allAccordions = document.getElementsByClassName('accordion__button');
    const activeAccordions = document.getElementsByClassName('accordion__button accordion__button--is-active');
    const firstAccordion = allAccordions[0];
    const accordionHeight = firstAccordion.scrollHeight;

    for (let i = 0; i < allAccordions.length; i++) {
      allAccordions[i].addEventListener('click', function() {
        let isActiveAccordion = this.classList.contains('accordion__button--is-active');
        let accordionSection = this.parentNode.parentNode;
        let panel = this.parentNode.nextElementSibling;
        let prevAccordion = activeAccordions[0] || firstAccordion;
        let prevAccordionSection = prevAccordion.parentNode.parentNode;
        let prevPanel = prevAccordion.parentNode.nextElementSibling;
        const accordionBorders = document.getElementsByClassName('accordion__border');

        // If active, close it, else, first close previous accordion and then open current one
        if (isActiveAccordion) {
          prevAccordion.classList.remove('accordion__button--is-active');
          prevAccordion.setAttribute('aria-expanded', 'false');
          prevPanel.style.maxHeight = null;
          prevAccordionSection.style.height = accordionHeight + 'px';
        } else {
          prevAccordion.classList.remove('accordion__button--is-active');
          prevPanel.style.maxHeight = null;
          prevAccordionSection.style.height = accordionHeight + 'px';
          prevAccordion.setAttribute('aria-expanded', 'false');

          this.classList.toggle('accordion__button--is-active');
          this.setAttribute('aria-expanded', 'true');
          panel.style.maxHeight = panel.scrollHeight + 24 + 'px';
          accordionSection.style.height = panel.scrollHeight + accordionHeight + 'px';
        }

        for (var border of accordionBorders) {
          border.style.height = accordionHeight - 32 + 'px';
        }
      });
    }
  }
}
</script>
