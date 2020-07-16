<template lang="pug">
svg.absolute.inset-0.transform.text-gray-200.scale-75(:width="size" :height="size" fill="none")
  defs
    pattern(id="squiggle" x="0" y="0" :width="scale" :height="scale")
      path(d="M 5 15 c 0 -15 20 -15 20 0" fill="none" :stroke="color" :stroke-linecap="linecap" :stroke-width="strokeWidth")
      path(d="M 25 14.5 c 0 15 20 15 20 0" fill="none" :stroke="color" :stroke-linecap="linecap" :stroke-width="strokeWidth")
      path(d="M 45 15 c 0 -15 20 -15 20 0" fill="none" :stroke="color" :stroke-linecap="linecap" :stroke-width="strokeWidth")
      path(d="M 65 14.5 c 0 15 20 15 20 0" fill="none" :stroke="color" :stroke-linecap="linecap" :stroke-width="strokeWidth")
      path(d="M 85 15 c 0 -15 20 -15 20 0" fill="none" :stroke="color" :stroke-linecap="linecap" :stroke-width="strokeWidth")
      path(d="M 105 14.5 c 0 15 20 15 20 0" fill="none" :stroke="color" :stroke-linecap="linecap" :stroke-width="strokeWidth")
  rect(:width="size" :height="size" fill="url(#squiggle)")
</template>
<script>
export default {
  data () {
    return {
      size: 4000,
      scale: 0.14,
      linecap: 'round',
      strokeWidth: 6,
      color: 'currentColor'
    }
  }
}
</script>
