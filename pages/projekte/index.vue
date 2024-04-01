<script setup lang="ts">
const projects = ref([])

const supabase = useSupabaseClient()
const {data, error} = await supabase.from('projects').select('*').is('online', true).order('sort_order', {ascending: true})
const {data: meta, error: metaerror} = await supabase.from('blog_meta').select('*').eq('id', 1)
const {data: headerimg} = await supabase.storage.from('BlogMeta').getPublicUrl(meta[0].image)

useSeoMeta({
  title: meta[0].title,
  description: meta[0].description,
  ogTitle: meta[0].title,
  ogDescription: meta[0].description,
  ogImage: headerimg.publicUrl,
  ogUrl: meta[0].url,
  twitterTitle: meta[0].title,
  twitterDescription: meta[0].description,
  twitterImage: headerimg.publicUrl,
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})

projects.value = data
</script>

<template>
  <div>
    <div v-for="(project, index) in projects" :key="project.id" class="md:grid md:grid-cols-3">
      <!-- Bild oder Inhalt, abhängig vom Index -->
      <template v-if="index % 2 === 0">
        <!-- Bild -->
        <div class="flex p-4 m-4 justify-center col-span-1">
          <img-gallery :projectID="project.id"/>
        </div>
        <!-- Inhalt -->
        <div class="col-span-2 p-4 m-4">
          <div class="border border-lightgray h-full p-4">
            <div class="text-2xl font-bold mb-4 py-2">{{ project.title }}</div>
            <div class="md:grid md:grid-cols-2">
              <div class="md:grid md:grid-cols-2">
                <div class="text-xl font-bold">Eckdaten:</div>
                <div class=""></div>
                <div v-for="(value, key) in project.short_data" :key="key">
                  <div v-if="Array.isArray(value)">
                    <div class="font-bold">{{ key }}:</div>
                    <ul>
                      <li v-for="item in value" :key="item">{{ item }}</li>
                    </ul>
                  </div>
                  <div v-else>
                    <div class="font-bold">{{ key }}:</div>
                    <div>{{ value }}</div>
                  </div>
                </div>
              </div>
              <div v-html="project.content"></div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <!-- Inhalt -->
        <div class="col-span-2 p-4 m-4">
          <div class="border border-lightgray h-full p-4">
            <div class="text-2xl font-bold mb-4 py-2">{{ project.title }}</div>
            <div class="md:grid md:grid-cols-2">
              <div class="md:grid md:grid-cols-2">
                <div class="text-xl font-bold">Eckdaten:</div>
                <div class=""></div>
                <div v-for="(value, key) in project.short_data" :key="key">
                  <div v-if="Array.isArray(value)">
                    <div class="font-bold">{{ key }}:</div>
                    <ul>
                      <li v-for="item in value" :key="item">{{ item }}</li>
                    </ul>
                  </div>
                  <div v-else>
                    <div class="font-bold">{{ key }}:</div>
                    <div>{{ value }}</div>
                  </div>
                </div>
              </div>
              <div v-html="project.content"></div>
            </div>
          </div>
        </div>
        <!-- Bild -->
        <div class="flex p-4 m-4 justify-center col-span-1">
          <img-gallery :projectID="project.id"/>
        </div>
      </template>
    </div>
  </div>
</template>



<style scoped>

</style>
