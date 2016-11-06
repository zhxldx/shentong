<template>
    <page-title title="我的积分"></page-title>
    <div class="page page-user-integral"
    infinite-scroll-distance="100" 
    infinite-scroll-immediate-check="false"
    infinite-scroll-disabled="loadMoreBusy" 
    v-infinite-scroll="loadMore()">
        <cell h="1.73333333rem" v-for="item of list">
            <div slot="title">
                <p class="fs-black fs-28">{{item.integralDetail}}</p>
                <p class="fs-gray fs-26 text-overflow">{{item.reason}}</p>
            </div>
            <span class="fs-gray fs-26" slot="value">{{item.createtime}}</span>
        </cell>
        <empty-tips v-if="!$loadingRouteData && !list.length"></empty-tips>
        <load-more v-lazy="500" v-show="loadMoreBusy"></load-more>
    </div>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import Cell from 'components/Cell'
    import EmptyTips from 'components/EmptyTips'
    import LoadMore from 'components/LoadMore'

    import http from 'lib/http'
    import locache from 'lib/locache'
    import { loading, toast } from 'vx/actions'
    export default {
        data() {
            return {
                userId: locache.get('STuserInfo').userId,
                list: [],
                page: 1,
                loadMoreBusy: false,
                loadMoreEnd: false,
            }
        },
        components: {
            PageTitle,
            Cell,
            EmptyTips,
            LoadMore
        },
        methods: {
            loadMore() {
                http.loadMore(this, 'integral/getDetails', {
                    userId: this.userId,
                    page: this.page + 1
                })
                .then((list) => {
                    this.list.push.apply(this.list, list);
                });
            }
        },
        route: {
            data() {
                return http.getData(this, 'integral/getDetails', {
                    userId: this.userId,
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
    .page-user-integral {
        .fs-black {
            line-height: .6rem; // 45px
        }
    }
</style>