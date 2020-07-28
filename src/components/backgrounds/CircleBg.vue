<template lang="pug">
svg.absolute.inset-0.transform.scale-100(:width="size" :height="size" fill="none")
  defs
    pattern(id="circle" x="0" y="0" :width="scale" :height="scale")
      circle(cx="50" cy="50" :r="radius" fill="currentColor")
  rect(:width="size" :height="size" fill="url(#circle)")
</template>

<script>
export default {
  data () {
    return {
      size: 4000,
      scale: 0.15,
      radius: 10
    }
  }
}
</script>
