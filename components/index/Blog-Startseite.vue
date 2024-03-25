<template>
  <div class="max-w-6xl mx-auto my-2 rounded-lg overflow-hidden shadow-xl">
    <div class="flex flex-wrap items-center justify-between">
      <div class="w-full md:w-1/2 lg:w-1/3 overflow-hidden">
        <a :href="'/blog/' + blogpost.slug">
          <img v-if="blogpost.img" src="https://via.placeholder.com/400x250" alt="Blog post image" class="w-full h-auto object-cover">
          <img v-else src="/img/pirat_search_overview.webp" alt="Blog post image" class="w-full h-auto object-cover grayscale" style="max-height: 240px">
        </a>
      </div>
      <div class="w-full md:w-1/2 lg:w-2/3 px-4 md:px-8 py-6">
        <h2 class="text-2xl font-bold mb-4">{{ blogpost.title }}</h2>
        <p class="text-gray-700 mb-4">{{blogpost.content.slice(0, 150)}}</p>
        <div class="text-right mr-10">
          <a :href="'/blog/' + blogpost.slug" class="bg-lightgray p-2 text-white">mehr lesen &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  async setup() {
    const supabase = useSupabaseClient();

    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>

<style scoped>

</style>