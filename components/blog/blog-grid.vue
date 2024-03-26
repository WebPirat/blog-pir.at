<template>
  <div class="relative rounded-lg shadow-xl h-full">
    <nuxt-img :class="isHovered ? 'no-grayscale' : 'grayscale'" :src="imageUrl" alt="Blog post image" class="w-full h-auto object-cover rounded-lg" width="250" />
    <a :href="'/blog/' + blogpost.slug" class="absolute inset-0" @mouseover="isHovered = true" @mouseleave="isHovered = false">
      <div class="absolute top-0 left-0 right-0 px-4 bg-black bg-opacity-50 text-white">
        <div class="border-b border-white py-2">
          <blog-grid-header :blogicons="blogpost.icons" :selectedIcons="selectedIcons" />
        </div>
      </div>
    <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black bg-opacity-50 text-white border-t border-white">
     <blog-grid-footer :postdate="blogpost.online_at" :blogauthor="auther" />
      </div>
      <div class="absolute inset-0 col-span-3 md:col-span-4 px-4 md:px-8 py-6 h-full bg-black bg-opacity-40 text-white flex items-center justify-center">
        <h2 class="text-2xl text-center font-bold mb-4">{{ blogpost.title }}</h2>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "blog-grid",
  components: {},
  props: {
    blogpost: {
      type: Object,
      required: true,
    },
    selectedIcons: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      isHovered: false,
    };
  },
  setup(props) {
    const supabase = useSupabaseClient();
    const auther = 'BlogPirat'
    let imageUrl = '/img/pirat_search.jpeg';
    if(props.blogpost.img_url) {
      try {
        const {data, error} = supabase.storage.from('BlogHeader').getPublicUrl(props.blogpost.img_url);
        imageUrl = data.publicUrl;
        if (error) {
          throw error;
        }

      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }
    console.log(imageUrl)
    return {
      auther,
      imageUrl,
    };
  },
  computed: {},
  mounted() {
  },
  methods: {},
}
</script>

<style scoped>
.h-144 {
  height: 144px;
}
.grayscale {
  filter: grayscale(100%);
}
.no-grayscale {
  filter: grayscale(0%);
}
</style>