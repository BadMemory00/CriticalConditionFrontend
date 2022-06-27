import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false

// Critical Condition global variables
Vue.prototype.$smallScreenSize = 900;
Vue.prototype.$superuserBigScreenPadding = 'padding: 1rem 0 0 17rem';
Vue.prototype.$superuserSmallScreenPadding = 'padding: 1rem 0 0 4rem';

// Vue.prototype.$websiteLink = 'https://criticalconditionbackend.azurewebsites.net';
Vue.prototype.$websiteLink = 'https://localhost:7014';

Vue.prototype.$isSuperuserAuthorized = 'isSuperuserAuthorized';
Vue.prototype.$superuserToken = 'superuserToken';

Vue.prototype.$isSubuserAuthorized = 'isSubuserAuthorized';
Vue.prototype.$subuserToken = 'subuserToken';

Vue.prototype.$subuserUserName = 'sub user name';

//---------------------

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')