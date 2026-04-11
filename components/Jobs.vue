<script setup lang="ts">
const jobs = [
  {
    role: 'Backend Developer',
    company: 'PT Zen Multimedia Indonesia',
    period: 'Agustus 2024 - Sekarang',
    desc: 'Membangun dan memelihara boilerplate backend Express.js, sistem production management, rancangan sistem SSO SuperApp Kabupaten Takalar, ERP MBG Yayasan Leuit, dan NestJS Whistleblowing System (WBS) Pegadaian.'
  },
  {
    role: 'Tim IT Dokumentasi',
    company: 'SMK Muhammadiyah Kramat',
    period: 'Agustus 2020 - Desember 2022',
    desc: 'Membangun dan memelihara web profil sekolah menggunakan WordPress dan Elementor, serta mengembangkan aplikasi PPDB sekolah dengan Express.js dan EJS.'
  },
  {
    role: 'Guru Produktif',
    company: 'SMK Astrindo Kota Tegal',
    period: 'Mei 2020 - November 2021',
    desc: 'Mengampu mata pelajaran Teknik Komputer Jaringan (TKJ) dan Multimedia (MM) untuk kelas X.'
  },
  {
    role: 'Operator Produksi',
    company: 'PT. Astra Honda Motor',
    period: 'Mei 2017 - Mei 2019',
    desc: 'Pengoperasian mesin CNC untuk pengerjaan komponen otomotif dan perakitan produk sesuai standar kualitas tinggi perusahaan.'
  }
];
</script>

<style scoped>
.job-card {
    background: white;
    padding: 2rem;
    border-radius: 1.25rem;
    border: 1px solid var(--border-color);
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
}

.job-card:hover {
    border-color: var(--primary);
}

.job-role {
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--text-main);
    margin-bottom: 0.25rem;
}

.job-company {
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 0.75rem;
    display: block;
}

.job-period {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-muted);
    margin-bottom: 1rem;
    display: block;
}

.job-desc {
    color: var(--text-muted);
    margin-bottom: 0;
    line-height: 1.7;
    text-align: justify;
}
</style>

<template>
  <section id="job">
    <div class="container">
      <div class="section-title-alt text-center">
        <h2>Work Experience</h2>
      </div>
      <div class="row g-4 justify-content-center">
        <div v-for="job in jobs" :key="job.role" class="col-lg-10" data-aos="fade-up">
          <div class="job-card">
            <div class="row">
                <div class="col-md-4">
                    <span class="job-period">{{ job.period }}</span>
                    <h5 class="job-role">{{ job.role }}</h5>
                    <span class="job-company">{{ job.company }}</span>
                </div>
                <div class="col-md-8">
                    <p class="job-desc">{{ job.desc }}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>