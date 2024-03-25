<template>
  <div>
  <transition name="slide-fade">
    <div class="flex justify-center loading-container overflow-hidden" v-if="loader">
      <div class="loader">
        <img src="/img/pirat_carry.jpeg" class="h-full rounded-full">
      </div>
    </div>
  </transition>
  <transition name="slide-fade">
    <div class="md:grid md:grid-cols-3 gap-4 py-2 px-4 blog-post-container" v-if="loaded">
      <div>
        <nuxt-img :src="imageUrl"
                  width="470"
                  format="webp"
                  alt="Blog post image"
                  class="w-full h-auto object-cover grayscale"
        />
        <div class="p-2 text-center">Posted on {{ formatDate(blog.created_at) }} by {{ blog.author }}</div>
      </div>
      <div class="blog-blog col-span-2">
        <h2 class="text-3xl font-bold mb-4 border-b border-b-lightgray pb-2">{{ blog.title }}</h2>
        <div v-html="blog.content"></div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>
export default {
  name: "Blog-Detail",
  data() {
    return {
     loader: true,
     loaded: false
    };
  },
  mounted() {
    this.loader = false;
    setTimeout(() => {
      this.loaded = true;
    }, 2200);
  },
  methods: {
    formatDate(isoDate, format = "DD.MM.YYYY") {
      const date = new Date(isoDate);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const formattedDate = format
          .replace("YYYY", year)
          .replace("MM", month.toString().padStart(2, "0"))
          .replace("DD", day.toString().padStart(2, "0"))
          .replace("HH", hours.toString().padStart(2, "0"))
          .replace("mm", minutes.toString().padStart(2, "0"))
          .replace("ss", seconds.toString().padStart(2, "0"));

      return formattedDate;
    }
  },
 async setup() {
    const route = useRoute()
    const slug = ref(route.params.slug)
    const blog = ref({})
    const supabase = useSupabaseClient()


      let { data: blog_post, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug.value)
          .single()
      blog.value = blog_post
      blog.value.author = blog_post.author || 'me'

   let imageUrl = '/img/pirat_search.jpeg';
   if(blog_post.img_url) {
     try {
       const {data, error} = supabase.storage.from('BlogHeader').getPublicUrl(blog_post.img_url);
       imageUrl = data.publicUrl;
       if (error) {
         throw error;
       }

     } catch (error) {
       console.error('Error fetching image:', error);
     }
   }
    return {
      slug,
      blog,
      imageUrl
    }
  }
}
</script>

<style scoped>
.loader{
  padding-top: 50px;
  height: 650px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>