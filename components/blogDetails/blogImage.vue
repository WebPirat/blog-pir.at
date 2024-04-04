<<template>
  <div class="img-container p-4 m-4 ">
    <nuxt-img :src="src" class="no-grayscale" />
  </div>
</template>
<script setup>
const props = defineProps(['src'])
</script>
<style scoped>
.img-container {
  display: flex;
  justify-content: center;
}
.img-container img {
  max-width: 700px;
  max-height: auto;
}
</style>
