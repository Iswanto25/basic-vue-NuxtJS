<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const currentYear = ref<number>(new Date().getFullYear());
onMounted(() => {
  const currentYearElement = document.getElementById("currentYear");
  if (currentYearElement) {
    currentYearElement.textContent = currentYear.value.toString();
  }

  AOS.init();
  
});
</script>

<style scoped>
  footer .footer {
    width: 100%;
    height: 70px;
  }
</style>

<template>
  <div>
    <footer class="footer bg-light py-3 border-top border-bottom shadom-sm">
      <div class="container-fluid">
          <div class="row">
              <div class="col text-start">
                  <span class="text-muted"><b style="font-weight: bold;">
                      </b> v1.0.0</span>
              </div>
              <div class="col text-end">
                  <span class="text-muted" id="copyright">
                      <a href="httP://iswantogroup.my.id" class="text-muted" style="text-decoration: none;" target="_blank">Iswanto Group</a> © <span id="currentYear">2024</span>
                  </span>
              </div>
          </div>
      </div>
    </footer>
  </div>
</template>

