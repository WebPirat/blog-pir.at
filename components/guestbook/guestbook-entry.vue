<script setup lang="ts">
//@ts-nocheck
import type { RealtimeChannel } from '@supabase/supabase-js'

const comments = ref([]);
const client = useSupabaseClient()

let realtimeChannel: RealtimeChannel

const { data: blog_comments, refresh: refreshComments } = await useAsyncData('comments', async () => {
  //@ts-ignore
  const { data } = await client.from('blog_questbook').select('*').is('online', true).order('created_at', {ascending: false})
  return data
})

comments.value = blog_comments

onMounted(() => {
  //@ts-ignore
  realtimeChannel = client.channel('custom-filter-channel')
      .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'blog_questbook'},
          () => refreshComments()
      )
  realtimeChannel.subscribe()
})

onUnmounted(() => {
  client.removeChannel(realtimeChannel)
})
const{$formatDate  } = useNuxtApp()

</script>

<template>
    <div v-for="yolo in comments.value" :key="yolo.id" class="border border-lightgray p-4 m-4">
      <div class="flex items-center">
        <div class="w-12 h-12 bg-lightgray rounded-full mr-4">
          <blog-details-profil-pic />
        </div>
        <div class="text-black">
          <p class="font-bold">{{ yolo.username }}</p>
          <p class="text-xs ">{{ $formatDate(yolo.created_at, 'HH:mm dd.MM.yyyy') }}</p>
        </div>
      </div>
      <p class="mt-2">{{ yolo.content }}</p>
    </div>
</template>

<style scoped>

</style>
