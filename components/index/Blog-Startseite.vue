<template>
  <div class="max-w-6xl mx-auto my-2 rounded-lg overflow-hidden shadow-xl max-h-[230px]">
    <div class="flex flex-wrap items-center justify-between">
      <div class="w-full md:w-1/2 lg:w-1/3 overflow-hidden">
        <a :href="'/blog/' + blogpost.slug">
          <nuxt-img :src="imageUrl"
                    width="250"
                    format="webp"
                    alt="Blog post image"
                    class="w-full h-auto object-cover grayscale"
                    />
        </a>
      </div>
      <div class="w-full md:w-1/2 lg:w-2/3 px-4 md:px-8 py-6">
        <h2 class="text-2xl font-bold mb-4">{{ blogpost.title }}</h2>
        <p class="text-gray-700 mb-4">{{blogpost.content.slice(0, 150)}}</p>
        <div class="text-right mr-10">
          <a :href="'/blog/' + blogpost.slug" class="bg-orange rounded p-2 text-white">mehr lesen &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineProps } from 'vue';
export default {
  name: "Blog-Startseite",
  components: {},
  props: {
    blogpost: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  async setup(props) {
    const supabase = useSupabaseClient();
    let imageUrl = '/img/pirat_search.jpeg';;
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
    return {
      imageUrl,
    };
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>

<style scoped>

</style>