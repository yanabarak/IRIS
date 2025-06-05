import Vue from 'vue';
import _ from 'lodash';
import store from './store';
import App from './App.vue';

import router from './router';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';
import 'vue-select/dist/vue-select.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { Settings as LuxonSettings } from 'luxon';

LuxonSettings.defaultLocale = 'he-Il';
require('bootstrap/scss/bootstrap.scss');

// if (isRTL) {
//   require('./styles/bootstrap/css/bootstrap-rtl.css');
//   // require('bootstrap-v4-rtl/css/bootstrap-rtl.css');
// } else {
//   require('./styles/bootstrap/css/bootstrap.css');
//   // require('bootstrap-v4-rtl/css/bootstrap.css');
// }
require('./styles/main.scss');

import 'bootstrap-vue/dist/bootstrap-vue.css';
import NotifyMixin from '@/Util/NotifyMixin';
import VueToast from 'vue-toast-notification';
import vSelect from 'vue-select';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { dateFormat, handleSyncRequestLoader } from '@/Util/auth';

import Treeselect from '@riophae/vue-treeselect/';
import '@riophae/vue-treeselect/dist/vue-treeselect.css';

Vue.component('datetime', Datetime);
Vue.component('v-select', vSelect);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueTelInput);
Vue.component('treeselect', Treeselect);
Vue.use(VueToast, {
  position: 'top-right',
});

Vue.prototype._ = _;
Vue.prototype.$global = {
  dateFormat: (date, format = 'DD/MM/YYYY') => (date ? dateFormat(date, format) : null),
};

Vue.mixin(NotifyMixin);

new Vue({
  store,
  router,
  render: h => h(App),
  created() {
    handleSyncRequestLoader(store, process.env.VUE_APP_API_URL);
  },
}).$mount('#app');
