<template>
  <div class="mx-auto md:w-1/3 text-center grid md:grid-cols-6 grid-cols-3 md:border border-y border-lightgray about-menu rounded">
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/about/author">Author</nuxt-link>
    <nuxt-link to="/about/pirat">Pirat</nuxt-link>
    <nuxt-link to="/about/papagei">Papagei</nuxt-link>
    <nuxt-link to="/about/layout">Layout</nuxt-link>
    <nuxt-link to="/about/stack">Stack</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "about-menu"
}
</script>

<style scoped>
.about-menu a{
  @apply border-x md:border-r md:border-l-0 border-x-lightgray
}

.about-menu a:last-child{
  @apply md:border-r-0
}
.about-menu .router-link-active{
  @apply bg-orange text-white
}
</style>