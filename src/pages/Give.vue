<template lang="pug">
Layout

  g-image(src="~/assets/tithes-offerings.jpg")

  base-hero(bg="dark")
    template(v-slot:heading) Give Online

    p.my-4.max-w-md.mx-auto.text-lg.text-gray-500(class="sm:my-6 sm:text-xl md:my-8 md:text-2xl lg:my-10 lg:max-w-3xl") Whether you wish to make a one-time gift or set up an automated giving schedule, our online giving system is a secure, convenient option. Think of it as a virtual offering bucket; a way that you can give to FloodGate from wherever you are.

    base-button(@click.native="giveOnline")
      span.mx-auto Give Now

  base-hero(bg="plain")
    template(v-slot:heading) Text to give

    p.my-4.max-w-md.mx-auto.text-lg.text-gray-600(class="sm:my-6 sm:text-xl md:my-8 md:text-2xl lg:my-10 lg:max-w-3xl") Text any amount to 84321 to give

    iframe.w-full.my-8.mx-auto(class="sm:w-140 sm:h-80 md:my-12 md:w-160 md:h-90 lg:w-180 lg-h-100 lg:my-16 xl:w-200 xl:h-112" src="https://www.youtube.com/embed/JMwFYuqxlRg" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen")

    p.my-4.max-w-md.mx-auto.text-lg.text-gray-600(class="sm:my-6 sm:text-xl md:my-8 md:text-2xl lg:my-10 lg:max-w-3xl") Then follow a simple self-guided setup right from your phone. Setup takes about two minutes, tops. After that, donating is as simple as sending us a text.
</template>

<script>
import HeroSplit from '@/components/HeroSplit.vue'
export default {
  components: {
    HeroSplit,
  },
  metaInfo: {
    title: 'FloodGate Church - About Us',
    meta: [
      {
        name: 'description',
        content: ''
      }
    ],
    script: [
      {
        src: 'https://js.churchcenter.com/modal/v1'
      }
    ]
  },
  methods: {
    giveOnline () {
      console.log('clicked...')
      ChurchCenterModal.open('https://floodgate.churchcenter.com/giving')
    }
  }
}
</script>
