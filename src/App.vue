<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    import store from 'vx/store'
    import Toast from 'components/Toast'
    import Loading from 'components/Loading'
    export default {
        components: {
            Toast,
            Loading,
        },
        store
    }
</script>
<style lang="less">
    @import '~src/styles/neat.min.css';
    @import '~src/styles/base.css';
    @import '~src/styles/mixin.less';
    html {
        height: 100%;
    }
    body{
        width: @body-w;
        height: 100%;
        margin: 0 auto;
        background-color: @bd-color;
    }
    #app{
        width: @body-w;
        position: relative;
        overflow-x: hidden;
        font-size: @fs32;
    }
</style>