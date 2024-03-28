<script setup lang="ts">
const supabase = useSupabaseClient();
const showValidMessage = ref(true);
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  message: {
    type: Array,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  component: {
    type: String,
    required: true,
  },
});

if(props.type === ''){
  console.log(props.component)
  console.log(JSON.stringify(props.message));
  await supabase.from('blog_error_log').insert([
    {componente: props.component, error: JSON.stringify(props.message)}
  ]).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error.message);
  });
}

</script>

<template>
  <transition name="fade">
<div class="m-4 " v-if="showValidMessage">
  <div class="flex w-3/4 mx-auto border border-lightgray p-4 rounded-lg">
    <div class="mr-4">
    <nuxt-img src="/img/success.jpeg" alt="success" v-if="type === 'success'" width="96" class="rounded-full no-grayscale"/>
    <nuxt-img src="/img/error.jpeg" alt="error"  v-if="type === 'validate'" width="96" class="rounded-full no-grayscale"/>
    <nuxt-img src="/img/panic.jpeg" alt="panic"  v-if="type === ''" width="96" class="rounded-full no-grayscale"/>
    </div>
    <div class="w-full">
      <h4 class="text-xl font-bold " v-if="type === 'success'">Alles Super !</h4>
      <h4 class="text-xl w-full font-bold" v-if="type === 'validate'">Oh nein !</h4>
      <h4 class="text-xl w-full font-bold" v-if="type === ''" >Oh Sh*t ! </h4>
      <div class="trennline90 m-0"></div>
      <div class="mt-2">
      <p v-if="message?.length > 0 && type.length > 0">
        <ul>
          <li v-for="msg in message" :key="msg">{{ msg }}</li>
        </ul>
      </p>
      <p v-if="type === ''" class="">
          <b>Schiff geht unter</b> Alle Mann und Frau von Board!<br>
          <b>Kritischer Fehler</b>
      </p>
      </div>
    </div>
  </div>
</div>
    </transition>
</template>

<style scoped>
.fade{
  transition: opacity 0.5s;
}
</style>