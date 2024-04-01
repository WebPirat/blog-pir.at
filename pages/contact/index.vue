<script setup lang="ts">
import WriteGuestbookComment from "~/components/guestbook/writeGuestbookComment.vue";
import WriteContact from "~/components/contact/writeContact.vue";

const supabase = useSupabaseClient()
const {data, error} = await supabase.from('projects').select('*').is('online', true).order('sort_order', {ascending: true})
const {data: meta, error: metaerror} = await supabase.from('blog_meta').select('*').eq('id', 2)
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

</script>

<template>
  <div>
<div class="md:grid md:grid-cols-4 gap-4">
  <div class="p-4">
    <nuxt-img src="/img/letter.jpeg" alt="Letter" class="w-full rounded"  width="330px"/>
  </div>
  <div class="col-span-2">
    <write-contact />
  </div>
  <div class="m-4 p-4 bg-black rounded text-white">
<p class="mt-4">
  Ihr könnt mich über dieses Formular erreichen wenn du direkt Kontakt aufnehmen willst hätte ich noch:<br>
  <br>
  <ul class="list-inside text-orange">
    <li><a href="mailto:flaschenpost@blog-pir.at"> <font-awesome-icon :icon="['fas', 'envelope']" /> flaschenpost[at]blog-pir.at</a></li>
    <li><a href="https://discord.gg/gDnYyvGjDJ"><font-awesome-icon :icon="['fab', 'discord']" /> Discord Server</a> </li>
  </ul>
  <br>
  anzu bieten.</p>
  </div>
</div>
    <div class="trennline90"></div>
  </div>
</template>

<style scoped>

</style>
