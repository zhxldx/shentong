<template>
    <page-title title="员工福利"></page-title>
    <div class="page page-welfare"
    infinite-scroll-distance="100" 
    infinite-scroll-immediate-check="false"
    infinite-scroll-disabled="loadMoreBusy" 
    v-infinite-scroll="loadMore()" 
    v-if="!$loadingRouteData">
        <ul>
            <li class="bb" v-for="item of list">
                <div class="grid">
                    <img :src="item.listImg|img">
                    <div class="name">
                        <p class="fs-black text-overflow">{{item.title}}</p>
                        <p class="fs-gray fs-26">
                            积分数：<span class="fs-orange">{{item.integral}}</span>
                        </p>
                    </div>
                    <div class="btn">
                        <a class="fs-white radius8"
                         href="javascript:;"
                         v-link="{path: '/welfare/detail'}">申请</a>
                        <p class="fs-gray pt20 fs-24">剩余名额：{{item.remainNum}}</p>
                    </div>
                </div>
            </li>
        </ul>
        <load-more v-lazy="500" v-show="loadMoreBusy || loadMoreEnd" :load-more-end="loadMoreEnd"></load-more>
    </div>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import LoadMore from 'components/LoadMore'
    
    import http from 'lib/http'
    import { loading, toast } from 'vx/actions'
    export default {
        data() {
            return {
                page: 1,
                loadMoreBusy: false,
                loadMoreEnd: false,
                list: [],
            }
        },
        components: {
            PageTitle,
            LoadMore
        },
        methods: {
            loadMore() {
                http.loadMore(this, 'welfare/getWelfares', {
                    page: this.page + 1
                })
                .then((list) => {
                    this.list.push.apply(this.list, list);
                });
            }
        },
        route: {
            data() {
                return http.getData(this, 'welfare/getWelfares', {
                    page: 1
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
    .page-welfare {
        li {
            padding: .26666667rem 0;
            .grid {
                display: flex;
                justify-content: space-between;
            }
            img {
                .wh(2.66666667rem);
            }
            .name {
                width: 3.73333333rem; // 280px
                .text-overflow {
                    padding: .53333333rem 0;
                }
                .fs-gray {
                }
            }
            .btn {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-end;
                a {
                    display: block;
                    width: 1.6rem; // 120px
                    .line-height(.66666667rem);
                    text-align: center;
                    background-color: @orange;
                }
            }
        }
    }
</style>