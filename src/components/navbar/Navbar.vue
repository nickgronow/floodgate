<template lang="pug">
nav.bg-gray-800

  // Container
  .max-w-7xl.mx-auto(class="px-4 sm:px-6 lg:px-8")
    .flex.items-center.justify-between.h-16
      .flex.items-center

        // Logo
        .flex-shrink-0
          img(class="block lg:hidden h-8 w-auto" src='/placeholders/mark.svg' alt='Workflow logo')
          img(class="hidden lg:block h-8 w-auto" src='/placeholders/logo.svg' alt='Workflow logo')
        // Menu links
        .hidden(class="sm:block sm:ml-6")
          .flex
            navbar-link Dashboard
            navbar-link Team
            navbar-link Projects
            navbar-link Calendar

      //  Mobile menu button
      .-mr-2.flex(class="sm:hidden")
        button.inline-flex.items-center.justify-center.p-2.rounded-md.text-gray-400.transition.duration-150.ease-in-out(
          class="hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
          aria-label='Main menu'
          aria-expanded='false')

          //  Icon when menu is closed.
          svg.block.h-6.w-6(fill='none' viewBox='0 0 24 24' stroke='currentColor')
            path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16')

          //  Icon when menu is open.
          svg.hidden.h-6.w-6(fill='none' viewBox='0 0 24 24' stroke='currentColor')
            path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12')

  // Mobile menu toggle with - open: "block" closed: "hidden"
  .hidden(class="sm:hidden")

    // Mobile menu links
    .px-2.pt-2.pb-3
      navbar-link-mobile Dashboard
      navbar-link-mobile Team
      navbar-link-mobile Projects
      navbar-link-mobile Calendar
</template>

<script>
import NavbarLink from '@/components/navbar/NavbarLink.vue'
import NavbarLinkMobile from '@/components/navbar/NavbarLinkMobile.vue'

export default {
  components: {
    NavbarLink,
    NavbarLinkMobile
  }
}
</script>
