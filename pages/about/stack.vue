<template>
  <div>
    <about-menu/>
    <div class="grid md:grid-cols-2">
      <div class="img-center">
        <nuxt-img src="/img/about-stack.png" alt="Stressed Pirate" class="h-max"
                  width="700"
                  format="webp" />
      </div>
      <div class="md:py-10 mx-4">
        <h1 class="text-3xl py-4 border-b border-b-lightgray">Tech-Stack</h1>
        <p class="py-4">
          Oh man,.. <br>
        </p>
        <p class="py-4 border-y border-y-lightgray text-center">
          <i>innerlicher Dialog</i><br>
          <b>Welche Technologien brauchst du um einen Blog zubauen ?</b><br>
          <b>JA...</b><br>
        </p>
        <p class="py-4">
          Also ich habe mich für folgende Technologien entschieden:<br><br>
          - Backend(Proxy): NestJS (NodeJS) <br>
          - Backend: Supabase (PostgreSQL) <br>
          - Frontend: NuxtJS (VueJS) <br>
          - CMS: VueJS <br>
          - Datenbanken: Meilisearch, Redis <br>
          - Lokale Entwicklungsumgebung: Docker <br>
          - CI/CD: Github Actions <br>
          - E2E Tests: Cypress <br>
          - Unit Tests: Vitese <br>
          - Linting: ESLint <br>
          - Codeformatierung: Prettier <br>
        </p>
        <p class="py-4">
          Man bedenke wir reden hier von einem Blog, der im höchsten Fall 2 Besucher pro Monat hat. <br>
          Total justified der Stack yo
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