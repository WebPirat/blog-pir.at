<template>
  <div>
     <Head>
      <Title>Blog Pirat | {{blog.title}}</Title>
      <Meta name="lang" content="de"/>
      <Meta name="description" :content="metadesc"/>
      <Meta name="og:description" :content="metadesc"/>      
      <Meta name="og:title" :content="blog.title"/>
      <Meta name="og:url" :content="blog.url" />
      <Meta name="og:image" :content="imageUrl" />
      <Meta name="twitter:title" :content="blog.title" />
      <Meta name="twitter:description" :content="metadesc" />
      <Meta name="twitter:image" :content="imageUrl" />
      <Meta name="twitter:card" content="summary" />
    </Head>
  <transition name="slide-fade">
    <div class="flex justify-center loading-container overflow-hidden" v-if="loader">
      <div class="loader">
        <nuxt-img src="/img/pirat_carry.jpeg" class="rounded-full"/>
      </div>
    </div>
  </transition>
  <transition name="slide-fade">
    <div class="md:grid md:grid-cols-4 gap-4 py-2 md:px-4 md:blog-post-container relative" v-if="loaded">
      <div class="relative">
        <nuxt-img :src="imageUrl"
                  width="470"
                  format="webp"
                  alt="Blog post image"
                  class="w-full h-auto object-cover grayscale"
        />
        <div class="p-2 text-center">Posted on {{ formatDate(blog.created_at) }} by {{ blog.author }}</div>
        <div class="hidden sm:block">
          <sidemenu :blogid="blog.id" :bloginfo="blog.info" :blognav="blog.nav" />
        </div>
        <div class="block sm:hidden relative mobile-nav">          
          <sidemenunav :blogid="blog.id" :bloginfo="blog.info" :blognav="blog.nav" />
          </div>
      </div>
      <div class="blog-blog col-span-3 p-4 rounded border">
        <h2 class="text-3xl font-bold mb-4 border-b border-b-lightgray pb-2">{{ blog.title }}</h2>
        <div class="m-4">
         <parsedContent :contentString="blog.content" /> 
        </div>
        <div class="trennline90"></div>
        <div id="comments" class="p-6 mx-auto md:w-3/4">
          <write-blog-comment :blogid="blog.id" />
        </div>
        <blog-comments :blogid="blog.id" />
      </div>
    </div>
  </transition>
  </div>
</template>

<script>
import Sidemenu from "~/components/blogDetails/sidemenu.vue";
import BlogComments from "~/components/blogDetails/blogComments.vue";
import WriteBlogComment from "~/components/blog/writeBlogComment.vue";
import parsedContent from "~/components/blogDetails/parsedContent.vue";
import sidemenunav from "~/components/blogDetails/sidemenunav.vue";

export default {
  name: "Blog-Detail",
  components: {WriteBlogComment, BlogComments, Sidemenu, parsedContent, sidemenunav},
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
    const comments = ref([])
    const supabase = useSupabaseClient()


      let { data: blog_post, error } = await supabase
          .from('blog_posts')
          .select('*, nav: blog_posts_nav(*), info: blog_posts_info(*)')
          .eq('slug', slug.value)
          .single()
      blog.value = blog_post
      blog.value.author = blog_post.author || 'BlogPirat'

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
    const metadesc = blog.value.content.slice(0, 150);
   console.log('blog:', blog.value) 
    return {
      slug,
      blog,
      imageUrl,
      metadesc
    }
  }
}
</script>

<style scoped>
.mobile-nav{
  top: 90px;
  width: 80%;
  z-index: 1000;
  background-color: white;
  border-bottom: 1px solid lightgray;
}
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
