<template>
  <transition name="fade">
    <div v-if="loaded" className="blogpost-transition">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    // Setzen Sie loaded auf true, sobald die Komponente vollständig geladen ist
    this.loaded = true;
  }
}
</script>

<style scoped>
.blogpost-transition {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>