<template>
  <div class="md:grid md:grid-cols-2">
    <div class="hidden md:block mx-auto"><img class="h-[750px]" src="/img/pirat_rupft.png"></div>
    <div class="background-image mt-6">
      <transition-group>
        <div v-for="(rant, index) in rants.slice(0, 5)" :key="rant.id">
          <rants-startseite class="blogpost" :rants="rant" />
        </div>
      </transition-group>
      <div class="text-center mt-4"><NuxtLink class="bg-lightgray rounded text-white p-2" to="/rants">Zeig mehr</NuxtLink></div>
    </div>
  </div>
</template>

<script>
import BlogStartseite from "../components/index/Blog-Startseite";

export default {
  components: {
    BlogStartseite
  },
  data() {
    return {
      loaded: []
    };
  },
  async setup() {
    const rants = ref([]);
    const config = useRuntimeConfig();
    const loaded = ref([]);
    const supabase = useSupabaseClient()

    let {data: blog_rants, error} = await supabase
        .from('blog_rants')
        .select('*, icon_data: blog_icons(*) ')
        .order('created_at').limit(5)
    rants.value = blog_rants
    loaded.value = new Array(rants.value.length).fill(false);
    return {
      rants
    };
  },

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