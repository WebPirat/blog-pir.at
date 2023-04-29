<template>
  <div class="container mx-auto h-screen p-4">
    <div class="grid grid-rows-[75px,auto,50px] h-full border rounded p-2 shadow-2xl">
      <div><topmenu /></div>
      <div class="overflow-y-auto py-4"><NuxtPage /></div>
      <div><bottom /></div>
    </div>
  </div>
</template>
<script>
import Topmenu from "./components/header/topmenu";
import Bottom from "./components/bottom/bottom";
export default {
  components: {Topmenu, Bottom}
}
</script>