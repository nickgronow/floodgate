<template lang="pug">
Layout

  div(class="lg:relative")
    .relative.w-full.h-64.overflow-hidden.bg-fg-light(class="sm:h-128 sm:w-1/2 lg:text-left")
      svg.absolute.bottom-0.transform.-translate-y-64.translate-x-1-110.rotate-180.text-fg-blue.origin-center(class="sm:scale-125 sm:rotate-190 lg:-translate-y-128" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 205")
        path(d="M 0 5 c 5 -5 15 -5 20 0 c 5 5 15 5 20 0 c 5 -5 15 -5 20 0 c 5 5 15 5 20 0 c 5 -5 15 -5 20 0 c 5 5 15 5 20 0 v 200 h -120 v -200" fill="currentColor" stroke="none")

      main.relative.mt-10.mx-auto.max-w-screen-xl.text-center(class="sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28")
        p.text-yellow-600.uppercase.text-3xl.-ml-40.gotham.tracking-widest.leading-none(class="sm:text-2xl md:text-3xl lg:text-4xl") 10am
        h1.mx-auto.uppercase.text-6xl.tracking-widest.leading-none.text-fg-blue.gotham-bold.text-stroke-white(class="sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl") Sunday
        p.text-yellow-600.uppercase.text-3xl.ml-40.gotham.tracking-widest.leading-none(class="sm:text-2xl md:text-3xl lg:text-4xl") Service
        p.bg-white.text-fg-blue.uppercase.text-2xl.gotham.tracking-far.pr-12.text-right(class="sm:mt-24 sm:ml-8 sm:text-lg md:ml-12 md:text-xl lg:ml-16 lg:text-2xl") Same Service

    .relative.w-full.h-64.overflow-hidden.bg-fg-blue(class="sm:h-128 sm:absolute sm:inset-y-0 sm:right-0 sm:w-1/2")
      svg.absolute.bottom-0.transform.-translate-y-64.translate-x-1-10.rotate-180.text-fg-dark.origin-center(class="sm:scale-125 sm:rotate-170" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 205")
        path(d="M 0 5 c 5 5 15 5 20 0 c 5 -5 15 -5 20 0 c 5 5 15 5 20 0 c 5 -5 15 -5 20 0 c 5 5 15 5 20 0 c 5 -5 15 -5 20 0 v 200 h -120 v -200" fill="currentColor" stroke="none")

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
