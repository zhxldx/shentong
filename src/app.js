import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
var app = Vue.extend({});
var router = new Router({

});
router.map({
	'/':{			
        component: function(resolve){
            require(['./views/Index'],resolve);
        }
    }
});

router.start(app, '#app');
