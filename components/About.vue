<script setup lang="ts">
</script>

<style scoped>
.features{
  background-color: #f4f6f9;
}
.features .image img{
  width: 80%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
}


.features table tbody tr td{
  padding-bottom: 20px;
}
@media (max-width: 991px) {
  .features .image {
    text-align: center;
  }
  .features .image img {
    max-width: 80%;
  }
}

@media (max-width: 667px) {
  .features .image img {
    max-width: 100%;
  }
}

.about .section-title h2 {
  font-size: 32px;
  font-weight: 400;
  /* margin-bottom: 20px; */
  padding-bottom: 0;
  color: #5777ba;
  font-family: "Poppins", sans-serif;
}
</style>

<template>
    <section id="features" class="features about border-bottom shadow-sm">
        <div class="section-title mt-5">
            <h2>Tentang Saya</h2>
        </div>
        <div class="container">
            <div class="row">
                <div class="mb-3 col-lg-6 image d-lg-flex flex-lg-column justify-content-center align-items-stretch order-1 order-lg-1" data-aos="fade-right"
                data-aos-duration="1000">
                  <NuxtImg class="img-fluid" src="assets/img/foto.jpg" alt="About" />
                </div>
                <div class="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-2 order-lg-2 hero-img" data-aos="fade-left"
                data-aos-duration="1000">
                  <div class="row">
                    <div class="col-12 mb-3">
                      <table>
                        <tr>
                            <td>Nama</td>
                            <td>:</td>
                            <td> Agung Iswanto</td>
                        </tr>
                        <tr>
                            <td>Tempat, Tanggal Lahir</td>
                            <td>:</td>
                            <td> Tegal, 25 Maret 1999</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td>:</td>
                            <td> Kertayasa RT04/04, Kec. Kramat, Kab. Tegal</td>
                        </tr>
                        <tr>
                            <td>No Hp</td>
                            <td>:</td>
                            <td> +62882008179277</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td> Agung_iswanto@outlook.com</td>
                        </tr>
                      </table>
                    </div>
                    <div class="col-12" style="text-align: justify;">
                      <p style="text-transform: capitalize;">
                        Saya Adalah Freelancer Web Developer Terbiasa Menggunakan Framework Express.Js Untuk Mengembangkan Web. Saya Memiliki Portofolio Project Untuk Dinas Dan Instansi. Beberapa Project Terakhir Yang Telah Saya Selesaikan Seperti Aplikasi PPDB Smk Mekatronik Di Jatibarang, Aplikasi Absensi Peserta Magang Di Kominfo Kabupaten Tegal, Pembuatan Aplikasi Pendataan Arsip Surat Milik Dinas Kearsipan Kabupaten Tegal, Dan Pengembangan Aplikasi Untuk BAPENDA Kabupaten Brebes.
                      </p>
                      <p style="text-transform: capitalize;">
                        saya menyertakan cv saya di bawah ini, jika anda tertarik dengan saya, silahkan hubungi saya melalui email atau nomor hp yang saya sertakan di atas.
                      </p>
                      <a href="http://iswantogroup.my.id/public/Agung-Iswanto.pdf" target="_blank" class="btn btn-primary p-4 py-2" style="padding: 7px 40px;">CV <span class="fa-solid fa-arrow-right"></span></a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
</template>