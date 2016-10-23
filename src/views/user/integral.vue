<template>
    <page-title title="我的积分"></page-title>
    <div class="page page-user-integral">
        <cell h="1.73333333rem" v-for="item in 15">
            <div slot="title">
                <p class="fs-black fs-28">+1000</p>
                <p class="fs-gray fs-26 text-overflow">奖励原因</p>
            </div>
            <span class="fs-gray fs-26" slot="value">07-11 09:00</span>
        </cell>

    </div>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import Cell from 'components/Cell'
    export default {
        components: {
            PageTitle,
            Cell
        },
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