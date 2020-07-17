<template lang="pug">
.relative.bg-gray-100.overflow-hidden

  .hidden(class="sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full")
    .relative.h-full.max-w-screen-xl.mx-auto
      cross-bg.text-gray-250(class="rotate-5 translate-x-1-30 translate-y-1-40")
      cross-bg.text-gray-250(class="-rotate-5 translate-x-1-25 translate-y-1-35")
      squiggle-bg.text-gray-250(class="rotate-10 translate-x-1-30 translate-y-1-40")
      squiggle-bg.text-gray-250(class="-rotate-25 translate-x-1-25 translate-y-1-35")
      circle-bg.text-gray-250(class="-rotate-10 translate-x-1-15 translate-y-1-35")
      circle-bg.text-gray-250(class="rotate-10 translate-x-1-25 translate-y-1-30")

  .relative.pt-6.pb-12(class="sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32")
    main.mt-10.mx-auto.max-w-screen-xl.px-4(class="sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28")

      .text-center

        h2.uppercase.text-3xl.tracking-tight.leading-10.font-extrabold.text-fg-dark(class="sm:text-4xl sm:leading-none md:text-5xl")
          slot(name="heading")

        slot

        .mt-8.max-w-md.mx-auto(class="sm:flex sm:justify-center md:mt-12")
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
