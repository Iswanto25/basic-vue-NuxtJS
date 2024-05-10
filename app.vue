<script setup lang="ts">
  const Navbar = 'navbar'
  const Footer = 'footer'
</script>

<template>
  <div>
    <NuxtLayout :name="Navbar" />
      <NuxtPage />
    <NuxtLayout :name="Footer" />
  </div>
</template>