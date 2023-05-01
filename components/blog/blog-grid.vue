<template>
  <div class="rounded-lg shadow-xl h-full">
    <a :href="'/blog/' + blogpost.slug">
      <img v-if="blogpost.img" src="https://via.placeholder.com/400x250" alt="Blog post image" class="w-full h-auto object-cover">
      <img v-else src="/img/pirat_writing.jpeg" alt="Blog post image" class="w-full h-auto object-cover grayscale rounded-lg" style="max-height: 240px">
    </a>
    <div class="col-span-3 md:col-span-4 px-4 md:px-8 py-6 h-full">
      <h2 class="text-3xl font-bold mb-4">{{ blogpost.title }}</h2>
      <p class="text-gray-700 mb-4 h-144">{{blogpost.content.slice(0, 220)}}</p>
      <a :href="'/blog/' + blogpost.slug" class="text-blue-600 hover:text-blue-800">Read more &rarr;</a>
    </div>
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
  },
  data() {
    return {};
  },
  setup() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>

<style scoped>
.h-144 {
  height: 144px;
}
</style>