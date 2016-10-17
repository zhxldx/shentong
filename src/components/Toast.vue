<template>
    <div class="component-toast" v-show="getToastShowStage.show" class="toast" :class="type">
        {{getToastShowStage.message}}
    </div>
</template>
<script>
    import { getToastShowStage } from 'vx/getters'
    import { toast } from 'vx/actions'
    export default {
        props: {
            type: String,
            message: String
        },
        vuex: {
            getters: {
                getToastShowStage
            },
            actions: {
                toast
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
        padding: .2rem; // 15px
        color: #fff;
        border-radius: .09333333rem; // 7px
        z-index: @zx999;
    }
</style>