<template>
    <div class="index-box">
        <v-head :coupon="20000" :integral="20000"></v-head>
    </div>
    <v-footer :active="1"></v-footer>
</template>
<script>
    import vFooter from 'components/Footer'
    import vHead from './Head'
    export default {
        components: {
            vFooter,
            vHead,
        },
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
</style>