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
.text-stroke-white {
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
}
.gotham {
  font-family: 'Gotham', Arial, Helvetica, sans-serif;
}
.gotham-bold {
  font-family: 'GothamBlack', Arial, Helvetica, sans-serif;
}
@font-face {
  font-family: 'GothamBlack';
  src:  url('/fonts/GothamBlack.woff2') format('woff2'),
        url('/fonts/GothamBlack.woff') format('woff');
}
@font-face {
  font-family: 'Gotham';
  src:  url('/fonts/Gotham.woff2') format('woff2'),
        url('/fonts/Gotham.woff') format('woff');
}
</style>
