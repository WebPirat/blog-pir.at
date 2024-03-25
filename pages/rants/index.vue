<template>
  <div>
    <div class="">
      <icons-menu :iconSet="icons" @iconClick="filterRants" />
    </div>
  <div class="md:grid md:grid-cols-2 my-10">
      <transition-group name="fade">
        <div v-for="(rant, index) in rants.slice(startItem, maxItems)" :key="rant.id">
          <rants-overview class="blogpost" :rants="rant"/>
        </div>
      </transition-group>
  </div>
    <div>
      <pagination :pages="Page" @pageClick="filterPagination" />
    </div>
  </div>
</template>

<script>
import BlogStartseite from "../../components/index/Blog-Startseite";
import IconsMenu from "../../components/menu/IconsMenu";
import Pagination from "../../components/menu/pagination";
export default {
  components: {
    BlogStartseite,
    IconsMenu,
    Pagination
  },
  data() {
    return {
      icons: [],
      selectedIcon: null,
      allRants: [],
      rants: [],
      startItem: 0,
      maxItems: 8,
      Page: 1
    };
  },
  async setup() {
    const rants = ref([]);
    const allRants = ref([]);
    const config = useRuntimeConfig();
    const supabase = useSupabaseClient()

    let {data: blog_rants, error} = await supabase
        .from('blog_rants')
        .select('*, icon_data: blog_icons(*) ')
        .order('created_at')

    rants.value = blog_rants
    allRants.value = blog_rants

    return {
      rants,
      allRants
    };
  },
  methods: {
    groupIcons() {
      const iconSet = new Set();
      this.allRants.forEach(rant => {
        if (rant.icon) {
          iconSet.add(rant.icon_data.icon);
        }
      });
      iconSet.add('fa-solid fa-bug');
      this.icons = Array.from(iconSet);
    },
    filterRants(icon) {
      console.log('icon', icon)
      this.selectedIcon = icon;
      if(icon === null ) {
        this.rants = this.allRants.filter(rant => rant.icon === icon);
      }else {
        if (icon) {
          this.rants = this.allRants.filter(rant => rant.icon === icon);
        } else {
          this.rants = this.allRants;
        }
      }
      this.calculatePages();
    },
    calculatePages() {
      this.Page = Math.ceil(this.rants.length / this.maxItems);
    },
    filterPagination(page) {
      this.rants = this.allRants.slice((page - 1) * this.maxItems, page * this.maxItems);
      console.log((page - 1) * this.maxItems, page * this.maxItems)
    }
  },
  created() {
    this.groupIcons();
    this.calculatePages();
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