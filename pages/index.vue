
<script setup lang="ts">

  const Content = "content";
</script>

<style scoped></style>

<template>
  <div>
      <NuxtLayout :name="Content">
        <Herro/>
        <About />
        <Educational />
        <Jobs />
        <Project />
        <Contact />
      </NuxtLayout>
  </div>
</template>