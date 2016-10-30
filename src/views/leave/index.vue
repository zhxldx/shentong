<template>
    <page-title title="请假"></page-title>
    <div class="page page-leave">
        <div v-if="!$loadingRouteData && list.length">
            <cell h="1.73333333rem" v-for="item of list">
                <div slot="title">
                    <p class="fs-black">{{item.department}}</p>
                    <p class="fs-gray text-overflow fs-26">{{item.status}}</p>
                </div>
                <span class="fs-gray fs-26" slot="value">{{item.createtime}}</span>
            </cell>
        </div>
        <empty-tips v-if="!$loadingRouteData && !list.length"></empty-tips>
    </div>
    <div class="bottom bg-white bt">
      <btn link="/leave/ask">请 假</btn>
    </div>
  
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import Cell from 'components/Cell'
    import Btn from 'components/Btn'
    import EmptyTips from 'components/EmptyTips'

    import http from 'lib/http'
    import { loading, toast } from 'vx/actions'
    export default {
        data() {
            return {
                list: []
            }
        },
        components: {
            PageTitle,
            Cell,
            Btn,
            EmptyTips
        },
        route: {
            data(transition) {
                let query = transition.to.query;
                return http.getData(this, 'leave/getLeaveInfo', {
                    userId: 1
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
    .page-leave {
        .textarea {
            height: 80%;
            textarea {
                width: 100%;
            }
        }
        .fs-black {
            line-height: .6rem; // 45px
        }
        .apply-person {
            div[slot=title] i{
                display: block;
                .wh(.8rem);
                .background-img('rzjsr@2x.png');
                margin-top: .33333333rem; // 25px 
            }
        }
    }
</style>