<script lang="ts" setup>

</script>

<style scoped>


    .navbar .navbar-brand{
        color: #0779e4;
        font-family: 'Pacifico', cursive;
    }
    .navbar ul li a{
        color: black;
    }

    .navbar ul li a{
        font-family: "Josefin Sans", sans-serif;
        font-weight: 900;
    }

    .navbar ul li a:hover{
        color: #ffc107;
    }
</style>


<template>
    <div>
        <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary shadow-sm border-bottom">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Iswanto</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#hero">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#features">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#educational">Educational</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#job">Job</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#portofolio">Portofolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#send">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>