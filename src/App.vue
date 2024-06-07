<template>
  <router-view />
</template>

<script setup lang="ts">
defineOptions({
  name: 'App'
})
</script>

<style>
  :root {
    --transitional-color: #bbb;
    --header-height: 82px;
    --chart-zoom: 1;
  }
</style>
