<template>
  <div>
    <Head>
      <Title>{{meta[0].title}}</Title>
      <Meta name="description" :content="meta[0].description"/>
      <Meta name="og:url" :content="meta[0].url" />
      <Meta name="og:image" :content="headerimg.publicUrl" />
    </Head>
    <div>
      <div class="grid grid-cols-3">
        <div>
        <blog-header-blogsearch :posts="allTitles" @selected:blog="filterBlog"/>
          </div>
        <div>
        <pagination :pages="Page"  @pageClick="filterPagination"></pagination>
        </div>
        <div>
          <blog-header :icons="uniqueIcons" @selected:cat="filterSelect"/>
        </div>
      </div>
    </div>
  <div class="md:grid md:grid-cols-4 gap-4">
      <transition-group name="fade">
        <div v-for="(blogpost, index) in blogposts.slice(startItem,maxItems)" :key="blogpost.id">
            <blog-grid class="blogpost" :blogpost="blogpost" :selectedIcons="selectedIcons"></blog-grid>
        </div>
      </transition-group>
  </div>

  </div>
</template>

<script>
import BlogStartseite from "~/components/index/Blog-Startseite.vue";
import BlogGrid from "../../components/blog/blog-grid.vue";
import Pagination from "~/components/menu/pagination.vue";

export default defineNuxtComponent ({
  components: {
    Pagination,
    BlogGrid,
    BlogStartseite
  },
  data() {
    return {
      selectedIcons: [],
      startItem: 0,
      maxItems: 8,
      Page:5
    };
  },
  methods: {
    filterBlog(blogId) {
      console.log(blogId)
     if(blogId === null) {
       this.blogposts = this.allBlogposts;
       return;
     }
      this.blogposts = this.allBlogposts.filter(blogpost => blogpost.id === blogId);
    },
    filterSelect(iconIds) {
      this.selectedIcons = iconIds;
      // Zählt die Übereinstimmungen für jeden Blogpost
      let blogPostMatches = this.blogposts.map(blogpost => {
        let matchCount = 0;
        blogpost.icons.forEach(icon => {
          if (iconIds.includes(icon.iID.id)) {
            matchCount++;
          }
        });
        return { ...blogpost, matchCount };
      });

      // Sortiert die Blogposts basierend auf den Übereinstimmungen
      blogPostMatches.sort((a, b) => b.matchCount - a.matchCount);

      // Setzt die sortierten Blogposts
      this.blogposts = blogPostMatches;
    },
    calculatePages() {
      this.Page = Math.ceil(this.blogposts.length / this.maxItems);
    },
  filterPagination(page) {
    this.blogposts = this.allBlogposts.slice((page - 1) * this.maxItems, page * this.maxItems);
  }
  },
  async setup() {
    const blogposts = ref([]);
    const allBlogposts = ref([]);
    const config = useRuntimeConfig();
    const loaded = ref([]);
    const supabase = useSupabaseClient()

    let { data: blog_posts, error } = await supabase
        .from('blog_posts')
        .select('*, icons: blog_poststocat(iID: blog_icons(*))')
        .lte('online_at', new Date().toISOString())
        .order('online_at', {ascending: false})

    // Erstellt ein Array mit allen Icons
    let allIcons = [];
    let allTitles = [];
    for(let i = 0; i < blog_posts.length; i++) {
      allTitles.push({
        id:blog_posts[i].id,
        title:blog_posts[i].title
      });
      for(let j = 0; j < blog_posts[i].icons.length; j++) {
        allIcons.push(blog_posts[i].icons[j].iID);
      }
    }

    // Entfernt Duplikate basierend auf dem Namen des Icons
    let uniqueIcons = allIcons.filter((icon, index, self) =>
            index === self.findIndex((t) => (
                t.name === icon.name
            ))
    );

    // Sortiert die eindeutigen Icons nach Namen
    uniqueIcons.sort((a, b) => a.name.localeCompare(b.name));

    blogposts.value = blog_posts
    allBlogposts.value = blog_posts

    const {data: meta, error: metaerror} = await supabase.from('blog_meta').select('*').eq('id', 3)
    const {data: headerimg} = await supabase.storage.from('BlogMeta').getPublicUrl(meta[0].image)



    return {
      allBlogposts,
      blogposts,
      uniqueIcons,
      allTitles,
      meta,
      headerimg
    };
  },
  created() {
    this.calculatePages();
  },
});
</script>

<style scoped>

</style>
