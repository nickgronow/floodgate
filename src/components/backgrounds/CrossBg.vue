<template lang="pug">
svg.absolute.inset-0.transform.scale-75(:width="size" :height="size" fill="none")
  defs
    pattern(id="cross" x="0" y="0" :width="scale" :height="scale")
      line(x1="35" y1="5" x2="65" y2="95" stroke="currentColor" :stroke-width="strokeWidth")
      line(x1="15" y1="50" x2="80" y2="30" stroke="currentColor" :stroke-width="strokeWidth")
  rect(:width="size" :height="size" fill="url(#cross)")
</template>

<script>
export default {
  data () {
    return {
      size: 4000,
      scale: 0.16,
      strokeWidth: 6,
      color: 'currentColor'
    }
  }
}
</script>
