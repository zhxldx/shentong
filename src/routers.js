export default function(router) {
    router.map({
        '/':{           
            component: function(resolve){
                require(['./views/Index/Index'],resolve);
            }
        },
        '/login':{           
            component: function(resolve){
                require(['./views/Login/Login'],resolve);
            }
        },
        '/demo':{           
            component: function(resolve){
                require(['./views/Demo'],resolve);
            }
        },
    });
}