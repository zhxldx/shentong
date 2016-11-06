<template>
    <page-title title="首页"></page-title>
    <div class="page page-home">
        <div class="head fs-white">
            <div class="left-item fs-32">
                <div class="integral">
                    <span>我的积分</span>
                    <p>{{userInfo.integral}}</p>
                </div>
                <div class="coupon">
                    <span >我的点券</span>
                    <p>{{userInfo.point}}</p>
                </div>
            </div>
            <div class="right-item">
                <p><a href="javascript:;" 
                class="fs-white"
                v-link="'/user/integral'">积分明细</a></p>
                <p><a href="javascript:;" 
                class="fs-orange radius8"
                v-link="'/shop'">去兑换</a></p>
            </div>
        </div>

        <div class="handle-list mt20 bt fs-30">
            <ul>
                <li>
                    <a class="tap-active" href="javascript:;" v-link="'/rank'">
                        <img src="../../assets/icon_yingxiongbang@3x.png">英雄榜
                    </a>
                </li>
                <li>
                    <a class="tap-active" href="javascript:;" v-link="'/news'">
                        <img src="../../assets/icon_zixun@3x.png">资讯
                    </a>
                </li>
                <li>
                    <a class="tap-active" href="javascript:;" v-link="'/notice'">
                        <img src="../../assets/icon_gonggao@3x.png">公告
                    </a>
                </li>
                <li>
                    <a class="tap-active" href="javascript:;" v-link="'/note'">
                        <img src="../../assets/icon_rizhi@3x.png">日志
                    </a>
                </li>
                <li>
                    <a class="tap-active" href="javascript:;" v-link="'/leave'">
                        <img src="../../assets/icon_qingjia@3x.png">请假
                    </a>
                </li>
                <li>
                    <a class="tap-active" href="javascript:;" v-link="'/welfare'">
                        <img src="../../assets/icon_fuli@3x.png">员工福利
                    </a>
                </li>
                <li>
                    <a class="tap-active" href="javascript:;" v-link="'/addIntegral'">
                        <img src="../../assets/icon_jiafen@3x.png">申请加分
                    </a>
                </li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
    <v-footer></v-footer>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import vFooter from 'components/Footer'
    import locache from 'lib/locache.js'
    export default {
        data() {
            return {
                userInfo: locache.get('STuserInfo')
            }
        },
        components: {
            vFooter,
            PageTitle
        },
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .page-home {
        .head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 4.53333333rem; // 340px
            .background-img('shouye_bg@3x.png');
        }
        .left-item {
            margin-left: .4rem; // 30px
            span {
                display: block;
                letter-spacing: 1px;
            }
            p {
                .font-size(@fs54);
                margin-top: .10666667rem; // 8px
                letter-spacing: 2px;
            }
            .coupon {
                margin-top: .73333333rem; // 55px
            }
        }
        .right-item {
            margin-right: .4rem; // 30px
            font-size: .37333333rem; // 28px
            p {
                text-align: right;
            }
            p:last-of-type {
                margin-top: 1.66666667rem; // 125px
                font-size: .42666667rem; // 32px
                a {
                    display: block;
                    padding: .2rem .4rem; 
                    background-color: #fff;
                }
            }
        }
        .handle-list ul {
            overflow: hidden;
            li {
                float: left;
                box-sizing: border-box;
                display: inline-block;
                border-bottom: solid 1px @bd-color;
                background-color: #fff;
                .wh(@body-w/3);
                &:nth-of-type(3n+2) {
                    border-left: solid 1px @bd-color;
                    border-right: solid 1px @bd-color;
                }
            }
            img {
                .wh(.93333333rem);
                padding-bottom: .4rem; // 30px
            }
            a {
                display: flex;
                height: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: @c-666666;
            }
        }
    }
</style>