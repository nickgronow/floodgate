<template lang="pug">
nav.bg-fg-dark

  // Container
  .max-w-7xl.mx-auto(class="px-4 sm:px-6 lg:px-8")
    .flex.items-center.justify-between.h-16
      .flex.items-center

        // Logo
        .flex-shrink-0
          g-link(to="/")
            img(class="block lg:hidden h-12 w-auto" src='/icons/mark.svg' alt='FloodGate logo')
            img(class="hidden lg:block h-12 w-auto" src='/icons/logo.svg' alt='FloodGate logo')
        // Menu links
        .hidden(class="sm:block sm:ml-6")
          .flex
            navbar-link(to="/about/") About
            navbar-link(to="/give/") Give
            navbar-link(to="https://floodgate.online.church") Watch

      //  Mobile menu button
      .-mr-2.flex(class="sm:hidden")
        button.inline-flex.items-center.justify-center.p-2.rounded-md.text-gray-400.transition.duration-150.ease-in-out(
          class="hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
          @click='toggleMobileMenu'
          aria-label='Main menu'
          aria-expanded='false')

          //  Icon when menu is closed.
          svg.block.h-6.w-6(fill='none' viewBox='0 0 24 24' stroke='currentColor')
            path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16')

          //  Icon when menu is open.
          svg.hidden.h-6.w-6(fill='none' viewBox='0 0 24 24' stroke='currentColor')
            path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12')

  // Mobile menu toggle with - open: "block" closed: "hidden"
  div(class="sm:hidden" :class="mobileMenuCss")

    // Mobile menu links
    .px-2.pt-2.pb-3
      navbar-link-mobile(to="/about/") About
      navbar-link-mobile(to="/give/") Give
      navbar-link-mobile(to="https://floodgate.online.church") Watch
</template>

<script>
import NavbarLink from '@/components/navbar/NavbarLink.vue'
import NavbarLinkMobile from '@/components/navbar/NavbarLinkMobile.vue'

export default {
  components: {
    NavbarLink,
    NavbarLinkMobile
  },
  data () {
    return {
      showMobileMenu: false
    }
  },
  computed: {
    mobileMenuCss () {
      if (this.showMobileMenu) {
        return 'display'
      }
      return 'hidden'
    }
  },
  methods: {
    toggleMobileMenu () {
      this.showMobileMenu = !this.showMobileMenu
    }
  }
}
</script>
