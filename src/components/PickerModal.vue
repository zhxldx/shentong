<template>
    <div class="component-picker-modal">
        <div class="mask"></div>
        <div class="picker-modal">
            <header></header>
            <scroller lock-x :height="scrollHeight">
                <div class="picker">
                    <slot></slot>
                </div>
            </scroller>
        </div>
    </div>
</template>
<script>
    import scroller from 'vux/src/components/scroller'
    export default {
        components: {
            scroller
        },
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .component-picker-modal {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        z-index: @zx500;
        .mask {
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.5);
        }
    }
</style>