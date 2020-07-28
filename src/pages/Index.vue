<template lang="pug">
Layout
  base-hero
    template(v-slot:heading) Our Doors Are Open

    p.uppercase.mt-8.max-w-md.mx-auto.text-lg.text-gray-700(class="sm:text-xl md:mt-12 md:text-2xl md:max-w-3xl") Service Times

    p.uppercase.mt-1.max-w-md.mx-auto.text-base.text-gray-500(class="sm:text-lg md:mt-2 md:text-xl md:max-w-3xl")
      span Friday 7pm
      span.inline-block.mx-4 ●
      span Sunday 10am

    .mt-8.mx-auto(class="sm:flex sm:justify-center sm:max-w-md sm:mt-10 md:mt-12")
      base-button(class="sm:w-full" type="primary" to="https://floodgate.online.church")
        span.mx-auto Watch Live

  base-hero(bg="dark")
    template(v-slot:heading) Announcements
    base-video(src="https://www.youtube.com/embed/videoseries?list=PLksnNAyeyBemgzkJJStUxUrenM-F4PXqX")

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
  },
  methods: {
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
