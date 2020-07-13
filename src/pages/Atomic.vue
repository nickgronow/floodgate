<template lang="pug">
Layout

  h1 Components
  h1 Logo

  g-image(alt="FloodGate Logo" src="~/assets/favicon.png")

  h1 Buttons
  h1 Input field
  h1 Hero
  h1 Section
  h1 Title
  h1 Text
  h1 Cards

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
