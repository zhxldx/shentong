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

        // 用户
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

        // 英雄榜
        '/rank':{           
            component: function(resolve){
                require(['./views/rank/index'],resolve);
            }
        },

        // 日志
        '/note':{           
            component: function(resolve){
                require(['./views/note/index'],resolve);
            }
        },
        '/note/day':{           
            component: function(resolve){
                require(['./views/note/release-day'],resolve);
            }
        },
        '/note/week':{           
            component: function(resolve){
                require(['./views/note/release-week'],resolve);
            }
        },

        '/leave':{           
            component: function(resolve){
                require(['./views/leave/index'],resolve);
            }
        },
        '/leave/ask':{           
            component: function(resolve){
                require(['./views/leave/ask-leave'],resolve);
            }
        },
        '/demo':{           
            component: function(resolve){
                require(['./views/Demo'],resolve);
            }
        },
    });
}