<template>
  <div>
  <about-menu/>
    <div class="grid md:grid-cols-2">
      <div class="img-center"><img src="/img/portrait.png" class="h-max"></div>
      <div class="md:py-10 mx-4">
        <h1 class="text-3xl py-4">Steckbrief</h1>
        <div class="border-y border-y-lightgray py-4">
          <div class="grid grid-cols-2 gap-2">
            <div class="font-bold">Name:</div>
            <div>Dieter</div>
            <div class="font-bold">Alter:</div>
            <div>36</div>
            <div class="font-bold">Wohnort:</div>
            <div>Steyr (Österreich)</div>
            <div class="font-bold">Familiestand:</div>
            <div>Ich starte einen Techblog...</div>
            <div class="font-bold">Hobbys:</div>
            <div>Internet <br> Web-Entwicklung <br> Gaming <br> Anime (schock lass nach) <br>KDrama & chinesisches Serien/Filme </div>
          </div>
        </div>
        <p class="py-4">
          Um es kurz und knapp zu sagen: Ich habe eine linksseitige Hemiparese, was bedeutet, dass ich körperlich beeinträchtigt bin. Im Alltag ist dies zwar nicht immer offensichtlich, aber es stellt mich vor einige Herausforderungen.<br>
          Letztendlich führte diese Beeinträchtigung dazu, dass ich viel Zeit am Computer verbringe - und schließlich zu diesem Blog hier gekommen bin :)
        </p>

      </div>
    </div>
  </div>
</template>

<script>
import AboutMenu from "../../components/about-menu";
export default {
  name: "author",
  components: {AboutMenu}
}
</script>

<style scoped>

</style>