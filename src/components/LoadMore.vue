<template>
    <div class="loadmore-component pt20">
        <loading-svg v-if="!loadMoreEnd" color="gray" wh=".66666667rem"></loading-svg>
        <span v-if="!loadMoreEnd" class="fs-26">正在加载更多...</span>
        <span v-if="loadMoreEnd" class="fs-26">没有更多数据</span>
    </div>
</template>
<script>
    import LoadingSvg from 'components/LoadingSvg'
    export default {
        props: {
            loadMoreEnd: Boolean
        },
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