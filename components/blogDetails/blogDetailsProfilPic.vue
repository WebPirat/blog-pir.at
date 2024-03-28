<script setup lang="ts">
const supabase = useSupabaseClient()
const { data: profilePics, error } = await supabase.storage.from('BlogProfile').list()
const last10pics = ref([])
//get a random profile pic
function getRandomPic(profilePics) {
  const randomProfilePic = profilePics[Math.floor(Math.random() * profilePics.length)]
  if (!last10pics.value.includes(randomProfilePic.name)) {
    if(last10pics.value.length > 10){
      last10pics.value.shift()
    };
    last10pics.value.push(randomProfilePic.name)
    console.log(last10pics.value)
    return randomProfilePic
  }else{
    return getRandomPic(profilePics)
  }
}
const randomProfilePic = getRandomPic(profilePics)
const profilePicUrl = await supabase.storage.from('BlogProfile').getPublicUrl(randomProfilePic.name)
const profilePic = profilePicUrl.data.publicUrl
</script>

<template>
 <nuxt-img :src="profilePic" alt="profile pic" width="48" height="48" class="rounded-full no-grayscale" />
</template>

<style scoped>

</style>