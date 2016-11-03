<template>
    <div class="loadmore-component pt20">
        <loading-svg color="gray" wh=".66666667rem"></loading-svg>
        <span class="fs-26">正在加载更多...</span>
    </div>
</template>
<script>
    import LoadingSvg from 'components/LoadingSvg'
    export default {
        components: {
            LoadingSvg
        }
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .loadmore-component {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: gray;
    }
</style>