export default function(router) {
    router.map({
        '/':{           
            component: function(resolve){
                require(['./views/Index/Index'],resolve);
            }
        },
        '/login':{           
            component: function(resolve){
                require(['./views/account/login'],resolve);
            }
        },
        '/register':{           
            component: function(resolve){
                require(['./views/account/register'],resolve);
            }
        },
        '/pwd':{           
            component: function(resolve){
                require(['./views/account/password'],resolve);
            }
        },
        '/demo':{           
            component: function(resolve){
                require(['./views/Demo'],resolve);
            }
        },
    });
}