<template>
    <page-title title="我的消息"></page-title>
    <div class="page page-message" 
        infinite-scroll-distance="100" 
        infinite-scroll-immediate-check="false"
        infinite-scroll-disabled="loadMoreBusy" 
        v-infinite-scroll="loadMore()">
        <ul class="grid" v-if="!$loadingRouteData && list.length">
            <li v-for="item of list">
                <span class="date-time radius8 fs-white fs-24">{{item.createtime}}</span>
                <div class="msg-card radius10 mt20 bd">
                    <div class="title fs-30" :class="{'new': item.isNew}">
                        <p class="text-overflow fs-black">{{item.title}}</p>
                    </div>
                    <a class="fs-gray fs-24" 
                    href="javascript:;"
                    v-link="{path: '/message/detail', query: {id: item.id}}">
                        点击查看
                    </a>
                </div>
            </li>
        </ul>
        <empty-tips v-if="!$loadingRouteData && !list.length"
        :img="img"
        :text="tips"></empty-tips>
        <load-more v-lazy="500" v-show="loadMoreBusy"></load-more>
    </div>
    <v-footer></v-footer>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import LoadMore from 'components/LoadMore'
    import vFooter from 'components/Footer'
    import EmptyTips from 'components/EmptyTips'
    import img from 'assets/wuxiaoxi@2x.png';

    import http from 'lib/http'
    import { loading, toast } from 'vx/actions'
    export default {
        data() {
            return {
                list: [],
                page: 1,
                loadMoreBusy: false,
                loadMoreEnd: false,
                tips: '暂无消息',
                img: img
            }
        },
        components: {
            PageTitle,
            LoadMore,
            vFooter,
            EmptyTips
        },
        methods: {
            loadMore() {
                http.loadMore(this, 'message/getMessage', {
                    userId: 1,
                    page: this.page + 1
                })
                .then((list) => {
                    this.list.push.apply(this.list, list);
                });
            }
        },
        route: {
            data() {
                return http.getData(this, 'message/getMessage', {
                    userId: 1,
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
    .page-message {
        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: .66666667rem
        }
        .date-time {
            padding: .12rem .38666667rem;
            background-color: @c-d8d8d8;
        }
        .msg-card {
            width: 100%;
            background-color: #fff;
            .title {
                padding: .44rem 0;
                position: relative;
                p {
                    width: 80%;
                    text-indent: .26666667rem;
                }
                border-bottom: dashed 1px @bd-color;
                &.new:after {
                    content: " ";
                    display: block;
                    .wh(1.06666667rem);
                    .background-img('new@2x.png');
                    position: absolute;
                    top: 0;
                    right: 0;
                }
            }
            a {
                display: flex;
                align-items: center;
                .line-height(.93333333rem); // 70px
                text-indent: .26666667rem;
                justify-content: space-between;
                &:after {
                    content: " ";
                    display: block;
                    width: .18666667rem; // 14px
                    height: .29333333rem; // 22px
                    .background-img('jiantou_zuo@3x.png');
                    margin-right: .33333333rem; // 25px
                }
            }
        }
    }
</style>