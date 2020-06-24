<template lang="pug">
Layout

  // Learn how to use images here: https://gridsome.org/docs/images
  g-image(alt="FloodGate Logo" src="~/assets/logo.png")

  h1 FloodGate Church

  p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores

  p.home-links
    a(href="https://gridsome.org/docs/" target="_blank" rel="noopener") Gridsome Docs
    a(href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener") GitHub
</template>

<script>
export default {
  metaInfo: {
    title: 'FloodGate Church - Connect | Serve | Grow',
    meta: [
      {
        name: 'description',
        content: ''
      }
    ]
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
