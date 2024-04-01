<script setup lang="ts">
import ValidMessage from "~/components/validate/validMessage.vue";

const supabase = useSupabaseClient();
const name = ref('');
const comment = ref('');
const send = ref(false);
const errorMessage = ref([]);
const errortype = ref('');
const props = defineProps({
  blogid: {
    type: Number,
    required: true,
  },
});

const submitForm = async () => {
  try {
    errorMessage.value = [];
    errortype.value = '';
    if (name.value === '') {
      errorMessage.value.push('Bitte geben Sie Ihren Namen ein');
      errortype.value = 'validate';
    }
    if (comment.value === '') {
      errorMessage.value.push('Bitte geben Sie einen Kommentar ein');
      errortype.value = 'validate';
    }
    if (errortype.value === 'validate') {
      send.value = true;
      return;
    }
    // Hier können Sie die Logik für die Formularübermittlung hinzufügen
    console.log('Name:', name.value);
    console.log('Comment:', comment.value);
      supabase.from('blog_questbook').insert([
      {username: name.value, content: comment.value}
    ]).select('id').then((data) => {
      console.log(data);
        send.value = true;
        errortype.value = 'success';
        errorMessage.value = ['Posttaube erfolgreich gesendet'];
        //reset form
        name.value = '';
        comment.value = '';
    }).catch((error) => {
        errorMessage.value = [error.message];
        errortype.value = '';
        send.value = true;

        return;
    });
  } catch (error) {
    errorMessage.value = [error.message];
    errortype.value = '';
    send.value = true;
  }
};
</script>

<template>
  <div>
    <div>
      <h2 v-if="!send" class="text-2xl font-bold mb-4 mt-6">Eintrag schreiben:</h2>
      <div class="p-2 m-2">
        <valid-message v-if="send" :show="send" :message="errorMessage" :type="errortype" component="writeGuestbookComment" />
      </div>
      <div>
        <input v-model="name" type="text" placeholder="Name" class="border border-lightgray p-2 m-2 w-full" />
        <textarea v-model="comment" placeholder="Comment" class="border border-lightgray p-2 m-2 w-full"></textarea>
        <div class="w-full text-center">
          <button @click="submitForm" class="bg-orange text-white p-2 m-2">Absenden</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>