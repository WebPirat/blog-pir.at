<template>
  <div>
    <div class="header">
      <div v-for="icon in icons" :key="icon" @click="filterRants(icon)">
        <!-- Display the icon -->
        <font-awesome-icon style="font-size: 76px" :icon="icon" />
      </div>
    </div>
  <div class="md:grid md:grid-cols-2">
      <transition-group name="fade">
        <div v-for="(rant, index) in rants" :key="rants.id">
          <rants-startseite class="blogpost" :rants="rant"/>
        </div>
      </transition-group>
  </div>
    <div>Pagination</div>
  </div>
</template>

<script>
import BlogStartseite from "../../components/index/Blog-Startseite";

export default {
  components: {
    BlogStartseite
  },
  data() {
    return {
      icons: [],
      selectedIcon: null,
      allRants: [],
      rants: []
    };
  },
  async setup() {
    const rants = ref([]);
    const config = useRuntimeConfig();
    const supabase = useSupabaseClient()

    let {data: blog_rants, error} = await supabase
        .from('blog_rants')
        .select('*')
    rants.value = blog_rants
    console.log(rants)
    return {
      rants
    };
  },
  methods: {
    groupIcons() {
      const iconSet = new Set();
      this.rants.forEach(rant => {
        if (rant.icon) {
          iconSet.add(rant.icon);
        }
      });
      this.icons = Array.from(iconSet);
    },
    filterRants(icon) {
      this.selectedIcon = icon;
      if (icon) {
        this.rants = this.allRants.filter(rant => rant.icon === icon);
      } else {
        this.rants = this.allRants;
      }
    },
  },
  created() {
    this.groupIcons();
  }
};
</script>

<style scoped>
.blogpost {
  opacity: 0;
  animation-name: fade-in;
  animation-duration: 2.1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>