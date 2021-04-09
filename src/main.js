import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhoneAlt,
  faTable,
  faUserCircle,
  faEnvelope,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as farEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./styles/index.css";

library.add(
  faGithub,
  faTable,
  faUserCircle,
  faEnvelope,
  farEnvelope,
  faPhoneAlt,
  faCaretDown
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
