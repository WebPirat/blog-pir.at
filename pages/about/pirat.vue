<template>
  <div>
    <about-menu/>
    <div class="grid md:grid-cols-2">
      <div class="img-center"><img src="/img/pirat.png" class="h-max"></div>
      <div class="md:py-10 mx-4">
        <h1 class="text-3xl py-4 border-b border-b-lightgray">Wie kahm es zu dem Pirat?</h1>
        <p class="py-4">
          Die Geschichte, die ich Ihnen erzählen möchte, ist eher einfach und schnell, aber ich teile sie gerne mit Ihnen. Ich war auf der Suche nach einem bekannten Synonym, das oft mit einem "Handicap" oder einem Außenseiter in Verbindung gebracht wird, der jedoch nicht als "Opfer" dargestellt wird und seinen eigenen Weg geht. Dabei fielen mir viele Parallelen zu meinem eigenen Leben auf.
        </p>
        <p class="py-4 border-y border-y-lightgray text-center">
          <b>Ich fand den Piraten und dachte mir das passt. <br>Ich bin ein Aussenseiter, ich bin ein Pirat. Ich bin ein Blogpirat.<br></b>
          <i>- Git Co-Pilot 2023</i>
        </p>
        <p class="py-4">
          Ernsthaft jetzt, der Pirat mit seinem Haken hat mir gefallen und ich dachte darüber nach, was besser zu mir passen könnte als ein Haken. Ich entschied mich für eine USB-Hand. Dann habe ich einen künstlerisch begabten Freund gefragt und so entstand der "Blogpirat". Es war ein Glücksfall, dass die Domain noch frei war, und es war ein weiterer Glücksfall, dass sie auf ".at" endet, da ich aus Österreich komme.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AboutMenu from "../../components/about-menu";
export default {
  name: "pirat",
  components: {AboutMenu}
}
</script>

<style scoped>

</style>