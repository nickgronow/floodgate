<template lang="pug">
.relative.bg-gray-50.overflow-hidden

  .hidden(class="sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full")
    .relative.h-full.max-w-screen-xl.mx-auto
      svg.absolute.inset-0.transform.text-gray-200(class="rotate-5 translate-x-1-29 translate-y-1-21 scale-75" width="4000" height="4000" fill="none")
        defs
          pattern(id="cross" x="0" y="0" width="0.15" height="0.15")
            line(x1="18" y1="3" x2="36" y2="48" stroke="currentColor" stroke-width="6")
            line(x1="7" y1="25" x2="42" y2="12" stroke="currentColor" stroke-width="6")
        rect(width="4000" height="4000" fill="url(#cross)")

      svg.absolute.inset-0.transform.text-gray-200(class="-rotate-5 translate-x-1-22 translate-y-1-27 scale-75" width="4000" height="4000" fill="none")
        defs
          pattern(id="cross" x="0" y="0" width="0.15" height="0.15")
            line(x1="18" y1="3" x2="36" y2="48" stroke="currentColor" stroke-width="6")
            line(x1="7" y1="25" x2="42" y2="12" stroke="currentColor" stroke-width="6")
        rect(width="4000" height="4000" fill="url(#cross)")

      svg.absolute.inset-0.transform.text-gray-200(class="rotate-10 translate-x-1-24 translate-y-1-24 scale-75" width="4000" height="4000" fill="none")
        defs
          pattern(id="sqiggle" x="0" y="0" width="0.15" height="0.15")
            path(d="M 5 15 c 0 -15 20 -15 20 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6")
            path(d="M 25 14.5 c 0 15 20 15 20 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6")
            path(d="M 45 15 c 0 -15 20 -15 20 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6")
            path(d="M 65 14.5 c 0 15 20 15 20 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6")
            path(d="M 85 15 c 0 -15 20 -15 20 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6")
            path(d="M 105 14.5 c 0 15 20 15 20 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6")
        rect(width="4000" height="4000" fill="url(#sqiggle)")

      svg.absolute.inset-0.transform.text-gray-200(class="-rotate-15 translate-x-1-24 translate-y-1-27 scale-75" width="4000" height="4000" fill="none")
        defs
          pattern(id="sqiggle" x="0" y="0" width="0.15" height="0.15")
            path(d="M 5 15 c 0 -15 20 -15 20 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6")
            path(d="M 25 14.5 c 0 15 20 15 20 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6")
            path(d="M 45 15 c 0 -15 20 -15 20 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6")
            path(d="M 65 14.5 c 0 15 20 15 20 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6")
            path(d="M 85 15 c 0 -15 20 -15 20 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6")
            path(d="M 105 14.5 c 0 15 20 15 20 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="6")
        rect(width="4000" height="4000" fill="url(#sqiggle)")

  .relative.pt-6.pb-12(class="sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32")
    main.mt-10.mx-auto.max-w-screen-xl.px-4(class="sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28")
      .text-center
        h2.text-4xl.tracking-tight.leading-10.font-extrabold.text-gray-900(class="sm:text-5xl sm:leading-none md:text-6xl")
          | FloodGate 
          br(class="xl:hidden")
          span.text-indigo-600 Church
        p.mt-3.max-w-md.mx-auto.text-base.text-gray-500(class="sm:text-lg md:mt-5 md:text-xl md:max-w-3xl")
          | Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.

        .mt-5.max-w-md.mx-auto(class="sm:flex sm:justify-center md:mt-8")
          .rounded-md.shadow
            a.w-full.flex.items-center.justify-center.px-8.py-3.border.border-transparent.text-base.leading-6.font-medium.rounded-md.text-white.bg-indigo-600(class="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10")
              | Get started
          div(class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3")
            a(href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10")
              | Live demo
</template>
