import Vue from 'vue'
import Router from 'vue-router'

import routerConfig from './routers'
import App from './App'
import infiniteScroll from 'vue-infinite-scroll';
Vue.use(infiniteScroll);
Vue.use(Router);
Vue.config.devtools = true;
const router = new Router({

});
routerConfig(router);

router.start(App, '#app');

