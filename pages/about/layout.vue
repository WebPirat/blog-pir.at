<template>
  <div>
    <about-menu/>
    <div class="grid md:grid-cols-2">
      <div class="img-center">
        <nuxt-img src="/img/about-layout.png" alt="Stressed Pirate" class="h-max"
                  width="650"
                  format="webp" />
      </div>
      <div class="md:py-10 mx-4">
        <h1 class="text-3xl py-4 border-b border-b-lightgray">Layout</h1>
        <p class="py-4">
          Zunächst einmal möchte ich betonen, dass dies nicht das endgültige Layout ist, sondern das Layout, mit dem ich beginnen möchte. Ich fand das Rahmendesign ansprechend, weil es eine gewisse Herausforderung darstellt und auch symbolisch zu meinem Vorhaben passt. <br> Der Rahmen bietet mir eine Struktur, in der ich mich bewegen und entfalten kann.
          <br><br>
          Weitere Gründe für die Wahl dieses Layouts sind:
        </p>
        <div class="p-4 border-y border-y-lightgray">
          <ul>
            <li> Schaffen von "Rahmenbedingungen". (Wortspiel herrlich...)</li>
            <li>Vermeiden von Scrollbalken auf Desktops.</li>
            <li>Üben von Tailwind, insbesondere im Hinblick auf das mobile Design.</li>
          </ul>
        </div>
        <p class="py-4">
          Ich finde die Idee eines "Rahmen-Layouts" ansprechend und hoffe, dass es mir gelingt, es so zu gestalten, dass es nicht zu langweilig wirkt. Im Laufe der Zeit plane ich, Farben und das Design zu ändern, um es interessant zu halten. Zudem möchte ich die Flexibilität haben, verschiedene Layouts zu testen, ohne das gesamte Design zu ändern.
          <br><br>
          Ich bin gespannt, wie viele Features ich in den Mainframe einbauen kann.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AboutMenu from "../../components/about-menu";
export default {
  name: "about-layout",
  components: {AboutMenu}
}
</script>

<style scoped>
ul {
  list-style-type: square;
}
</style>