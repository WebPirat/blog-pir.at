<template>
  <div>
    <Head>
      <Title>{{meta[0].title}}</Title>
      <Meta name="lang" content="de"/>
      <Meta name="description" :content="meta[0].description"/>
      <Meta name="og:description" :content="meta[0].description"/>      
      <Meta name="og:title" :content="meta[0].title"/>
      <Meta name="og:url" :content="meta[0].url" />
      <Meta name="og:image" :content="headerimg.publicUrl" />
      <Meta name="twitter:title" :content="meta[0].title" />
      <Meta name="twitter:description" :content="meta[0].description" />
      <Meta name="twitter:image" :content="headerimg.publicUrl" />
      <Meta name="twitter:card" content="summary" />
    </Head>
    <about-menu/>
    <div class="grid md:grid-cols-2">
      <div class="img-center">
        <nuxt-img src="/img/stressed_out.png" alt="Stressed Pirate" class="h-max"
                  width="500"
                  format="webp"
        />
      </div>
      <div class="md:py-10 mx-4">
        <h1 class="text-3xl py-4">Warum Blogpirat?</h1>
        <p class="text-center font-bold border-y border-y-lightgray py-4">
          "Dieser Blog dient hauptsächlich dazu, meine Erfahrungen mit modernen Technologien im Bereich Web-Dev zu dokumentieren."
        </p>
        <p class="py-4">Okay, das war es auch schon mit der PR-Antwort. Ehrlich gesagt stimmt das nur zu 50%. Die andere Hälfte ist, dass ich mich öffentlich ärgern will und das auf meine Art über gewisse Dinge, die diese Branche betreffen, oder eben nur mich in meiner Situation.</p>
        <p class="py-4">
          Manche Sachen werden hier nur existieren, um...
        <div class="text-center font-bold">
          Grafiker zu ärgern (z.B. zentrierter Fließtext), weil ich unfähig bin, es nicht besser weiß oder einfach nur weil ich es kann.<br><br>
        </div>
        Im Zweifelsfall ist es immer letzteres ;)
        </p>
        <p class="text-center py-4 border-y border-y-lightgray mt-4">
          Ihr könnt den Sourcecode für den Blog auf Git finden, wenn ihr wirklich verurteilen wollt :)<br>
          <a href="#">Link zum Repository</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AboutMenu from "../../components/about-menu";
export default {
  name: "about",
  components: {AboutMenu},
  async setup(){
    const supabase = useSupabaseClient()

    const {data: meta, error: metaerror} = await supabase.from('blog_meta').select('*').eq('id', 6)
    const {data: headerimg} = await supabase.storage.from('BlogMeta').getPublicUrl(meta[0].image)

    return { meta, headerimg}
  }
}
</script>

<style scoped>

</style>
