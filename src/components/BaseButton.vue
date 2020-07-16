<template lang="pug">
button.w-full.rounded-md.px-4.py-2.text-base.leading-6.font-medium.transition.duration-500.ease-in-out(class="focus:outline-none sm:max-w-xs md:px-6 md:py-3 md:text-lg" :class="cssClasses")
  slot
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'primary'
    }
  },
  computed: {
    cssClasses () {
      if (this.type === 'primary') {
        return 'text-white bg-fg-blue hover:bg-fg-blue-300'
      } else {
        return 'text-fg-dark border border-fg-dark hover:text-white hover:bg-fg-dark'
      }
    }
  }
}
</script>
