<template>
  <article class="contact" id="contact">
    <div class="l-spacing">
      <h2 class="u-heading-1">Let's chat!</h2>
      <p class="u-text">
        If you're interested in a conversation, email me. I'm looking for a
        <button class="contact__role"
                id="contact__role"
                aria-expanded="false"
                aria-controls="contact__role-details"
        >
          permanent role
        </button>.
        <span class="contact__role-details"
              id="contact__role-details"
              role="region"
              aria-labelledby="contact__role"
        >
          <span>Junior front-end developer, around the Reading area.</span>
        </span>
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Contact',
  mounted() {
    const contactRoleParent = document.getElementById('contact__role').parentNode
    const contactRole = document.getElementById('contact__role')

    contactRoleParent.style.position = 'relative'
    contactRole.addEventListener("focus", function() {
      contactRole.setAttribute('aria-expanded', 'true')
    });
    contactRole.addEventListener("mouseover", function() {
      contactRole.setAttribute('aria-expanded', 'true')
    });
    contactRole.addEventListener("focusout", function() {
      contactRole.setAttribute('aria-expanded', 'false')
    });
    contactRole.addEventListener("mouseout", function() {
      contactRole.setAttribute('aria-expanded', 'false')
    });
  }
}
</script>
