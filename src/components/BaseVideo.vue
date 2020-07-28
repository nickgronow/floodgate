<template lang="pug">
iframe.w-full.my-8.mx-auto(class="sm:w-140 sm:h-80 md:my-12 md:w-160 md:h-90 lg:w-180 lg-h-100 lg:my-16 xl:w-200 xl:h-112" :src="src" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen")
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>
