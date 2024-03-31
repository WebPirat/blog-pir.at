<script setup lang="ts">
import WriteGuestbookComment from "~/components/guestbook/writeGuestbookComment.vue";
</script>

<template>
  <div>
<div class="md:grid md:grid-cols-4 gap-4">
  <div class="p-4">
    <nuxt-img src="/img/guestbook.jpeg" alt="Letter" class="w-full rounded" width="330px" />
  </div>
  <div class="col-span-2">
    <write-guestbook-comment />
  </div>
  <div class="m-4 p-4 bg-black rounded text-white">
    <p class="mt-4">
      Das Ding hier ist ein Gästebuch, <br> zeigt wohl mein Alter :-)<br>
      Freu mich über jeden Eintrag, <br> aber bitte beachtet die Regeln:<br>
      <br>
      <ul class="list-disc list-inside text-orange">
        <li>Keine Werbung</li>
        <li>Kein Spam</li>
        <li>Keine Beleidigungen</li>
        <li>Keine Links</li>
      </ul>
      <br>
      Wollt ihr Privat mir was schreiben, dann nutzt bitte das <a href="/contact">Kontaktformular</a>.
    </p>
  </div>
</div>
    <div class="trennline90"></div>
    <div class="grid grid-cols-4 gap-4 mt-6">
      <div class="col-span-3">
        <div class="md:grid md:grid-cols-2 gap-1">
          <guestbook-entry/>
        </div>

      </div>
      <div class="p-4">
        <nuxt-img src="/img/guestbook2.jpeg" alt="Letter" class="w-full rounded" width="330px" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>