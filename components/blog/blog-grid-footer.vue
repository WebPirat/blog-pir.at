<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "blog-grid-footer",
  props: {
    postdate: {
      type: String,
      required: true
    },
    author: {
      type: String,
    }
  },
  setup(props) {
    //transform date
    const date = new Date(props.postdate);
    let author = 'BlogPirat'
    // dateformat to dd.mm.yyyy
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;

    if(props.author) {
     author = props.author
    }

    return {
      postdate: formattedDate,
      author
    }
  }
})
</script>

<template>
  <div>
    <div class="grid grid-cols-2 text-sm">
      <div>{{postdate}}</div>
      <div class="text-right">{{author}}</div>
    </div>
  </div>
</template>

<style scoped>

</style>