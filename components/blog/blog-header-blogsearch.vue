<template>
  <div class="mb-2">
        <multiselect
            id="sites"
            v-model="sites"
            :options="posts"
            :multiple="false"
            placeholder="Beitrag suchen"
            track-by="id"
            label="title">
        </multiselect>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
  components: {
    Multiselect
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      sites: null,
      siteOptions: []
    }
  },
  mounted () {
  },
  watch: {
    sites: {
      handler (newValue) {
        console.log(newValue)
        if (!newValue) {
          this.$emit('selected:blog', null);
          return null
        }

        this.$emit('selected:blog', newValue.id);
      },
      immediate: true
    }
  },
}
</script>