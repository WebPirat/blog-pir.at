<template>
  <div class="container mx-auto h-screen p-4">
    <div class="grid grid-rows-[75px,auto,50px] h-full border rounded p-2 shadow-2xl">
      <div class=""><topmenu /></div>
      <div class="overflow-x-hidden py-4"><NuxtPage /></div>
      <div><bottom /></div>
      <SpeedInsights />
    </div>
  </div>
</template>
<script>
import Topmenu from "./components/header/topmenu";
import Bottom from "./components/bottom/bottom";
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
export default {
  components: {Topmenu, Bottom, SpeedInsights},
}
</script>