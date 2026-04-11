<script setup lang="ts">
const projects = [
  {
    title: 'SSO Ekosistem Academy',
    year: '2024',
    img: 'https://placehold.co/600x400/2563eb/white?text=SSO+SuperApp',
    tech: 'Express.js, TypeScript',
    desc: 'Perancangan dan pembangunan sistem Single Sign-On untuk ekosistem SuperApp Kabupaten Takalar.'
  },
  {
    title: 'NestJS WBS',
    year: '2024',
    img: 'https://placehold.co/600x400/2563eb/white?text=NestJS+WBS',
    tech: 'NestJS, PostgreSQL',
    desc: 'Pembangunan sistem pelaporan pelanggaran (WBS) milik Pegadaian menggunakan framework NestJS.'
  },
  {
    title: 'ERP Yayasan Leuit',
    year: '2024',
    img: 'https://placehold.co/600x400/2563eb/white?text=ERP+Backend',
    tech: 'Express.js, TypeScript',
    desc: 'Pengembangan backend untuk sistem ERP MBG yayasan Leuit Tangerang.'
  },
  {
    title: 'Production Mgmt System',
    year: '2024',
    img: 'https://placehold.co/600x400/2563eb/white?text=Production+Mgmt',
    tech: 'Express.js, MySQL',
    desc: 'Sistem manajemen produksi untuk PT. Harmonic Techindo Agung.'
  },
  {
    title: 'Web PPDB SMK Mekatronik',
    year: '2023',
    img: 'assets/img/project/ppdb.png',
    tech: 'Express.js, JavaScript',
    desc: 'Sistem Penerimaan Peserta Didik Baru (PPDB) digital untuk efisiensi pendaftaran sekolah.'
  },
  {
    title: 'Sistem Peramalan Pajak',
    year: '2023',
    img: 'assets/img/project/pajak.jpeg',
    tech: 'Express.js, JS',
    desc: 'Aplikasi prediksi perolehan pajak untuk BAPENDA Kab. Brebes menggunakan Exponential Smoothing.'
  }
];
</script>

<style scoped>
.portfolio-section {
    background-color: var(--bg-secondary);
}

.portfolio-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1.25rem;
  background: white;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--card-shadow-hover);
}

.portfolio-img-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.portfolio-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.portfolio-body {
  padding: 1.5rem;
  flex-grow: 1;
}

.portfolio-tech {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  display: block;
}

.portfolio-title {
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
}

.portfolio-desc {
  font-size: 0.9375rem;
  color: var(--text-muted);
  margin-bottom: 0;
}
</style>

<template>
  <section id="portofolio" class="portfolio-section">
    <div class="container">
      <div class="section-title-alt text-center">
        <h2>Project Portfolio</h2>
      </div>
      <div class="row g-4">
        <div v-for="project in projects" :key="project.title" class="col-md-4" data-aos="fade-up">
          <div class="portfolio-card">
            <div class="portfolio-img-wrapper">
              <NuxtImg :src="project.img" class="portfolio-img" :alt="project.title" />
            </div>
            <div class="portfolio-body">
              <span class="portfolio-tech">{{ project.tech }} • {{ project.year }}</span>
              <h5 class="portfolio-title">{{ project.title }}</h5>
              <p class="portfolio-desc">{{ project.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-5">
        <a href="https://github.com/Iswanto25" target="_blank" class="btn btn-primary px-5 py-3">
          View More on GitHub <i class="fa-brands fa-github ms-2"></i>
        </a>
      </div>
    </div>
  </section>
</template>