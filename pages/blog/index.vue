<template>
  <div class="md:grid md:grid-cols-4 gap-4">
      <transition-group name="fade">
        <div v-for="(blogpost, index) in blogposts" :key="blogpost.id">
          <div v-if="loaded[index]">
            <blog-grid class="blogpost" :blogpost="blogpost"></blog-grid>
          </div>
        </div>
      </transition-group>
  </div>
</template>

<script>
import BlogStartseite from "@/components/index/Blog-Startseite";
import BlogGrid from "../../components/blog/blog-grid";

export default {
  components: {
    BlogGrid,
    BlogStartseite
  },
  data() {
    return {
      loaded: []
    };
  },
  setup() {
    const blogposts = ref([]);
    const config = useRuntimeConfig();
    const loaded = ref([]);

    fetch(config.public['proxyUrl'] + '/blog')
        .then(response => response.json())
        .then(data => {
          blogposts.value = data
        })
        .catch(error => console.error(error));

    return {
      blogposts
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