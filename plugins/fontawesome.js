import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUsersViewfinder,
  faRightToBracket,
  faRightFromBracket,
  faCircleEllipsisVertical,
  faArrowUpFromBracket,
  faAnglesUp,
  faAnglesDown,
  faAnglesLeft,
  faAnglesRight,
  faUserVneck,
} from "@fortawesome/pro-duotone-svg-icons";
import {
  faPeopleGroup,
  faNewspaper,
  faSunCloud,
  faEnvelope,
  faCircleInfo,
  faHandHoldingHeart,
  faCalendarStar,
  faHospital,
  faAddressBook,
} from "@fortawesome/pro-thin-svg-icons";
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
  faSunCloud,
  faPeopleGroup,
  faEnvelope,
  faCircleInfo,
  faHandHoldingHeart,
  faCalendarStar,
  faHospital,
  faAddressBook
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
