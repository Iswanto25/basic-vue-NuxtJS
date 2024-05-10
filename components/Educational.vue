<script setup lang="ts">

</script>

<style scoped>
.educational{
    background-color: #f4f6f9;
}
.timeline {
    list-style: none;
    padding: 20px 0 20px;
    position: relative;
}
.timeline:before {
    top: 0;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 3px;
    background-color: #eeeeee;
    left: 50%;
    margin-left: -1.5px;
}
.timeline > li {
    margin-bottom: 20px;
    position: relative;
}
.timeline > li:before,
.timeline > li:after {
    content: " ";
    display: table;
}
.timeline > li:after {
    clear: both;
}
.timeline > li:before,
.timeline > li:after {
    content: " ";
    display: table;
}
.timeline > li:after {
    clear: both;
}
.timeline > li > .timeline-panel {
    width: 46%;
    float: left;
    border: 1px solid #d4d4d4;
    border-radius: 2px;
    padding: 20px;
    position: relative;
    -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
}
.timeline > li > .timeline-panel:before {
    position: absolute;
    top: 26px;
    right: -15px;
    display: inline-block;
    border-top: 15px solid transparent;
    border-left: 15px solid #ccc;
    border-right: 0 solid #ccc;
    border-bottom: 15px solid transparent;
    content: " ";
}
.timeline > li > .timeline-panel:after {
    position: absolute;
    top: 27px;
    right: -14px;
    display: inline-block;
    border-top: 14px solid transparent;
    border-left: 14px solid #fff;
    border-right: 0 solid #fff;
    border-bottom: 14px solid transparent;
    content: " ";
}
.timeline > li > .timeline-badge {
    color: #fff;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 1.4em;
    text-align: center;
    position: absolute;
    top: 16px;
    left: 50%;
    margin-left: -25px;
    background-color: #999999;
    z-index: 100;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
}
.timeline > li.timeline-inverted > .timeline-panel {
    float: right;
}
.timeline > li.timeline-inverted > .timeline-panel:before {
    border-left-width: 0;
    border-right-width: 15px;
    left: -15px;
    right: auto;
}
.timeline > li.timeline-inverted > .timeline-panel:after {
    border-left-width: 0;
    border-right-width: 14px;
    left: -14px;
    right: auto;
}
.timeline-badge.primary {
    background-color: #2e6da4 !important;
}
.timeline-badge.success {
    background-color: #3f903f !important;
}
.timeline-badge.warning {
    background-color: #f0ad4e !important;
}
.timeline-badge.danger {
    background-color: #d9534f !important;
}
.timeline-badge.info {
    background-color: #5bc0de !important;
}
.timeline-title {
    margin-top: 0;
    color: inherit;
}
.timeline-body > p,
.timeline-body > ul {
    margin-bottom: 0;
}
.timeline-body > p + p {
    margin-top: 5px;
}

.features .card-title{
    color: #5777ba;
}

#portofolio .card{
    box-shadow: 2px 2px 5px 2px  rgba(128, 128, 128, 0.438);
}
</style>

<template>
    <section id="educational" class="educational border-bottom shadow-sm">
        <div class="section-title mt-5">
            <h2>Pendidikan</h2>
        </div>
        <div class="container">
            <ul class="timeline">
                <li data-aos="fade-right" data-aos-offset="300">
                    <div class="timeline-badge"><i class="fa-solid fa-school"></i></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="timeline-title">Politeknik Harapan Bersama</h4>
                            <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>Teknik Informatika 2019 -
                                    now</small></p>
                        </div>
                        <div class="timeline-body" style="text-transform: capitalize; text-align: justify;">
                            <p>Saat ini berstatus sebagai mahasiswa tingkat akhir yang sedang menunggu sidang tugas akhir
                            </p>
                        </div>
                    </div>
                </li>
                <li class="timeline-inverted" data-aos="fade-left" data-aos-offset="300">
                    <div class="timeline-badge warning"><i class="fa-solid fa-award"></i></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="timeline-title">Dicoding</h4>
                            <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>Membuat Aplikasi Back-End
                                    2023</small></p>
                        </div>
                        <div class="timeline-body" style="text-transform: capitalize; text-align: justify;">
                            <div class="card">
                                <NuxtImg src="assets/img/certi/backend.jpg" class="card-img-top" alt="agung iswanto" />
                                <div class="card-body">
                                    <p class="card-text">Kelas mempelajari pembuatan back-end dengan membuat RESTful API</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="timeline-inverted" data-aos="fade-left" data-aos-offset="300">
                    <div class="timeline-badge warning"><i class="fa-solid fa-award"></i></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="timeline-title">Dicoding</h4>
                            <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>Pemrograman JavaScript
                                    2023</small></p>
                        </div>
                        <div class="timeline-body" style="text-transform: capitalize; text-align: justify;">
                            <div class="card">
                                <NuxtImg src="assets/img/certi/javascript.jpg" class="card-img-top" alt="agung iswanto" />
                                <div class="card-body">
                                    <p class="card-text">kelas ini mempelajari pemrogaman javascript dengan teknologi nodeJs
                                        dan expressJs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="timeline-inverted" data-aos="fade-left" data-aos-offset="300">
                    <div class="timeline-badge warning"><i class="fa-solid fa-award"></i></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="timeline-title">Dicoding</h4>
                            <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>Cloud Practitioner
                                    Essentials 2023</small></p>
                        </div>
                        <div class="timeline-body" style="text-transform: capitalize; text-align: justify;">
                            <div class="card">
                                <NuxtImg src="assets/img/certi/aws.jpg" class="card-img-top" alt="agung iswanto" />
                                <div class="card-body">
                                    <p class="card-text">kelas ini mempelajari bidang cloud computing dengan mengacu pada
                                        standar kompetensi internasional milik AWS dan memahami AWS Cloud dengan segala
                                        jenis layanan, infrastruktur global, hingga harganya</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-aos="fade-right" data-aos-offset="300">
                    <div class="timeline-badge warning"><i class="fa-solid fa-award"></i></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="timeline-title">Dicoding</h4>
                            <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>Belajar Machine Learning
                                    2021</small></p>
                        </div>
                        <div class="timeline-body" style="text-transform: capitalize; text-align: justify;">
                            <div class="card">
                                <NuxtImg src="assets/img/certi/ml.jpg" class="card-img-top" alt="agung iswanto" />
                                <div class="card-body">
                                    <p class="card-text">kelas ini mempelajari machine learning dengan mengacu pada standar
                                        kompetensi industri. Di akhir kelas,
                                        siswa dapat belajar materi dasar dan algoritma-algoritma Machine Learning, serta
                                        mampu mengimplementasikannya dalam membuat model Machine
                                        Learning untuk memproses data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="timeline-inverted" data-aos="fade-left" data-aos-offset="300">
                    <div class="timeline-badge warning"><i class="fa-solid fa-award"></i></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="timeline-title">Progate</h4>
                            <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>Belajar Pemrograman
                                    Frontend 2020</small></p>
                        </div>
                        <div class="timeline-body" style="text-transform: capitalize; text-align: justify;">
                            <div class="card">
                                <NuxtImg src="assets/img/certi/frontend.jpg" class="card-img-top" alt="agung iswanto" />
                                <div class="card-body">
                                    <p class="card-text">Sertifikasi ini untuk penyeleseian kelas pemrogaman front-end</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li data-aos="fade-right" data-aos-offset="300">
                    <div class="timeline-badge"><i class="fa-solid fa-graduation-cap"></i></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="timeline-title">SMK Muhammadiyah Kramat</h4>
                            <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>Teknik Audio Video 2014 -
                                    2017</small></p>
                        </div>
                        <div class="timeline-body" style="text-transform: capitalize; text-align: justify;">
                            <p>Saat ini berstatus alumni dengan nilai rata-rata 7.0</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>