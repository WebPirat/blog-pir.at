import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
import {faBug, faPoo, faX, faUserCog, fas} from "@fortawesome/free-solid-svg-icons";
library.add( fab, faBug, faGithub, faPoo, faX, faUserCog, fas);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});