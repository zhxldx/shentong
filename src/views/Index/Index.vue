<template>
    <div class="page-index">
        <v-head :coupon="20000" :integral="20000"></v-head>
    </div>
    <v-footer></v-footer>
    <cell class="bt" title="部门名称" value="基础技术部" :arrow="true"></cell>
</template>
<script>
    import vFooter from 'components/Footer'
    import Cell from 'components/Cell'
    import vHead from './Head'
    export default {
        components: {
            vFooter,
            vHead,
            Cell
        },
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
</style>