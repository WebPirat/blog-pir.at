<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "rants-startseite",
  props: {
    rants: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleDateString();
    }
  }
})
</script>

<template>
  <section class="container max-w-2xl mx-auto">

    <div class="flex items-center justify-start">
      <div class="w-3 overflow-hidden">
        <div class="h-4 bg-black rotate-45 transform origin-bottom-right rounded-sm"></div>
      </div>
      <div class="flex bg-black text-white my-3 border rounded-lg flex-1 hover:bg-white hover:text-black hover:border">
        <div class="p-4 my-1 border-r-2 border-white w-[150px] text-center" >
          <ClientOnly>
            <font-awesome-icon v-if="rants.icon" style="font-size: 76px" :icon="rants.icon_data.icon" />
            <font-awesome-icon v-else="rants.icon" style="font-size: 76px" icon="bug" />
          </ClientOnly>
        </div>
        <div class="p-4 relative w-full">
          <p class="text-lg">{{rants.content}}</p>
          <p class="absolute bottom-0 right-1 text-sm text-gray-400">{{formatDate(rants.created_at)}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>