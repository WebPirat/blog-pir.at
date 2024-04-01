<script setup lang="ts">
import WriteGuestbookComment from "~/components/guestbook/writeGuestbookComment.vue";

const supabase = useSupabaseClient()
const {data, error} = await supabase.from('projects').select('*').is('online', true).order('sort_order', {ascending: true})
const {data: meta, error: metaerror} = await supabase.from('blog_meta').select('*').eq('id', 4)
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
    <nuxt-img src="/img/guestbook.jpeg" alt="Letter" class="w-full rounded" width="330px" />
  </div>
  <div class="col-span-2">
    <write-guestbook-comment />
  </div>
  <div class="m-4 p-4 bg-black rounded text-white">
    <p class="mt-4">
      Das Ding hier ist ein Gästebuch, <br> zeigt wohl mein Alter :-)<br>
      Freu mich über jeden Eintrag, <br> aber bitte beachtet die Regeln:<br>
      <br>
      <ul class="list-disc list-inside text-orange">
        <li>Keine Werbung</li>
        <li>Kein Spam</li>
        <li>Keine Beleidigungen</li>
        <li>Keine Links</li>
      </ul>
      <br>
      Wollt ihr Privat mir was schreiben, dann nutzt bitte das <a href="/contact">Kontaktformular</a>.
    </p>
  </div>
</div>
    <div class="trennline90"></div>
    <div class="grid grid-cols-4 gap-4 mt-6">
      <div class="col-span-3">
        <div class="md:grid md:grid-cols-2 gap-1">
          <guestbook-entry/>
        </div>

      </div>
      <div class="p-4">
        <nuxt-img src="/img/guestbook2.jpeg" alt="Letter" class="w-full rounded" width="330px" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
