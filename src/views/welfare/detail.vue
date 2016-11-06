<template>
    <page-title title="福利详情"></page-title>
    <div class="page page-welfare-detail">
        <div v-if="!$loadingRouteData">
            <div class="banner">
                <img :src="list.listImg|img">
            </div>
            <cell>
                <span class="fs-36 fs-black">
                    积分数：<span class="fs-orange">{{list.integral}}</span>
                </span>
                <span style="padding-left: .2rem;" class="fs-24 fs-gray">(我的积分：{{userInfo.integral}})</span>
            </cell>
            <cell class="bg-gray fs-30" h="1.25333333rem" title="福利详情"></cell>
            <div class="detail-text bg-white fs-30 fs-gray-plus bd">
                <div class="grid">
                    {{list.title}}
                </div>
            </div>
            <cell class="bg-gray fs-30" h="1.25333333rem" title="申请条件"></cell>
            <div class="detail-text bg-white fs-30 fs-gray-plus bd">
                <div class="grid">
                    {{list.requirement}}
                </div>
            </div>
        </div>
    </div>
    <div class="bottom bg-white bt">
        <btn @click="handleSubmit">申 请</btn>
    </div>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import LoadMore from 'components/LoadMore'
    import Cell from 'components/Cell'
    import Btn from 'components/Btn'
    
    import http from 'lib/http'
    import locache from 'lib/locache.js'
    import { loading, toast } from 'vx/actions'
    export default {
        data() {
            return {
                userInfo: locache.get('STuserInfo'),
                list: {},
                welfareId: 0
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
                http.handle(this, 'welfare/applyWelfare', {
                    userId: this.userInfo.userId,
                    welfareId: this.welfareId
                })
                .then((userInfo) => {
                    this.toast('申请成功，扣除积分' + list.integral);
                    this.userInfo.integral = this.userInfo.integral - list.integral;
                });
            }
        },
        route: {
            data(transition) {
                this.welfareId = transition.to.query.id;
                return http.getData(this, 'welfare/getWelfareDetail', {
                    welfareId: this.welfareId
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
    .page-welfare-detail {
        .detail-text {
            padding: .26666667rem 0;
            line-height: .6rem; // 45px
            letter-spacing: 1px;
        }
    }
</style>