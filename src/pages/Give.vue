<template lang="pug">
Layout
  g-image(src="~/assets/tithes-offerings.jpg")
  base-hero(bg="dark")
    template(v-slot:heading) Thank you for supporting FloodGate

    p.my-4.max-w-md.mx-auto.text-lg.text-gray-500(class="sm:my-6 sm:text-xl md:my-8 md:text-2xl lg:my-10 lg:max-w-3xl") Whether you wish to make a one-time gift or set up an automated giving schedule, our online giving system is a secure, convenient option. Think of it as a virtual offering bucket; a way that you can give to FloodGate from wherever you are.

    base-button(@click.native="giveOnline") Give Online
</template>

<script>
export default {
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
