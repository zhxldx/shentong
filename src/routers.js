export default function(router) {
    router.map({
        '/':{           
            component: function(resolve){
                require(['./views/home/index'],resolve);
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
        '/shop':{           
            component: function(resolve){
                require(['./views/shop/index'],resolve);
            }
        },

        '/user':{           
            component: function(resolve){
                require(['./views/user/center'],resolve);
            }
        },
        '/user/message':{           
            component: function(resolve){
                require(['./views/user/message'],resolve);
            }
        },
        '/user/integral':{           
            component: function(resolve){
                require(['./views/user/integral'],resolve);
            }
        },
        '/demo':{           
            component: function(resolve){
                require(['./views/Demo'],resolve);
            }
        },
    });
}