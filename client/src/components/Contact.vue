<template>
  <article class="contact" id="contact">
    <div class="l-spacing">
      <h2 class="u-heading-1">Let's chat!</h2>
      <p class="u-text">
        If you're interested in a conversation, email me. I'm looking for a <button class="contact__role" href="#">permanent role</button>.
        <span class="contact__role-details" id="contact__role-details"><span>Junior front-end developer, around the Reading area.</span></span>
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Contact',
  mounted() {
    const roleDetailsParent = document.getElementById('contact__role-details').parentNode;
    roleDetailsParent.style.position = 'relative';
  }
}
</script>
