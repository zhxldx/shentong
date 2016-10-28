export default function(router) {
    router.map({
        // 首页
        '/':{           
            component: function(resolve){
                require(['./views/home/index'],resolve);
            }
        },
        // 登录
        '/login':{           
            component: function(resolve){
                require(['./views/account/login'],resolve);
            }
        },
        // 注册
        '/register':{           
            component: function(resolve){
                require(['./views/account/register'],resolve);
            }
        },
        // 忘记密码
        '/pwd':{           
            component: function(resolve){
                require(['./views/account/password'],resolve);
            }
        },
        // 商城
        '/shop':{           
            component: function(resolve){
                require(['./views/shop/index'],resolve);
            }
        },

        // 用户中心／我的
        '/user':{           
            component: function(resolve){
                require(['./views/user/center'],resolve);
            }
        },
        // 消息
        '/user/message':{           
            component: function(resolve){
                require(['./views/user/message'],resolve);
            }
        },
        // 我的积分
        '/user/integral':{           
            component: function(resolve){
                require(['./views/user/integral'],resolve);
            }
        },
        // 我的履历
        '/user/resume':{           
            component: function(resolve){
                require(['./views/user/resume'],resolve);
            }
        },
        // 我的下属
        '/user/subordinate':{           
            component: function(resolve){
                require(['./views/user/subordinate'],resolve);
            }
        },
        // 兑换记录
        '/user/exchange':{           
            component: function(resolve){
                require(['./views/user/exchange-record'],resolve);
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
        '/notice':{           
            component: function(resolve){
                require(['./views/notice/list'],resolve);
            }
        },
        '/notice/detail':{           
            component: function(resolve){
                require(['./views/notice/detail'],resolve);
            }
        },

        // 排行榜
        '/rank':{           
            component: function(resolve){
                require(['./views/rank/index'],resolve);
            }
        },

        // 日志列表
        '/note':{           
            component: function(resolve){
                require(['./views/note/index'],resolve);
            }
        },
        // 日志／日报
        '/note/day':{           
            component: function(resolve){
                require(['./views/note/release-day'],resolve);
            }
        },
        // 日志／周报
        '/note/week':{           
            component: function(resolve){
                require(['./views/note/release-week'],resolve);
            }
        },

        // 请假列表
        '/leave':{           
            component: function(resolve){
                require(['./views/leave/index'],resolve);
            }
        },
        // 申请请假
        '/leave/ask':{           
            component: function(resolve){
                require(['./views/leave/ask-leave'],resolve);
            }
        },

        // 福利
        '/welfare':{           
            component: function(resolve){
                require(['./views/welfare/index'],resolve);
            }
        },
        // 福利详情
        '/welfare/detail':{           
            component: function(resolve){
                require(['./views/welfare/detail'],resolve);
            }
        },

        // 申请加分
        '/addIntegral':{           
            component: function(resolve){
                require(['./views/add-integral/index'],resolve);
            }
        },
        '/demo':{           
            component: function(resolve){
                require(['./views/Demo'],resolve);
            }
        },
    });
}