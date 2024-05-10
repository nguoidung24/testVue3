<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Thế giới di lặc` : 'Thế giới di lặc';
  }
})
</script>
