<script lang="ts" setup>
</script>

<style scoped>
    .navbar-brand {
        font-family: 'Pacifico', cursive;
        font-weight: 400;
        font-size: 1.75rem;
        color: var(--primary) !important;
    }

    .nav-link {
        font-weight: 500;
        color: var(--text-main) !important;
        margin: 0 0.5rem;
        transition: color 0.2s;
    }

    .nav-link:hover {
        color: var(--primary) !important;
    }

    .navbar-toggler {
        border: none;
        padding: 0;
    }

    .navbar-toggler:focus {
        box-shadow: none;
    }
</style>

<template>
    <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-custom">
            <div class="container">
                <a class="navbar-brand" href="/">ISWANTO.</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#hero">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#features">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#educational">Education</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#job">Experience</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#portofolio">Projects</a>
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