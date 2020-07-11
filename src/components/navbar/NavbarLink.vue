<template lang="pug">
g-link(:to="to" :class="classes")
  slot
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      baseClasses: [
        'first:ml-0',
        'ml-4',
        'px-3',
        'py-2',
        'rounded-md',
        'text-sm',
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
