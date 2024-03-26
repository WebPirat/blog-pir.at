<template>
  <div class="mb-2">
        <multiselect
            id="sites"
            v-model="sites"
            :options="icons"
            :multiple="true"
            placeholder="Kategorie auswählen"
            track-by="id"
            label="name">
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
    icons: {
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
        if (!newValue) {
          return
        }
        let ids = newValue.map(icon => icon.id);
        this.$emit('selected:cat', ids);
      },
      immediate: true
    }
  },
}
</script>