<template lang="pug">
Layout
  g-image(src="~/assets/bill-and-clara.jpg")
  base-hero(bg="dark")
    template(v-slot:heading) Welcome to FloodGate!

    p.uppercase.max-w-md.mx-auto.text-lg.text-gray-500(class="sm:text-xl md:text-2xl md:max-w-3xl") We are so glad you are here!

    p.mt-2.max-w-md.mx-auto.text-base.text-left.text-gray-300(class="sm:text-lg sm:mt-4 md:mt-6 lg:mt-8 md:text-xl md:max-w-5xl") We passionately worship, enthusiastically serve and compassionately care for people! Our church carries a deep commitment to The Word of God. For almost 40 years, it has been our vision to positively impact families, our community and the nations with the love and power of God.  If you’re looking for more than just a good cup of coffee on Sunday morning, this is the church for you!

    p.mt-2.max-w-md.mx-auto.text-right.text-base.text-gray-300(class="sm:text-lg sm:mt-4 md:mt-6 lg:mt-8 md:text-xl md:max-w-5xl")
      span.font-bold Bill & Clara Bolin
      span , FloodGate Lead Pastors
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
    ]
  }
}
</script>
