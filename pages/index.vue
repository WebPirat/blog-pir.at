<template>
  <div class="md:grid md:grid-cols-2">
    <div class="hidden md:block mx-auto"><img class="h-[750px]" src="/img/pirat_run_angry.png"></div>
    <div class="background-image">
      <img src="/img/papagei.png" class="hidden md:block z-0 absolute right-10 top-100">
      <transition-group name="fade">
        <div v-for="(blogpost, index) in blogposts" :key="blogpost.id">
          <div v-if="loaded[index]">
            <blog-startseite class="blogpost" :blogpost="blogpost"></blog-startseite>
          </div>
        </div>
      </transition-group>
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
  setup() {
    const blogposts = ref([]);
    const config = useRuntimeConfig();
    const loaded = ref([]);

    fetch(config.public['proxyUrl'] + '/blogdb')
        .then(response => response.json())
        .then(data => {
          blogposts.value = data.slice(0, 3); // Hier werden nur die ersten drei Blogposts ausgewählt
          loaded.value = new Array(blogposts.value.length).fill(false);
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