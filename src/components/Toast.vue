<template>
    <div class="component-toast radius8" v-show="getToastShowStage.show" class="toast" :class="type">
        {{getToastShowStage.message}}
    </div>
</template>
<script>
    import { getToastShowStage } from 'vx/getters'
    export default {
        props: {
            type: String,
            message: String
        },
        vuex: {
            getters: {
                getToastShowStage
            }
        }
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .component-toast {
        max-width: 5.33333333rem; // 400px
        .translate(-50%, -50%);
        left: 50%;
        top: 50%;
        position: fixed;
        background-color: rgba(0,0,0,.7);
        padding: .33333333rem; // 25px
        color: #fff;
        z-index: @zx999;
        text-align: center;
    }
</style>