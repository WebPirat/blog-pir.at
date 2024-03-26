<script lang="ts">
import {defineComponent} from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default defineComponent({
  name: "blog-grid-header",
  components: {FontAwesomeIcon},
  props: {
    blogicons: {
      type: Object,
      required: true
    },
    selectedIcons: {
      type: Array,
      required: false
    }
  },
  setup(props) {
    const icons = ref([]);
    for(let i = 0; i < props.blogicons.length; i++) {
      icons.value.push({
        id: props.blogicons[i].iID.id,
        name: props.blogicons[i].iID.name,
        icon: props.blogicons[i].iID.icon,
        description: props.blogicons[i].iID.description
      })
    }
    return {
      icons
    };
  }
})
</script>

<template>
  <div class="flex justify-center items-center space-x-2">
    <div v-for="(icon, index) in icons" :key="icon.id">
      <ClientOnly>
        <font-awesome-icon :icon="icon.icon" class="text-1xl mr-1" :class="{ 'text-orange': selectedIcons.includes(icon.id) }" :title="icon.description" />
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
.highlighted {
  color: #ff0000; /* Oder jede andere Farbe, die Sie bevorzugen */
}
</style>