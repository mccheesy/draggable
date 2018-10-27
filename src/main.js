import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandLizard, faLemon, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import App from './App';

library.add(faHandLizard, faLemon, faLightbulb);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

require('./assets/sass/main.scss');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
