<script setup lang="ts">
const education = [
  {
    title: 'Dicoding Academy',
    period: '2021',
    desc: 'Focus: JavaScript, Backend, Basic Machine Learning, Basic Cloud (AWS)',
    type: 'academy'
  },
  {
    title: 'Progate',
    period: '2020 - 2021',
    desc: 'Focus: Frontend, JavaScript, Git, SQL, PHP, Node.js',
    type: 'academy'
  },
  {
    title: 'SMK Muhammadiyah Kramat',
    period: '2014 - 2017',
    desc: 'Jurusan Teknik Audio Video. Fokus pada dasar-dasar elektronika dan sistem audio video.',
    type: 'school'
  }
];

const skills = [
  { 
    category: 'Languages', 
    items: ['TypeScript', 'JavaScript', 'PHP'],
    icon: 'fa-solid fa-code'
  },
  { 
    category: 'Frameworks', 
    items: ['Express.js', 'NestJS', 'Nuxt.js'],
    icon: 'fa-solid fa-cubes'
  },
  { 
    category: 'Database & ORM', 
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Prisma'],
    icon: 'fa-solid fa-database'
  },
  { 
    category: 'Infrastructure', 
    items: ['Azure Cloud', 'REST API', 'Proxmox'],
    icon: 'fa-solid fa-server'
  }
];
</script>

<style scoped>
.edu-skills-section {
    background-color: var(--bg-secondary);
}

.edu-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.edu-item {
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    border: 1px solid var(--border-color);
}

.edu-period {
    font-size: 0.875rem;
    color: var(--primary);
    font-weight: 700;
    margin-bottom: 0.25rem;
    display: block;
}

.edu-title {
    font-weight: 800;
    font-size: 1.25rem;
    color: var(--text-main);
    margin-bottom: 0.5rem;
}

.skill-card {
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    border: 1px solid var(--border-color);
    display: flex;
    gap: 1.25rem;
    align-items: center;
    height: 100%;
}

.skill-icon {
    width: 48px;
    height: 48px;
    background: rgba(37, 99, 235, 0.1);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    font-size: 1.25rem;
}

.skill-category {
    font-weight: 700;
    margin-bottom: 0.25rem;
    color: var(--text-main);
}

.skill-items {
    font-size: 0.875rem;
    color: var(--text-muted);
    margin-bottom: 0;
}
</style>

<template>
  <section id="educational" class="edu-skills-section">
    <div class="container">
      <div class="section-title-alt">
        <h2>Education & Skills</h2>
      </div>

      <div class="row g-5">
        <div class="col-lg-5" data-aos="fade-right">
          <div class="edu-grid">
            <div v-for="item in education" :key="item.title" class="edu-item">
              <span class="edu-period">{{ item.period }}</span>
              <h5 class="edu-title">{{ item.title }}</h5>
              <p class="text-muted mb-0 small">{{ item.desc }}</p>
            </div>
          </div>
        </div>
        
        <div class="col-lg-7" data-aos="fade-left">
          <div class="row g-3">
            <div v-for="skill in skills" :key="skill.category" class="col-md-6">
              <div class="skill-card">
                  <div class="skill-icon">
                      <i :class="skill.icon"></i>
                  </div>
                  <div>
                      <h6 class="skill-category">{{ skill.category }}</h6>
                      <p class="skill-items">{{ skill.items.join(', ') }}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>