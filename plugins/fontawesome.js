import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUsersViewfinder,
  faRightToBracket,
  faRightFromBracket,
  faCircleEllipsisVertical,
  faNewspaper,
  faArrowUpFromBracket,
  faAnglesUp,
  faAnglesDown,
  faAnglesLeft,
  faAnglesRight,
  faUserVneck,
  faSunCloud,
} from "@fortawesome/pro-duotone-svg-icons";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

library.add(
  faFacebook,
  faYoutube,
  faUsersViewfinder,
  faCircleEllipsisVertical,
  faRightToBracket,
  faRightFromBracket,
  faNewspaper,
  faArrowUpFromBracket,
  faAnglesUp,
  faAnglesDown,
  faAnglesLeft,
  faAnglesRight,
  faUserVneck,
  faSunCloud
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
