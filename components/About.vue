<script setup lang="ts">
const personalInfo = [
  { label: 'Name', value: 'Agung Iswanto' },
  { label: 'Location', value: 'Tegal, Jawa Tengah' },
  { label: 'Email', value: 'agung_iswanto@outlook.com' },
  { label: 'Portfolio', value: 'www.uncledev.my.id' },
  { label: 'Google Profile', value: 'bit.ly/agung-google-skills', link: 'https://www.skills.google/public_profiles/644fd9c5-aa07-4363-ae61-d47e532e1477' },
];
</script>

<style scoped>
.about-section {
    background: white;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.description-text {
  color: var(--text-muted);
  font-size: 1.125rem;
  line-height: 1.8;
  text-align: justify;
}

.info-table {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.info-row {
    display: flex;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.75rem;
}

.info-label {
    width: 140px;
    font-weight: 700;
    color: var(--text-main);
}

.info-value {
    color: var(--text-muted);
    flex: 1;
}

.info-value a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
}

.info-value a:hover {
    text-decoration: underline;
}

@media (max-width: 991px) {
    .about-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}
</style>

<template>
  <section id="features" class="about-section">
    <div class="container">
      <div class="section-title-alt">
        <h2>About Me</h2>
      </div>
      <div class="about-grid" data-aos="fade-up">
        <div class="description-text">
          <p>
            Saya adalah seorang <strong>Web Developer</strong> yang berfokus pada pengembangan backend menggunakan Express.js, TypeScript, dan NestJS. Saya memiliki pengalaman dalam membangun sistem berbasis microservices serta membantu integrasi sistem untuk kebutuhan bisnis di berbagai sektor, termasuk perbankan, pemerintahan, dan korporasi.
          </p>
          <p>
            Saya telah berkontribusi dalam pengembangan berbagai aplikasi dan layanan backend yang mengutamakan fungsionalitas dan efisiensi operasional. Dengan semangat untuk terus berkembang, saya aktif mempelajari teknologi terbaru guna menghadirkan solusi digital yang relevan dan handal.
          </p>
        </div>
        
        <div class="info-table">
            <div v-for="info in personalInfo" :key="info.label" class="info-row">
                <span class="info-label">{{ info.label }}</span>
                <span class="info-value">
                    <template v-if="info.link">
                        <a :href="info.link" target="_blank">{{ info.value }}</a>
                    </template>
                    <template v-else>
                        {{ info.value }}
                    </template>
                </span>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>