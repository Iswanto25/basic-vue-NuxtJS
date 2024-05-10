<script lang="ts" setup></script>

<style scoped>
  #hero {
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 50px 0 100px 0;
    font-family: "Poppins", sans-serif;
  }

  #hero::before {
    content: "";
    position: absolute;
    right: -100%;
    top: 20%;
    width: 250%;
    height: 200%;
    z-index: -1;
    background-color: #e8ecf5;
    transform: skewY(135deg);
  }

  #hero .subheading{
    font-weight: 700;
    color: #fff;
    font-size: 13px;
    display: inline-block;
    letter-spacing: 1px;
    margin-bottom: 5px;
    position: relative;
    z-index: 0;
    display: inline-block;
    background: #0779e4;
    border-radius: 4px;
    padding: 4px 9px;
    border: #0779e4 solid;
  }

  #hero .subheading::after {
    position: absolute;
    bottom: -5px;
    left: 20%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #0779e4 transparent transparent transparent;
  }

  #hero h1 {
    font-size: 48px;
    font-weight: 500;
    color: #5777ba;
    font-family: "Poppins", sans-serif;
  }

  #hero h2 {
    color: #515f7d;
    margin-bottom: 20px;
    font-size: 20px;
  }

  #hero .social a:hover{
    color: #ffffff;
    background-color: #515f7d;
  }

  #hero .social .btn{
    color: #515f7d;
    background-color: #ffffff00;
    border: #515f7d solid 1px;
    margin: 1px;
  }

  @media (max-width: 991px) {
    #hero .hero-img {
      text-align: center;
    }
    #hero .hero-img img {
      width: 60%;
      margin-bottom: 50px;
    }
  }

  @media (max-width: 768px) {
    #hero h1 {
      font-size: 28px;
      line-height: 36px;
    }
    #hero h2 {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 575px) {
    #hero .hero-img img {
      width: 80%;
    }
  }
</style>

<template>
  <div>
    <section id="hero" class="d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch order-2 order-lg-1"
            data-aos="fade-right" data-aos-duration="1000">
            <div>
              <span class="subheading">Hi Semua!</span>
              <h1>Saya Agung Iswanto</h1>
              <span>
                <h2 style="text-align: justify;">| Web Developer | Wordpress | Elementor | Backend Developer | Frontend
                Developer | ExpressJs |</h2>
                <p style="text-align: justify; text-transform: capitalize; margin-bottom: 40px; color: #515f7d;">Selamat
                datang di portofolio pengembangan web saya! Saya sangat tertarik dalam pengembangan web menggunakan
                ExpressJs. Silakan jelajahi proyek-proyek yang telah saya selesaikan dan beri tahu saya jika Anda memiliki
                pertanyaan atau ingin berkolaborasi. Terima kasih!</p>
              </span>
              <div class="d-grid gap-1 d-md-flex">
                <a href="#features" class="btn btn-warning p-4 py-2" >About <span class="fa-solid fa-arrow-down"></span></a>
                <a href="https://api.whatsapp.com/send?phone=62882003777416" target="_blank"
                class="btn btn-primary p-4 py-2" style="padding: 7px 40px;">Hire Me <span
                  class="fa-solid fa-arrow-right"></span></a>
              </div>
            </div>
            <div class="mt-3 social d-grid gap-1 d-md-flex">
              <a href="https://www.facebook.com/Direktur.Agung.Iswanto?mibextid=ZbWKwL" target="_blank" class="btn btn-primary"><i class="fa-brands fa-square-facebook fa-2xl"></i></a>
              <a href="https://instagram.com/director.iswanto?igshid=MzMyNGUyNmU2YQ==" target="_blank" class="btn btn-primary"><i class="fa-brands fa-square-instagram fa-2xl"></i></a>
              <a href="https://www.linkedin.com/in/agung-iswanto-272782136/" target="_blank" class="btn btn-primary"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
              <a href="http://github.com/Iswanto25" target="_blank" class="btn btn-primary"><i class="fa-brands fa-square-github fa-2xl"></i></a>
            </div>
          </div>
          <div class="mb-3 col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-down" data-aos-duration="1000">
            <NuxtImg class="img-fluid" style="max-width: 90%;" src="assets/img/code-amico.png" alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>