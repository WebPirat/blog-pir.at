<template>
  <div>
    <template v-for="(item, index) in parsedContent" :key="index">
      <template v-if="item.type === 'text'">
        <div v-html="replaceLinks(item.content)"></div>
      </template>
      <blog-image v-else-if="item.type === 'image'" :src="item.content" alt="Image" />
      <blog-image-gallery v-else-if="item.type === 'group'" :src="item.content" alt="Image" />
      <blog-highlight v-else-if="item.type === 'code'" :code="item.content" />
    </template>
  </div>
</template>

<script>
import BlogHighlight from './blogHighlight.vue';
import BlogImage from './blogImage.vue';
import BlogImageGallery from './blogImageGallery.vue';

export default {
  components: {
    BlogHighlight,
    BlogImage,
    BlogImageGallery
  },
  props: {
    contentString: String
  },
  computed: {

parsedContent() {
  
  const regex = /((?:https?:\/\/[^\s]+(?:\.jpg|\.jpeg|\.png|\.gif|\.bmp))|(?:```[^]+?```)|(?:\[[^\]]+?\]))/g;
  const imgExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
  const parts = this.contentString.split(regex);
  console.log(parts); 
  return parts.map(part => {
    if (part.match(/^https?:\/\/[^\s]+$/)) {
      const isImage = imgExtensions.some(extension => part.endsWith(extension));
      return {
        type: isImage ? 'image' : 'link',
        content: part
      };
    } else if (part.match(/^```[^]+?```$/)) {
      return {
        type: 'code',
        content: part.slice(3, -3) // slice, um die ``` zu entfernen
      };
    } else if (part.match(/^\[[^\]]+?\]$/)) {
      return {
        type: 'text',
        content: part
      };
    } else {
      return {
        type: 'text',
        content: part
      };
    }
  });
}



  },
  methods: {
    replaceLinks(text) {
      const regex = /(https?:\/\/[^\s]+)/g;
      return text.replace(regex, '<a :href="$1">$1</a>');
    }
  }
};
</script>
