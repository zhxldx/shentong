<template>
    <page-title title="我的"></page-title>
    <div class="page page-user-center">
        <div class="head">
            <div class="head-img">
                <img src="../../assets/wode_touxiang.png">
            </div>
            <p class="name fs-white pt20">李大仁</p>
            <p class="positon fs-white pt10">商务经理</p>
        </div>
        <div class="handle-list pt20">
            <cell link="/user/integral" class="bt" title="我的积分" :arrow="true">
                <img slot="title" src="../../assets/wode_wdjf@3x.png">
            </cell>
            <cell title="我的履历" :arrow="true">
                <img slot="title" src="../../assets/wode_lvli@3x.png">
            </cell>
            <cell title="我的下属" :arrow="true">
                <img slot="title" src="../../assets/wode_wdxs@3x.png">
            </cell>
            <cell title="兑换记录" :arrow="true">
                <img slot="title" src="../../assets/wode_dhjl@3x.png">
            </cell>
            <cell title="给领导打分" :arrow="true">
                <img slot="title" src="../../assets/wode_glddf@3x.png">
            </cell>
            <cell title="自助申请加分" :arrow="true">
                <img slot="title" src="../../assets/wode_zzsqjf@3x.png">
            </cell>
            <cell title="意见或者建议" :arrow="true">
                <img slot="title" src="../../assets/wode_yjhzjy@3x.png">
            </cell>
        </div>

    </div>
    <v-footer></v-footer>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import vFooter from 'components/Footer'
    import Cell from 'components/Cell'
    export default {
        components: {
            PageTitle,
            vFooter,
            
            Cell
        },
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .page-user-center {
        .head {
            height: 4.26666667rem; // 320px
            .background-img('wode_bg@3x.png');
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .head-img {
                border: solid .10666667rem #ff8a3c;
                border-radius: 50%;
                img {
                    .wh(1.6rem);
                    border: solid .10666667rem #ffab72;
                    border-radius: 50%;
                }
            }
            .name {
                font-size: .48rem; // 36px
            }
            .position {
                font-size: .37333333rem; // 28px
            }
        }
        .handle-list {
            img {
                .wh(.53333333rem);
                padding-right: .33333333rem; // 25px
            }
        }
    }
</style>