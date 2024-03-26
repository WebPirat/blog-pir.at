<template>
  <div class="flex justify-center">
    <ul class="flex list-none" v-if="pages > 0">
      <li @click="decrementPage" class="mx-1 p-2 cursor-pointer">
        Zurück
      </li>
      <li v-for="page in pages" :key="page" @click="emitPageNumber(page)"
          class="mx-1 p-2 cursor-pointer"
          :class="{ 'bg-orange rounded text-white': page === currentPage }">
        {{ page }}
      </li>
      <li @click="incrementPage" class="mx-1 p-2 cursor-pointer">
        Weiter
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pages: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    emitPageNumber(page) {
      this.currentPage = page;
      this.$emit('pageClick', page);
    },
    incrementPage() {
      if (this.currentPage < this.pages) {
        this.emitPageNumber(this.currentPage + 1);
      }
    },
    decrementPage() {
      if (this.currentPage > 1) {
        this.emitPageNumber(this.currentPage - 1);
      }
    }
  }
}
</script>

<style scoped>
/* Add any necessary styling */
</style>