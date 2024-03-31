<template>
  <div class="carousel-container">
    <div class="carousel">
      <div v-for="(image, index) in images" :key="index" :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
           class="carousel-item">
        <nuxt-img height="300px":src="image.url" alt="Slide" class="w-full rounded" />
      </div>
    </div>
    <div v-if="images.length > 1">
    <button @click="prevSlide" class="prev">&#10094;</button>
    <button @click="nextSlide" class="next">&#10095;</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectID: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  async setup(props) {
    const supabase = useSupabaseClient();
    const images = ref([]);
    console.log(props.projectID)
    const { data, error } = await supabase.storage.from('projects').list(props.projectID);
    console.log(data)
    if (error) {
      console.error('Fehler beim Laden der Bilder:', error);
      return {
        error: 'Fehler beim Laden der Bilder',
      };
    }
    //get the public url for each image
    for (let i = 0; i < data.length; i++) {
      let { data: urlData, error: urlError } = await supabase.storage.from('projects').getPublicUrl('/'+props.projectID+'/'+data[i].name);
      images.value.push({
        url: urlData.publicUrl,
        alt_description: data[i].name,
      });
    }


    console.log(images.value)
    return {
      images: images.value,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  overflow: hidden;
  height: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel {
  display: flex;
}
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel {
  display: flex;
  transition: transform 0.3s ease;
}

.carousel-item {
  flex: 0 0 100%;
  transition: transform 0.5s ease;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}
</style>
