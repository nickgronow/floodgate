<template lang="pug">
div
  navbar
  .layout
    slot
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '@/components/navbar/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
</style>
