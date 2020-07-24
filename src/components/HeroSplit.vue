<template lang="pug">
div(class="lg:relative")
  .mx-auto.max-w-7xl.w-full.pt-16.pb-20.text-center(class="lg:py-48 lg:text-left")
    .px-4(class="lg:w-1/2 sm:px-8 xl:pr-16")
      h2.text-4xl.tracking-tight.leading-10.font-extrabold.text-gray-900(class="sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl")
        span Data to enrich your
        br(class="xl:hidden")
        span.text-indigo-600 online business
      p.mt-3.max-w-md.mx-auto.text-lg.text-gray-500(class="sm:text-xl md:mt-5 md:max-w-3xl") Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
  .relative.w-full.h-64(class="sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full")
    img.absolute.inset-0.w-full.h-full.object-cover(src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="Woman on her phone")
</template>

<script>
export default {
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
