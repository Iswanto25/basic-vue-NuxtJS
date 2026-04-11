<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
    const form = document.getElementById('whatsappForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = (document.getElementById('name') as HTMLInputElement).value;
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const phoneNumber = '+62882008179277'; // Fixed number based on previous data
            const message = (document.getElementById('message') as HTMLTextAreaElement).value;
            const whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent('Nama: ' + name + '\nEmail: ' + email + '\n\nPesan:\n' + message);
            window.open(whatsappUrl, '_blank');
        });
    }
});
</script>

<style scoped>
.contact-section {
    background: white;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-item {
    display: flex;
    flex-direction: column;
}

.contact-label {
    font-size: 0.875rem;
    color: var(--text-muted);
    font-weight: 500;
}

.contact-value {
    font-weight: 700;
    color: var(--text-main);
    font-size: 1.125rem;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--bg-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-main);
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-icon:hover {
    background: var(--primary);
    color: white;
}

.form-control {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--border-color);
    background: var(--bg-secondary);
    margin-bottom: 1rem;
}

.form-control:focus {
    background: white;
    border-color: var(--primary);
    box-shadow: none;
}
</style>

<template>
  <section id="send" class="contact-section">
    <div class="container">
      <div class="section-title-alt text-center mb-5">
        <h2>Contact</h2>
      </div>
      <div class="row g-5">
        <div class="col-lg-4" data-aos="fade-right">
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-label">Email</span>
              <span class="contact-value">agung_iswanto@outlook.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">Whatsapp</span>
              <span class="contact-value">+62 882 0081 79277</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">Contact Us</span>
              <div class="social-links">
                <a href="https://linkedin.com/in/agung-iswanto-272782136/" target="_blank" class="social-icon"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="http://github.com/Iswanto25" target="_blank" class="social-icon"><i class="fa-brands fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-8" data-aos="fade-left">
          <form id="whatsappForm">
            <div class="row g-3">
              <div class="col-md-6">
                <input type="text" class="form-control" id="name" placeholder="Name" required>
              </div>
              <div class="col-md-6">
                <input type="email" class="form-control" id="email" placeholder="Email" required>
              </div>
            </div>
            <textarea class="form-control" id="message" rows="5" placeholder="Message" required></textarea>
            <button type="submit" class="btn btn-primary w-100 py-3 mt-2">Contact</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>