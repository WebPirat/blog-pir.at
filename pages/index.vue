<template>
  <div>
    <Head>
      <Title>{{meta[0].title}}</Title>
      <Meta name="lang" content="de"/>
      <Meta name="description" :content="meta[0].description"/>
      <Meta name="og:description" :content="meta[0].description"/>      
      <Meta name="og:title" :content="meta[0].title"/>
      <Meta name="og:url" :content="meta[0].url" />
      <Meta name="og:image" :content="headerimg.publicUrl" />
      <Meta name="twitter:title" :content="meta[0].title" />
      <Meta name="twitter:description" :content="meta[0].description" />
      <Meta name="twitter:image" :content="headerimg.publicUrl" />
      <Meta name="twitter:card" content="summary" />
    </Head>
  <div class="md:grid md:grid-cols-2">
    <div class="hidden md:block mx-auto">
      <nuxt-img src="/img/pirat_rupft.webp" alt="Pirat rupft" class="h-[750px]" />
    </div>
    <div class="background-image mt-6">
        <div v-for="(rant, index) in rants.slice(0, 5)" :key="rant.id">
          <rants-startseite class="blogpost" :rants="rant" />
        </div>
      <div class="text-center mt-4"><NuxtLink class="bg-lightgray rounded text-white p-2" to="/rants">Zeig mehr</NuxtLink></div>
    </div>
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

    const {data: meta, error: metaerror} = await supabase.from('blog_meta').select('*').eq('id', 5)
    
    const {data: headerimg} = await supabase.storage.from('BlogMeta').getPublicUrl(meta[0].image)



    return {
      rants,
      meta,
      headerimg
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
