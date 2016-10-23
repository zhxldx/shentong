<template>
    <a href="javascript:;"
    class="component-btn radius8 fs-white fs-36"
    v-link="link"><slot></slot></a>
</template>
<script>
    export default {
        props: {
            link: [String,Object]
        }
    }
</script>
<style lang="less">
   @import '~src/styles/mixin.less';
    .component-btn {
        display: block;
        width: @gird-w;
        .line-height(1.13333333rem);
        text-align: center;
        background-color: @orange;
        &:active {
            background-color: darken(@orange, 5%);
        }
    }
</style>