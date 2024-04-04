<template>
  <div class="mx-auto border border-black rounded w-full p-4 m-4 overflow-hidden shiki-container">
  <Shiki :lang="lang" :code="codeclean"  />
  </div>
</template>
<script setup>
const props = defineProps(['code'])
const lang = ref('')
const codeclean = ref('') 
console.log(props.code);
// Finde die Position des ersten Leerzeichens
var firstSpaceIndex = props.code.indexOf('\n');

// Wenn ein Leerzeichen gefunden wurde, splitten den String
if (firstSpaceIndex !== -1) {
    lang.value = props.code.substring(0, firstSpaceIndex); // Teil vor dem Leerzeichen
    codeclean.value = props.code.substring(firstSpaceIndex + 1); // Teil nach dem Leerzeichen
} else {
    console.log("Kein Leerzeichen gefunden.");
}
</script>
<<style scoped>
.shiki-container{
  max-width: 700px;
}
</style>
