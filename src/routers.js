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
        '/news':{           
            component: function(resolve){
                require(['./views/news/list'],resolve);
            }
        },
        '/news/detail':{           
            component: function(resolve){
                require(['./views/news/detail'],resolve);
            }
        },
        '/news/comments':{           
            component: function(resolve){
                require(['./views/news/comments'],resolve);
            }
        },
        '/rank':{           
            component: function(resolve){
                require(['./views/rank/index'],resolve);
            }
        },
        '/note':{           
            component: function(resolve){
                require(['./views/note/index'],resolve);
            }
        },
        '/demo':{           
            component: function(resolve){
                require(['./views/Demo'],resolve);
            }
        },
    });
}