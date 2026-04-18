<script lang="ts" setup></script>

<style scoped>
  #hero {
    min-height: 90vh;
    padding: 100px 0 0 0;
    display: flex;
    align-items: center;
    background: #0f172a; /* Deep navy */
    background-image: 
        radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(37, 99, 235, 0.1) 0%, transparent 40%),
        url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    color: white;
    position: relative;
    overflow: hidden;
  }

  .hero-content {
    z-index: 10;
  }

  .badge-tech {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    background: rgba(37, 99, 235, 0.1);
    border: 1px solid rgba(37, 99, 235, 0.2);
    color: #60a5fa;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(4px);
  }

  h1 {
    font-size: 4.5rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.04em;
    margin-bottom: 1.5rem;
  }

  .hero-description {
    font-size: 1.25rem;
    color: #94a3b8;
    margin-bottom: 3rem;
    max-width: 540px;
    line-height: 1.6;
  }

  /* Image Improvisation: Profile Card Style */
  .hero-image-wrapper {
    position: relative;
    width: 100%;
    max-width: 450px;
    margin-left: auto;
  }

  .main-photo {
    width: 100%;
    border-radius: 2rem;
    position: relative;
    z-index: 2;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }

  .photo-bg-accent {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100%;
    height: 100%;
    background: var(--primary);
    border-radius: 2rem;
    z-index: 1;
    opacity: 0.2;
  }

  /* Floating Stats Card Improvisation */
  .stat-card {
    position: absolute;
    bottom: 40px;
    left: -30px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1.25rem;
    border-radius: 1rem;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  }

  .stat-icon {
    width: 40px;
    height: 40px;
    background: var(--primary);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .stat-text div:first-child {
    font-weight: 800;
    font-size: 1.125rem;
  }

  .stat-text div:last-child {
    font-size: 0.75rem;
    color: #94a3b8;
  }

  @media (max-width: 991px) {
    #hero {
        text-align: center;
        padding-top: 120px;
    }
    h1 { font-size: 3rem; }
    .hero-image-wrapper {
        margin: 4rem auto 0;
    }
    .stat-card {
        left: 50%;
        transform: translateX(-50%);
        bottom: -20px;
        width: 200px;
    }
    .hero-description {
        margin-left: auto;
        margin-right: auto;
    }
  }
</style>

<template>
  <section id="hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 hero-content" data-aos="fade-up">
          <div class="badge-tech">
            <span class="me-2">●</span> Available for new projects
          </div>
          <h1>Agung Iswanto — <span class="text-primary">Web Developer</span></h1>
          <p class="hero-description">
            Expertise in building scalable backend architectures with <strong>TypeScript</strong>, <strong>NestJS</strong>, and <strong>Express</strong>. Integrating complex business logic into high-performance digital solutions.
          </p>
          <div class="d-flex gap-3 justify-content-lg-start justify-content-center">
            <a href="/CV%20Agung%20Iswanto.pdf" download="CV Agung Iswanto.pdf" target="_blank" class="btn btn-primary px-5 py-3">
              Download CV <i class="fa-solid fa-download ms-2"></i>
            </a>
          </div>
        </div>
        
        <div class="col-lg-6 hero-image-col" data-aos="fade-left" data-aos-delay="200">
          <div class="hero-image-wrapper">
            <div class="photo-bg-accent"></div>
            <NuxtImg class="main-photo" src="assets/img/foto.jpg" alt="Agung Iswanto" />
            
            <!-- Improvisation: Experience Badge -->
            <div class="stat-card" data-aos="zoom-in" data-aos-delay="500">
              <div class="stat-icon">
                <i class="fa-solid fa-code-branch"></i>
              </div>
              <div class="stat-text">
                <div>4+ Years</div>
                <div>Professional Dev</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>