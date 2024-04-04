// plugins/global.js
import { formatDate } from '~/plugins/helpers/date.js'
import { addAnker } from '~/plugins/helpers/string.js'

export default defineNuxtPlugin((nuxtApp) => {
    // Inject formatDate in Vue, context and store.
    nuxtApp.provide('formatDate', formatDate)
    nuxtApp.provide('addAnker', addAnker)
})
