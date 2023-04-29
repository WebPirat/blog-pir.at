<template>
  <div>
    <about-menu/>
    <div class="grid md:grid-cols-2">
      <div><img src="/img/portrait.png"></div>
    </div>
  </div>
</template>

<script>
import AboutMenu from "../../components/about-menu";
export default {
  name: "papagei",
  components: {AboutMenu}
}
</script>

<style scoped>

</style>