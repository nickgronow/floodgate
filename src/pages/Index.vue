<template lang="pug">
Layout
  base-hero
    template(v-slot:heading) Our Doors Are Open
    p.uppercase.mt-4.max-w-md.mx-auto.text-lg.text-gray-700(class="sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl") Service Times
    p.uppercase.mt-3.max-w-md.mx-auto.text-base.text-gray-500(class="sm:text-lg md:mt-5 md:text-xl md:max-w-3xl")
      span Friday 7pm
      span.inline-block.mx-4 ●
      span Sunday 10am

  h1 Home
  p ---
  h2 Service times
  h2 Upcoming events
  h2 Join us
  h2 New to Floodgate
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
