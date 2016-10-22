<template>
    <div>
        <router-view></router-view>
        <toast></toast>
        <loading></loading>
        <div class="mask" v-show="mask" v-lazy="500"></div>
    </div>
</template>
<script>
    import store from 'vx/store'
    import { mask } from 'vx/getters'
    import Toast from 'components/Toast'
    import Loading from 'components/Loading'
    export default {
        components: {
            Toast,
            Loading,
        },
        store,
        vuex: {
            getters: {
                mask
            }
        }
    }
</script>
<style lang="less">
    @import '~src/styles/neat.min.css';
    @import '~src/styles/base.less';
    @import '~src/styles/mixin.less';
    html {
        height: 100%;
    }
    body{
        width: @body-w;
        height: 100%;
        margin: 0 auto;
        background-color: @bg-color;
        overflow-x: hidden;
    }
    #app{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: @body-w;
        position: relative;
        .font-size(@fs32);
    }
</style>