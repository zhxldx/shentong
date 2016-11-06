<template>
    <page-title title="商品详情"></page-title>
    <div class="page page-shop-detail">
        <div v-if="!$loadingRouteData">
            <div class="banner">
                <img :src="list.colors[colorPick].banner|img">
            </div>
            <cell h="1.86666667rem">
                <div>
                    <p class="fs-black fs-36">{{list.goodsName}}</p>
                    <p class="fs-30 fs-gray pt10">
                        点券数<span class="fs-orange">{{list.point}}</span>
                    </p>
                </div>
            </cell>
            <cell class="goods-picker fs-30" h="1.6rem">
                <span class="fs-black">颜色：</span>
                <input class="radius8 bd fs-gray" 
                type="radio" 
                name="goods-picker" 
                :data-content="item.colorName"
                :value="$index"
                v-model="colorPick"
                v-for="item of list.colors">  
            </cell>
            
            <cell h="1.6rem">
                <span class="fs-30 fs-black">数量：剩余{{list.colors[colorPick].remainNum}}件</span>
            </cell>

            <cell class="bg-gray" h="1.24rem" title="兑换说明"></cell>

            <div class="detail-text bg-white fs-30 fs-gray-plus bd">
                <div class="grid">
                    {{list.instructions}}
                </div>
            </div>

        </div>
    </div>
    <div class="bottom bg-white bt">
        <btn @click="handleSubmit">兑 换</btn>
    </div>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import LoadMore from 'components/LoadMore'
    import Cell from 'components/Cell'
    import Btn from 'components/Btn'
    
    import http from 'lib/http'
    import locache from 'lib/locache.js'
    import host from 'lib/hostConfig'
    import { loading, toast } from 'vx/actions'
    export default {
        data() {
            return {
                userId: locache.get('STuserInfo').userId,
                list: {},
                colorPick: 0
            }
        },
        components: {
            PageTitle,
            LoadMore,
            Cell,
            Btn
        },
        methods: {
            handleSubmit() {
                http.handle(this, 'goods/exchangeGoods', {
                    userId: this.userId,
                    goodsId: this.list.goodsId,
                    colorId: this.list.colors[this.colorPick].colorId,
                    colorName: this.list.colors[this.colorPick].colorName,
                    totalNum: 1
                })
                .then((userInfo) => {
                    this.toast('兑换成功，扣除点券' + this.list.point);
                });
            }
        },
        route: {
            data(transition) {
                return http.getData(this, 'goods/getGoodsDetails', {
                    goodsId: transition.to.query.id
                })
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
    .page-shop-detail {
        .banner img {
            width: 100%;
            height: 5.33333333rem; // 400px
        }
        .goods-picker {
            input {
                display: block;
                width: 1.46666667rem; // 110px
                height: .8rem; // 60px
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: .4rem; // 30px
                &:after {
                    content: attr(data-content);
                }
                &:checked {
                    color: @orange;
                    border: solid 1px @orange;
                }
            }
        }
        .detail-text {
            padding: .26666667rem 0;
            line-height: .6rem; // 45px
            letter-spacing: 1px;
        }
    }
</style>