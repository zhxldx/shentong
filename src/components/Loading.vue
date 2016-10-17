<template>
    <div v-show="loading" class="component-loading">
        <div class="loading">
            <loading-svg color="#f4f4f5"></loading-svg>
        </div>
    </div>
</template>
<script>
    import { loading } from 'vx/getters'
    import LoadingSvg from 'components/LoadingSvg'
    export default {
        vuex: {
            getters: {
                loading
            }
        },
        components: {
            LoadingSvg
        }
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .component-loading {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,0);
        position: fixed;
        z-index: @zx999;
        top: 0;
        .loading {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0,0,0,.7);
            padding: .53333333rem; // 40px
            border-radius: .13333333rem; // 10px
        }
    }
</style>