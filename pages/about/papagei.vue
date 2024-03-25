<template>
  <div>
    <about-menu/>
    <div class="grid md:grid-cols-2">
      <div class="img-center">
        <nuxt-img src="/img/about-papagei.png" alt="Papagei" class="h-max"
                  width="500"
                  format="webp"
        />
      </div>
      <div class="md:py-10 mx-4">
        <h1 class="text-3xl py-4 border-b border-b-lightgray">Der Papagei</h1>
        <p class="py-4">
          Ich muss hier etwas weiter ausholen: Der Künstler hat den Papagei ursprünglich als Accessoire auf einem Bild platziert, mit der Zeit wurde er jedoch immer präsenter und es gab mehrere Layouts und Varianten der Seiten, auf denen er zu sehen war. Heute hat der Papagei für mich eine gewisse Symbolik. Er repräsentiert Personen oder Institutionen, die mich in meinem Leben begleitet haben und Dinge nachplappern, die sie nicht verstehen können, wie zum Beispiel das Leben mit einer Behinderung, Armut oder sozialer Isolation.
        </p>
        <p class="py-4 text-center border-y border-y-lightgray">
          <b>gehst halt a bissl spazieren, isst a bissl Gemüse und hörst auf zu rauchen <br> dann wird das alles schon wieder</b>
          <br><i>Sammlung sinnvoller Ratschläge</i>
        </p>
        <p class="py-4">
          Natürlich sind das hauptsächlich Leute, die kaum eigene Erfahrungen mit diesen Themen und Problemen haben oder die Kombination aus beidem nicht kennen. Beruflich steht er auch für die ganzen IT-Experten, die angeblich alles wissen und können - was oft mit einer Prise Ironie gemeint ist. Wenn die Arbeit zufriedenstellend erledigt wird, ist es eine gemeinschaftliche Leistung <br> (Wir-Leistung), aber wenn es nicht geklappt hat, wird es oft als "Ihr Fehler" dargestellt.
        </p>
      </div>
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