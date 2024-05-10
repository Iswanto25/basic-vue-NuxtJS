<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
    document.getElementById('whatsappForm').addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var message = document.getElementById('message').value;
        var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + '+62882008179277' + '&text=' + encodeURIComponent('Nama: ' + name + '\nEmail: ' + email + '\nNomor Telepon: ' + phoneNumber + '\n\nPesan:\n' + message);
        window.open(whatsappUrl, '_blank');
    });
});
</script>

<style scoped>
</style>

<template>
    <div>
        <section id="send">
            <div class="section-title mt-5">
                <h2>Hubungi Saya</h2>
            </div>
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <div class="row justify-content-center">
                            <div class="col-md">
                                <form id="whatsappForm">
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Nama</label>
                                        <input type="text" class="form-control" id="name" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="phoneNumber" class="form-label">Nomor Handpone</label>
                                        <input type="tel" class="form-control" id="phoneNumber" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="message" class="form-label">Pesan</label>
                                        <textarea class="form-control" id="message" rows="3" required></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Kirim Pesan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                
                </div>
            </div>
        </section>
    </div>
</template>