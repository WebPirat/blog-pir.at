<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "sidemenu",
  props:{
    blogid: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      submenu:[],
    };
  },
  methods: {
    async getSubmenu() {
      this.getSubNav()
    },
    getSubNav: async function () {

    },
  },
  setup(){

  }
})
</script>

<template>
<div>
  <div class="">
    <div>
      Nav
    </div>
    <div>
      Info
    </div>
    <div>
      <a href="#comments"> <font-awesome-icon :icon="['fas', 'comment']" /> </a>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>