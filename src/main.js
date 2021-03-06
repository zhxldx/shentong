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
import filters from './filters'
import locache from 'lib/locache.js'
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

// Vue.config.devtools = true;
Vue.http.options.emulateJSON = true;
FastClick.attach(document.body);
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

const router = new Router({
	// history: true,
	linkActiveClass: 'v-link-active'
});
routerConfig(router);
router.beforeEach((transition) => {
	if(transition.to.auth) {
		const userInfo = locache.get('STuserInfo');
		if (!userInfo) {
			router.replace('/login');
			transition.next();	
		}else{
			transition.next();
		}
	}else {
		transition.next();
	}
});
router.start(App, '#app');

