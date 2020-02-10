import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// -- Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faGithubSquare);
library.add(faLinkedin);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// -- Vue Input Auto Width
import VueInputAutowidth from 'vue-input-autowidth'
Vue.use(VueInputAutowidth)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
