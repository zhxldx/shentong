<template>
    <page-title title="我的消息"></page-title>
    <div class="page user-message">
        <div class="grid" v-infinite-scroll="loadMore()" infinite-scroll-disabled="loadMoreBusy" infinite-scroll-distance="100" infinite-scroll-immediate-check="false">
            <ul>
                <li v-for="item in list">
                    <span class="date-time radius8 fs-white fs-24">2016-09-12 09:09</span>
                    <div class="msg-card radius10 mt20 bd">
                        <div class="title new fs-30">
                            <p class="text-overflow fs-black">七部委启动第三批电子商务示范城市申报</p>
                        </div>
                        <a class="fs-gray fs-24" href="javascript:;">
                            点击查看
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <v-footer></v-footer>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import vFooter from 'components/Footer'
    import Cell from 'components/Cell'
    export default {
        data() {
            return {
                list: [1,2,3,4,5,6,7,8,9],
                loadMoreBusy: false
            }
        },
        components: {
            vFooter,
            PageTitle,
            Cell
        },
        methods: {
            loadMore() {
                
            },
            
        },
        computed: {
            empty() {
                return this.list.length ? true : false;
            }
        }
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .user-message {
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