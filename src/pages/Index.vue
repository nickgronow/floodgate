<template lang="pug">
Layout

  div(class="sm:relative")
    .relative.w-full.h-64.overflow-hidden.bg-fg-light(class="sm:h-72 sm:w-1/2 md:h-96 lg:h-128 lg:text-left")
      svg.absolute.bottom-0.transform.-translate-y-64.translate-x-1-110.rotate-180.text-fg-blue.origin-center(class="sm:scale-125 sm:rotate-190 sm:translate-y-1-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 205")
        path(d="M 0 5 c 5 -5 15 -5 20 0 c 5 5 15 5 20 0 c 5 -5 15 -5 20 0 c 5 5 15 5 20 0 c 5 -5 15 -5 20 0 c 5 5 15 5 20 0 v 200 h -120 v -200" fill="currentColor" stroke="none")

      .hidden(class="sm:block")
        img.absolute.text-white.w-8(class="sm:w-8 md:w-12 top-10 left-30" src="shapes/squiggle.svg")
        img.absolute.text-white.w-8(class="sm:w-8 md:w-12 top-10 right-10" src="shapes/squiggle.svg")
        img.absolute.text-white.w-8(class="sm:w-8 md:w-12 top-50 left-10" src="shapes/squiggle.svg")
        img.absolute.text-white.w-8(class="sm:w-8 md:w-12 bottom-40 left-40" src="shapes/squiggle.svg")
        img.absolute.text-white.w-8(class="sm:w-8 md:w-12 bottom-40 right-10" src="shapes/squiggle.svg")

      main.relative.mt-10.mx-auto.max-w-screen-xl.text-center(class="sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28")
        p.text-yellow-600.uppercase.text-3xl.font-bold.-ml-40.gotham.tracking-widest.leading-none(class="sm:text-2xl sm:-ml-32 md:text-3xl md:-ml-40 lg:text-4xl lg:-ml-72") 10am
        h1.mx-auto.uppercase.text-6xl.tracking-widest.leading-none.text-fg-blue.gotham-bold.text-stroke-white(class="sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl") Sunday
        p.text-yellow-600.uppercase.text-3xl.font-bold.ml-32.gotham.tracking-widest.leading-none(class="sm:text-2xl sm:ml-24 md:text-3xl md:ml-32 lg:text-4xl lg:ml-64") Service
        p.bg-white.text-fg-blue.font-semibold.uppercase.text-2xl.gotham.tracking-widest.text-center.mt-8(class="sm:tracking-far sm:text-right sm:pr-12 sm:mt-8 sm:ml-8 sm:text-lg md:mt-16 md:tracking-far-2 md:ml-12 md:text-xl lg:mt-24 lg:tracking-far-3 lg:ml-16 lg:text-2xl") Same Service

    .relative.w-full.h-64.overflow-hidden.bg-fg-blue(class="sm:h-72 sm:absolute sm:inset-y-0 sm:right-0 sm:w-1/2 md:h-96 lg:h-128")
      svg.absolute.bottom-0.transform.-translate-y-64.translate-x-1-10.rotate-180.text-fg-dark.origin-center(class="sm:scale-125 sm:rotate-170 sm:translate-y-1-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 205")
        path(d="M 0 5 c 5 5 15 5 20 0 c 5 -5 15 -5 20 0 c 5 5 15 5 20 0 c 5 -5 15 -5 20 0 c 5 5 15 5 20 0 c 5 -5 15 -5 20 0 v 200 h -120 v -200" fill="currentColor" stroke="none")

      .hidden(class="sm:block")
        img.absolute.text-white.w-8(class="sm:w-8 md:w-12 top-10 left-30" src="shapes/squiggle.svg")
        img.absolute.text-white.w-8(class="sm:w-8 md:w-12 top-10 right-10" src="shapes/squiggle.svg")
        img.absolute.text-white.w-8(class="sm:w-8 md:w-12 top-50 left-10" src="shapes/squiggle.svg")
        img.absolute.text-white.w-8(class="sm:w-8 md:w-12 bottom-40 left-40" src="shapes/squiggle.svg")
        img.absolute.text-white.w-8(class="sm:w-8 md:w-12 bottom-40 right-10" src="shapes/squiggle.svg")

      main.relative.mt-10.mx-auto.max-w-screen-xl.text-center(class="sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28")
        p.text-yellow-600.uppercase.text-3xl.font-bold.-ml-40.gotham.tracking-widest.leading-none(class="sm:text-2xl sm:-ml-32 md:text-3xl md:-ml-40 lg:text-4xl lg:-ml-72") 7pm
        h1.mx-auto.uppercase.text-6xl.tracking-widest.leading-none.text-fg-blue.gotham-bold.text-stroke-white(class="sm:text-fg-dark sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl") Friday
        p.text-yellow-600.uppercase.text-3xl.font-bold.ml-32.gotham.tracking-widest.leading-none(class="sm:text-2xl sm:ml-24 md:text-3xl md:ml-32 lg:text-4xl lg:ml-64") Service
        p.bg-gray-200.text-fg-dark.font-semibold.uppercase.text-2xl.gotham.tracking-widest.text-center.mt-8(class="sm:tracking-far sm:text-left sm:pl-12 sm:mt-8 sm:mr-8 sm:text-lg md:mt-16 md:tracking-far-2 md:mr-12 md:text-xl lg:mt-24 lg:tracking-3 lg:mr-16 lg:text-2xl") Different Days

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
