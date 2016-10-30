<template>
    <page-title title="商城"></page-title>
    <div class="page page-shop">
        <ul class="overflow-hidden" v-if="!$loadingRouteData">
            <li class="bb fl" v-for="item of list">
                <a class="tap-active" href="javascript:;">
                    <img class="pt30" :src="item.listImg|img">
                    <p class="fs-black pt30">{{item.name}}</p>
                    <p class="fs-gray fs-26 pt10">点券数：<span class="fs-orange">{{item.point}}</span></p>
                </a>
            </li>
        </ul>
    </div>
    <v-footer></v-footer>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import vFooter from 'components/Footer'

    import http from 'lib/http'
    import { loading, toast } from 'vx/actions'
    export default {
        data() {
            return {
                list: []
            }
        },
        components: {
            vFooter,
            PageTitle
        },
        route: {
            data(transition) {
                let query = transition.to.query;
                return http.getData(this, 'goods/getGoods')
                .then((list) => {
                    this.$set('list', list);
                });
            }
        },
        vuex: {
            actions: {
                loading,
                toast
            }
        }
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .page-shop {
        li {
            width: @body-w/2;
            height: 6.4rem; // 480px
            box-sizing: border-box;
            &:nth-of-type(2n) {
                border-left: solid 1px @bd-color;
            }
            a {
                display: flex;
                height: 100%;
                flex-direction: column;
                align-items: center;
                img {
                    width: 4.26666667rem; // 320px
                    height: 4rem; // 300px
                }
                p {
                    width: 4.26666667rem; // 320px
                }
            }
        }
    }
</style>