<template>
  <footer class="footer"
        id="footer"
        aria-expanded="false"
        aria-controls="footer__info"
        tabindex="0"
  >
    <div class="footer__content">
      <span>&copy;</span>
      <p id="footer__info"
        role="region"
        aria-labelledby="footer"
      >
        Copyright &copy; 2020 jamesahorne.dev
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  mounted() {
    const footer = document.getElementById('footer');

    footer.addEventListener("focus", function() {
      footer.setAttribute('aria-expanded', 'true');
    });
    footer.addEventListener("mouseover", function() {
      footer.setAttribute('aria-expanded', 'true');
    });
    footer.addEventListener("focusout", function() {
      footer.setAttribute('aria-expanded', 'false');
    });
    footer.addEventListener("mouseout", function() {
      footer.setAttribute('aria-expanded', 'false');
    });
  },
}
</script>
