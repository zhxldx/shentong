<template>
    <div class="index-box">
        <v-head></v-head>
    </div>
    <v-footer :active="1"></v-footer>
</template>
<script>
    import vFooter from 'components/Footer'
    import vHead from './Head'
    export default {
        components: {
            vFooter,
            vHead
        },
    }
</script>
<style lang="less">
    @import '../../assets/less/public.less';
</style>