import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
Vue.use(Router);
Vue.config.devtools = true
// var app = Vue.extend({});
const router = new Router({

});
router.map({
    '/':{           
        component: function(resolve){
            require(['./views/Index/Index'],resolve);
        }
    },
    '/demo':{           
        component: function(resolve){
            require(['./views/Demo'],resolve);
        }
    },
});

router.start(App, '#app');

