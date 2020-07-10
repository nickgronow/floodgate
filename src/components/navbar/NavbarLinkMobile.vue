<template lang="pug">
g-link(:class="classes")
  slot
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      baseClasses: [
        'block',
        'first:mt-0',
        'mt-1',
        'px-3',
        'py-2',
        'rounded-md',
        'text-base',
        'font-medium',
        'leading-5',
        'text-gray-300',
        'hover:text-white',
        'hover:bg-gray-700',
        'transition',
        'duration-150',
        'ease-in-out'
      ],
      activeClasses: [
        'bg-gray-900',
        'text-white',
        'focus:outline-none',
        'focus:bg-gray-700',
      ]
    }
  },
  computed: {
    classes () {
      return this.baseClasses
    }
  }
}
</script>
