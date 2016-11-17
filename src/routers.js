export default function(router) {
    router.map({
        // 首页
        '/':{           
            component: function(resolve){
                require(['./views/home/index'],resolve);
            },
            auth: true
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
            },
            auth: true
        },
        '/shop/detail':{           
            component: function(resolve){
                require(['./views/shop/detail'],resolve);
            },
            auth: true
        },

        // 用户中心／我的
        '/user':{           
            component: function(resolve){
                require(['./views/user/center'],resolve);
            },
            auth: true
        },
        // 我的积分
        '/user/integral':{           
            component: function(resolve){
                require(['./views/user/integral'],resolve);
            },
            auth: true
        },
        // 我的履历
        '/user/resume':{           
            component: function(resolve){
                require(['./views/user/resume'],resolve);
            },
            auth: true
        },
        // 我的下属
        '/user/subordinate':{           
            component: function(resolve){
                require(['./views/user/subordinate'],resolve);
            },
            auth: true
        },
        // 兑换记录
        '/user/exchange':{           
            component: function(resolve){
                require(['./views/user/exchange-record'],resolve);
            },
            auth: true
        },

        '/user/leader':{           
            component: function(resolve){
                require(['./views/user/leader'],resolve);
            },
            auth: true
        },
        '/user/leaderScore':{           
            component: function(resolve){
                require(['./views/user/leader-score'],resolve);
            },
            auth: true
        },
        '/user/suggest':{           
            component: function(resolve){
                require(['./views/user/suggest'],resolve);
            },
            auth: true
        },


        '/news':{           
            component: function(resolve){
                require(['./views/news/list'],resolve);
            },
            auth: true
        },
        '/news/detail':{           
            component: function(resolve){
                require(['./views/news/detail'],resolve);
            },
            auth: true
        },
        '/news/comments':{           
            component: function(resolve){
                require(['./views/news/comments'],resolve);
            },
            auth: true
        },
        '/notice':{           
            component: function(resolve){
                require(['./views/notice/list'],resolve);
            },
            auth: true
        },
        '/notice/detail':{           
            component: function(resolve){
                require(['./views/notice/detail'],resolve);
            },
            auth: true
        },

        // 排行榜
        '/rank':{           
            component: function(resolve){
                require(['./views/rank/index'],resolve);
            },
            auth: true
        },

        // 日志列表
        '/note':{           
            component: function(resolve){
                require(['./views/note/index'],resolve);
            },
            auth: true
        },
        // 日志／日报
        '/note/release/day':{           
            component: function(resolve){
                require(['./views/note/release-day'],resolve);
            },
            auth: true
        },
        // 日志／周报
        '/note/release/week':{           
            component: function(resolve){
                require(['./views/note/release-week'],resolve);
            },
            auth: true
        },
        '/note/detail/day':{           
            component: function(resolve){
                require(['./views/note/detail-day'],resolve);
            },
            auth: true
        },
        '/note/detail/week':{           
            component: function(resolve){
                require(['./views/note/detail-week'],resolve);
            },
            auth: true
        },

        // 请假列表
        '/leave':{           
            component: function(resolve){
                require(['./views/leave/index'],resolve);
            },
            auth: true
        },
        // 申请请假
        '/leave/ask':{           
            component: function(resolve){
                require(['./views/leave/ask-leave'],resolve);
            },
            auth: true
        },

        // 福利
        '/welfare':{           
            component: function(resolve){
                require(['./views/welfare/index'],resolve);
            },
            auth: true
        },
        // 福利详情
        '/welfare/detail':{           
            component: function(resolve){
                require(['./views/welfare/detail'],resolve);
            },
            auth: true
        },

        // 申请加分
        '/addIntegral':{           
            component: function(resolve){
                require(['./views/add-integral/index'],resolve);
            },
            auth: true
        },

        // 消息
        '/message':{           
            component: function(resolve){
                require(['./views/message/index'],resolve);
            },
            auth: true
        },
        '/message/detail':{           
            component: function(resolve){
                require(['./views/message/detail'],resolve);
            },
            auth: true
        },
        '/demo':{           
            component: function(resolve){
                require(['./views/Demo'],resolve);
            }
        },
    });
}