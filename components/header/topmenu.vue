<template>
  <div class="border-b">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="flex items-center">
        <img src="/img/logo_klein.jpg" alt="Logo" class="h-12 w-12">
        <div class="ml-3 font-bold text-3xl chalk">BlogPirat</div>
      </div>
      <div class="flex md:hidden">
        <button type="button" class="text-gray-500  focus:outline-none focus:text-gray-600" aria-label="Toggle menu" @click="isOpen = !isOpen">
          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
            <path v-if="isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M3 18.75H21V16.75H3V18.75ZM3 12.75H21V10.75H3V12.75ZM3 6.75H21V4.75H3V6.75Z"/>
            <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M4 18H20V16H4V18ZM4 12H20V10H4V12ZM4 6H20V4H4V6Z"/>
          </svg>
        </button>
      </div>
      <div class="hidden md:flex items-center">
        <nav>
          <ul class="flex space-x-4">
            <li><NuxtLink to="/" class=" ">Home</NuxtLink></li>
            <li><NuxtLink to="/blog" class=" ">Blog</NuxtLink></li>
            <li><NuxtLink to="/projekte" class=" ">Projekte</NuxtLink></li>
            <li><NuxtLink to="/about" class=" ">About</NuxtLink></li>
          </ul>
        </nav>
      </div>
      <div class="md:hidden absolute top-0 left-0 w-full bg-white rounded-b z-20" :class="{'block': isOpen, 'hidden': !isOpen}">
        <div class="flex items-center px-2 pt-2">
          <img src="/img/logo.png" alt="Logo" class="h-12 w-12">
          <div class="ml-3 font-bold text-3xl chalk">BlogPirat</div>
        </div>
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink to="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</NuxtLink>
          <NuxtLink to="/about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</NuxtLink>
          <NuxtLink to="/blog" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Blog</NuxtLink>
          <NuxtLink to="/projekte" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Projekte</NuxtLink>
        </div>
        <div class="text-center p-4" @click="isOpen = !isOpen">Close</div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  watch: {
    $route(to, from) {
      this.isOpen = false;
    }
  }
}
</script>