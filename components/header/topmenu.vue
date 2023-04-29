<template>
<div class="w-full h-full container border-b border-b-lightgray p-2 grid grid-cols-2">
  <div class="flex content-center"><img src="/img/logo.png" class="logo"> <div class="flex flex-wrap content-center ml-2 h-full text-3xl chalk font-bold">BlogPirat</div></div>
  <div class="flex flex-wrap flex-end content-center">
    <nav>
      <ul class="flex topmenu">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      </ul>
    </nav>
  </div>
</div>
</template>

<script>
export default {
  name: "topmenu"
}
</script>

<style scoped>
.logo{
  height: 50px;
}
.topmenu li{
  list-style: none;
  margin-left: 10px;
}
</style>