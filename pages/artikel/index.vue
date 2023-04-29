<template>
  <div class="container mx-auto py-10">
    <h1 class="text-4xl font-bold mb-10">Neueste Artikel</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Artikel-Card -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://picsum.photos/id/10/600/400" alt="Artikelbild" class="w-full h-64 object-cover">
        <div class="p-6">
          <h2 class="text-lg font-bold mb-2">Artikel-Titel</h2>
          <p class="text-gray-600 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ratione!</p>
          <a href="#" class="block mt-4 text-lg font-semibold text-blue-600 hover:text-blue-800">Weiterlesen</a>
        </div>
      </div>

      <!-- Artikel-Card -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://picsum.photos/id/20/600/400" alt="Artikelbild" class="w-full h-64 object-cover">
        <div class="p-6">
          <h2 class="text-lg font-bold mb-2">Artikel-Titel</h2>
          <p class="text-gray-600 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ratione!</p>
          <a href="#" class="block mt-4 text-lg font-semibold text-blue-600 hover:text-blue-800">Weiterlesen</a>
        </div>
      </div>

      <!-- Artikel-Card -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://picsum.photos/id/30/600/400" alt="Artikelbild" class="w-full h-64 object-cover">
        <div class="p-6">
          <h2 class="text-lg font-bold mb-2">Artikel-Titel</h2>
          <p class="text-gray-600 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ratione!</p>
          <a href="#" class="block mt-4 text-lg font-semibold text-blue-600 hover:text-blue-800">Weiterlesen</a>
        </div>
      </div>

      <!-- weitere Artikel-Cards hier... -->

    </div>
  </div>
</template>

<script>
export default {
  name: "blog"
}
</script>

<style scoped>

</style>