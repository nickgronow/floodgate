<template lang="pug">
Layout

  main.px-4.my-10(class="sm:px-6 sm:my-12 md:my-16 lg:my-20 xl:my-20")
    h1.text-3xl.tracking-tight.leading-10.font-extrabold.text-gray-900(class="sm:text-4xl sm:leading-none md:text-5xl") Components

    .my-4(class="sm:my-6 md:my-8")
      h2.text-2xl.mb-2(class="sm:text-3xl sm:mb-4 md:text4xl md:mb-6") Favicon
      g-image.h-12.w-12(alt="FloodGate Logo" src="~/assets/favicon.png")

    .my-4(class="sm:my-6 md:my-8")
      h2.text-2xl.mb-2(class="sm:text-3xl sm:mb-4 md:text4xl md:mb-6") Buttons
      base-button
        span.mx-auto Primary button
      base-button(type="secondary")
        span.mx-auto Secondary button

    .my-4(class="sm:my-6 md:my-8")
      h2.text-2xl.mb-2(class="sm:text-3xl sm:mb-4 md:text4xl md:mb-6") Hero
      base-hero
        template(v-slot:heading)
          | FloodGate 
          br(class="xl:hidden")
          span.text-fg-blue Church
        p.mt-8 Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        .mt-8.mx-auto(class="sm:flex sm:justify-center sm:max-w-md sm:mt-10 md:mt-12")
          base-button(class="sm:w-full")
            span.mx-auto Join Us
          base-button(class="sm:w-full" type="secondary")
            span.mx-auto Watch Live
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
