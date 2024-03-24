<template>
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
        <img v-if="blog.img" src="https://via.placeholder.com/400x250" alt="Blog post image" class="w-full h-auto object-cover">
        <img v-else src="/img/pirat_writing.jpeg" alt="Blog post image" class="w-full h-auto object-cover grayscale rounded-lg">
        <div class="p-2 text-center">Posted on {{ formatDate(blog.created_at) }} by {{ blog.author }}</div>
      </div>
      <div class="blog-blog col-span-2">
        <h2 class="text-3xl font-bold mb-4 border-b border-b-lightgray pb-2">{{ blog.title }}</h2>
        <div v-html="blog.content"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Blog-Detail",
  data() {
    return {
      blog: [],
      loaded: false,
      loader: true,
    };
  },
  mounted() {
    const data = new URLSearchParams();
    const config = useRuntimeConfig();
    console.log(config.public['proxyUrl'])
    data.append('slug', this.slug);

    fetch(config.public['proxyUrl'] + '/blogslug',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    })
        .then(response => response.json())
        .then(data => {
          this.blog = data;
          this.loader = false;
          setTimeout(() => {
            this.loaded = true;
          }, 900);
        })
        .catch(error => {
          console.error(`Error bloging slug: ${error}`);
        });
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
  setup() {
    const route = useRoute()
    const slug = ref(route.params.slug)
    return {
      slug
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