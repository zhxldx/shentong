import Vue from 'vue'
import Router from 'vue-router'
import FastClick from 'fastclick'
import VueResource from 'vue-resource'
import VueLazyComponent from 'vue-lazy-component'
import VueTocuh from 'vue-touch'
import InfiniteScroll from 'vue-infinite-scroll'
import 'vue-lazyload-img'
import './lib/sprint.min.js'
import routerConfig from './routers'
import App from './App'

Vue.use(Router);
Vue.use(InfiniteScroll);
Vue.use(VueResource);
Vue.use(VueTocuh);
Vue.use(VueLazyComponent);
Vue.use(Vue.lazyimg, {
    fade: true,
    nohori: true,
    speed: 20,
});

Vue.config.devtools = true;
FastClick.attach(document.body);
Vue.http.options.emulateJSON = true;

const router = new Router({
	history: true,
	linkActiveClass: 'v-link-active'
});
routerConfig(router);

router.start(App, '#app');

