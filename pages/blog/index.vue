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
    <div class="hidden md:block mx-auto"><img class="h-[750px]" src="/img/pirat_run_angry.png"></div>
    <div class="background-image">
      <img src="/img/papagei.png" class="hidden md:block z-0 absolute right-10 top-100">
      <transition-group name="fade">
        <div v-for="(blogpost, index) in blogposts" :key="blogpost.id">
            <blog-startseite class="blogpost" :blogpost="blogpost"></blog-startseite>
        </div>
      </transition-group>
      <div class="text-center p-4">
      <nuxt-link to="/blog-all" class="bg-orange rounded p-2 text-white mr-10 mb-10">mehr Blogposts &rarr;</nuxt-link>
      </div>
    </div>
  </div>
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
      loaded: []
    };
  },
async  setup() {
    const blogposts = ref([]);
    const config = useRuntimeConfig();
    const loaded = ref([]);
    const supabase = useSupabaseClient()

    let { data: blog_posts, error } = await supabase
        .from('blog_posts')
        .select('*')
        .lte('online_at', new Date().toISOString())
        .order('online_at', {ascending: false}).limit(3)
    blogposts.value = blog_posts

      
    const {data: meta, error: metaerror} = await supabase.from('blog_meta').select('*').eq('id', 3)
    const {data: headerimg} = await supabase.storage.from('BlogMeta').getPublicUrl(meta[0].image)

    return {
      blogposts,
      meta,
      headerimg
    };
  },
  watch: {
    blogposts() {
      let delay = 0;
      for (let i = 0; i < this.blogposts.length; i++) {
        setTimeout(() => {
          this.loaded[i] = true;
        }, delay);
        delay += 200;
      }
    },
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
