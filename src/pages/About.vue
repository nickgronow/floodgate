<template lang="pug">
Layout
  g-image(src="~/assets/bill-and-clara.jpg")
  base-hero(bg="dark")
    template(v-slot:heading) Welcome to FloodGate!

    p.uppercase.max-w-md.mx-auto.text-lg.text-gray-500(class="sm:text-xl md:text-2xl md:max-w-3xl") We are so glad you are here!

    p.mt-6.max-w-md.mx-auto.text-base.text-left.text-gray-300(class="sm:text-lg sm:mt-4 md:mt-6 lg:mt-8 md:text-xl md:max-w-5xl") We passionately worship, enthusiastically serve and compassionately care for people! Our church carries a deep commitment to The Word of God. For almost 40 years, it has been our vision to positively impact families, our community and the nations with the love and power of God.  If you’re looking for more than just a good cup of coffee on Sunday morning, this is the church for you!

    p.mt-6.max-w-md.mx-auto.text-right.text-base.text-gray-300(class="sm:text-lg sm:mt-4 md:mt-6 lg:mt-8 md:text-xl md:max-w-5xl")
      span.font-bold Bill & Clara Bolin
      span , FloodGate Lead Pastors

  base-hero(bg="plain")
    .text-left.mt-6.border-t-2.border-gray-100
      dl(class="md:grid md:grid-cols-2 md:gap-8")
        div
          div
            dt.text-lg.leading-6.font-medium.text-gray-900 What time should I arrive?
            dd.mt-2
              p.text-base.leading-6.text-gray-500 We encourage you to come early, grab a cup of coffee, and get to know someone. Give yourself about 15-30 minutes before service time to park, come in, and get comfortable.
          .mt-12
            dt.text-lg.leading-6.font-medium.text-gray-900 What is your style of worship?
            dd.mt-2
              p.text-base.leading-6.text-gray-500 Our worship services are both dynamic and unique. We believe that leading people in worship comes from being lead worshipers, not someone trying to get everyone to sing. Our worship teams play and sing with hearts after God; hoping that the overflow of that pure worship will cause others in the church to seek His face. We strongly believe in following the flow of the Holy Spirit. By yielding to Holy Spirit, we are preparing a place in which God can enthrone Himself on our praises (Psalms 22:3) and appear in ways that only He can!
          .mt-12
            dt.text-lg.leading-6.font-medium.text-gray-900 Do you recognize first-time visitors in the service?

            dd.mt-2
              p.text-base.leading-6.text-gray-500 Don’t worry, we’re not going to ask you to stand up and introduce yourself. We want you to be completely comfortable while you’re with us. We do like to show our appreciation by giving you a visitor packet. We also ask that you fill out a Connect card Card (Found in the seat pockets in our Worship Center, Or In our lobby at the Connect Center). An usher at the door will gladly take your Connect Card on your way out after service.

        div
          .mt-12(class="sm:mt-0")
            dt.text-lg.leading-6.font-medium.text-gray-900 What should I wear?
            dd.mt-2
              p.text-base.leading-6.text-gray-500 Whatever you’d like. Most of us just wear casual, comfortable clothes. If you’d like to dress up a bit, that’s fine too. You’ll find a variety of different styles in the service and around campus.

          .mt-12
            dt.text-lg.leading-6.font-medium.text-gray-900 How do I get involved?
            dd.mt-2
              p.text-base.leading-6.text-gray-500 There is a lot going on at FloodGate, so much that it can be a little overwhelming for a newcomer. If you’re looking for a place to connect, check out our events page to get information on all our ministry events happening at FloodGate. You will be more than capable of fitting into our family as we grow in relationship, which is where both authority and ministry grow from. We know there’s a place for you here, as we walk in the Father’s love and determine how to best release His love through you!

          .mt-12
            dt.text-lg.leading-6.font-medium.text-gray-900 How do I give?
            dd.mt-2
              p.text-base.leading-6.text-gray-500 We receive tithes and offerings in our church during worship. We believe that as kings and priests (Revelation 1:6) we all have the responsibility of bringing our tithes and offerings as an act of obedience and personal worship toward God. Or text  ANY AMOUNT to 84321 and following the prompts. You can also give right here on our website, by just clicking the green button below.
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
