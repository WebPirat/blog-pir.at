<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "sidemenu",
  props:{
    blogid: {
      type: Number,
      required: true,
    },
    blognav: {
      type: Object,
      required: true,
    },
    bloginfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      submenu:[],
      showInfoDiv: false,
      showBarsDiv: false,
      showShareDiv: false,
      showInfoLink: false,
      showBarsLink: false,
    };
  },
  methods: {
    async getSubmenu() {
      if (this.blognav.length > 0) {
        this.showBarsLink = true;
      } 
      if (this.bloginfo.length > 0) {
        this.showInfoLink = true;
      }      
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
  mounted() {
    this.getSubmenu();
  },
  setup(){
  }
})
</script>

<template>
  <div class="sticky-top fixed">
    <div class="text-center space-x-2 text-2xl vertical-nav">
      <a v-if="showBarsLink" href="" @click.prevent="toggleBarsDiv"> <font-awesome-icon :icon="['fas', 'bars']" /> </a>
      <a v-if="showInfoLink" href="" @click.prevent="toggleInfoDiv"> <font-awesome-icon :icon="['fas', 'circle-info']" /> </a>
      <a href="#comments"> <font-awesome-icon :icon="['fas', 'comment']" /> </a>
      <a href="" @click.prevent="toggleShareDiv"> <font-awesome-icon :icon="['fas', 'share']" /></a>
    </div>
    <div v-if="showBarsDiv" class="fade border border-lightgray rounded p-4 my-2">
      <div class="text-center font-bold">Navigation</div>
      <ol style="list-style: auto" class="mx-4">
        <li v-for="nav in blognav" :key="nav.id">
          <a :href="nav.link">{{ nav.title }}</a>
        </li>
      </ol>
    </div>
    <div v-if="showInfoDiv" class="fade border border-lightgray rounded p-4 my-2">
      <div class="text-center font-bold mb-2">Infos</div>
      <div v-for="info in bloginfo" :key="info.id" class="grid grid-cols-2">
        <div>{{ info.title }}</div>
        <div>{{ info.value }}</div>
      </div>
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
@media (max-width: 640px) {
  .sticky-top {
    position:absolute;
    top: 0;
  }
  .vertical-nav {
    display: flex;
    flex-direction: row;
    background-color: white;
  }
}
.fade {
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
</style>
