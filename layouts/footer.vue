<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const currentYear = ref<number>(new Date().getFullYear());
onMounted(() => {
  AOS.init({
      once: true,
      duration: 1000,
  });
});
</script>

<style scoped>
footer {
    padding: 3rem 0;
    background: white;
    border-top: 1px solid var(--border-color);
}

.footer-logo {
    font-family: 'Pacifico', cursive;
    font-weight: 400;
    font-size: 1.5rem;
    color: var(--primary);
    text-decoration: none;
}

.footer-text {
    color: var(--text-muted);
    font-size: 0.875rem;
}

.footer-link {
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.2s;
}

.footer-link:hover {
    color: var(--primary);
}
</style>

<template>
  <footer>
    <div class="container">
      <div class="row align-items-end">
        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
          <a href="/" class="footer-logo">ISWANTO.</a>
          <p class="footer-text mt-2 mb-0">Building digital experiences with passion and precision.</p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <div class="footer-text">
            &copy; {{ currentYear }} <a href="https://iswantogroup.my.id" class="footer-link fw-bold" target="_blank">Iswanto Group</a>. 
            <span class="ms-2">v2.0.0</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

