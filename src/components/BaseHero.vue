<template lang="pug">
.relative.bg-gray-100.overflow-hidden

  .hidden(class="sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full")
    .relative.h-full.max-w-screen-xl.mx-auto
      cross-bg.text-gray-200(class="rotate-5 translate-x-1-30 translate-y-1-40")
      cross-bg.text-gray-200(class="-rotate-5 translate-x-1-25 translate-y-1-35")
      squiggle-bg.text-gray-200(class="rotate-10 translate-x-1-30 translate-y-1-40")
      squiggle-bg.text-gray-200(class="-rotate-25 translate-x-1-25 translate-y-1-35")
      circle-bg.text-gray-200(class="-rotate-10 translate-x-1-35 translate-y-1-35")
      circle-bg.text-gray-200(class="rotate-10 translate-x-1-25 translate-y-1-30")

  .relative.pt-6.pb-12(class="sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32")
    main.mt-10.mx-auto.max-w-screen-xl.px-4(class="sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28")
      .text-center
        h2.text-4xl.tracking-tight.leading-10.font-extrabold.text-fg-dark(class="sm:text-5xl sm:leading-none md:text-6xl")
          | FloodGate 
          br(class="xl:hidden")
          span.text-fg-blue Church
        p.mt-3.max-w-md.mx-auto.text-base.text-gray-500(class="sm:text-lg md:mt-5 md:text-xl md:max-w-3xl")
          | Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.

        .mt-5.max-w-md.mx-auto(class="sm:flex sm:justify-center md:mt-8")
          base-button(class="sm:mx-4") Join Us
          base-button(class="sm:mx-4" type="secondary") Watch Live
</template>

<script>
import CrossBg from '@/components/backgrounds/CrossBg.vue'
import SquiggleBg from '@/components/backgrounds/SquiggleBg.vue'
import CircleBg from '@/components/backgrounds/CircleBg.vue'

export default {
  components: {
    CrossBg,
    SquiggleBg,
    CircleBg
  }
}
</script>
