<template lang="pug">
.relative.overflow-hidden(:class="outerCss")

  .hidden(class="sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" v-if="showPattern")
    .relative.h-full.max-w-screen-xl.mx-auto
      cross-bg.text-white(class="rotate-5 translate-x-1-30 translate-y-1-40")
      cross-bg.text-white(class="-rotate-5 translate-x-1-25 translate-y-1-35")
      squiggle-bg.text-white(class="rotate-10 translate-x-1-30 translate-y-1-40")
      squiggle-bg.text-white(class="-rotate-25 translate-x-1-25 translate-y-1-35")
      circle-bg.text-white(class="-rotate-10 translate-x-1-15 translate-y-1-35")
      circle-bg.text-white(class="rotate-10 translate-x-1-25 translate-y-1-30")

  .relative.pt-6.pb-12(class="sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32")
    main.mt-10.mx-auto.max-w-screen-xl.px-4.text-center(class="sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28")

      h2.uppercase.text-3xl.tracking-tight.leading-10.font-extrabold(class="sm:text-4xl sm:leading-none md:text-5xl" :class="textCss")
        slot(name="heading")

      slot

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
  },
  props: {
    bg: {
      type: String,
      required: false,
      default: 'primary'
    }
  },
  computed: {
    outerCss () {
      if (this.bg === 'primary') {
        return 'bg-gray-200'
      } else if (this.bg === 'plain') {
        return 'bg-white'
      } else {
        return 'bg-fg-dark'
      }
    },
    textCss () {
      if (this.bg === 'dark') {
        return 'text-gray-100'
      } else {
        return 'text-fg-dark'
      }
    },
    showPattern () {
      return this.bg === 'primary'
    }
  }
}
</script>
