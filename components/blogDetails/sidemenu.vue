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
      showInfoDiv: false,
      showBarsDiv: false,
      showShareDiv: false,
    };
  },
  methods: {
    async getSubmenu() {
      this.getSubNav()
    },
    getSubNav: async function () {

    },
    toggleInfoDiv: function() {
      this.showInfoDiv = !this.showInfoDiv;
    },
    toggleBarsDiv: function() {
      this.showBarsDiv = !this.showBarsDiv;
    },
    toggleShareDiv: function() {
      this.showShareDiv = !this.showShareDiv;
    },
  },
  setup(){

  }
})
</script>

<template>
  <div class="sticky-top">
    <div class="text-center space-x-2 text-2xl">
      <a href="" @click.prevent="toggleBarsDiv"> <font-awesome-icon :icon="['fas', 'bars']" /> </a>
      <a href="" @click.prevent="toggleInfoDiv"> <font-awesome-icon :icon="['fas', 'circle-info']" /> </a>
      <a href="#comments"> <font-awesome-icon :icon="['fas', 'comment']" /> </a>
      <a href="" @click.prevent="toggleShareDiv"> <font-awesome-icon :icon="['fas', 'share']" /></a>
    </div>
    <div v-if="showInfoDiv" class="fade border border-lightgray rounded p-4 my-2">
      Hier sind einige Informationen.
    </div>
    <div v-if="showBarsDiv" class="fade border border-lightgray rounded p-4 my-2">
      <a href="#db-include">Link 1</a>      
    </div>
    <div v-if="showShareDiv" class="fade text-white flex p-4">
      <SocialShare
          v-for="network in ['facebook', 'reddit', 'pinterest', 'twitter', 'linkedin', 'email']"
          :key="network"
          :network="network"
          :styled="true"
          :label="false"
          class="p-4 rounded-none"
      />
    </div>
  </div>
</template>

<style scoped>

.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.fade {
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
</style>
