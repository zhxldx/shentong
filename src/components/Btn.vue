<template>
    <a href="javascript:;" class="component-btn radius8"><slot></slot></a>
</template>
<style lang="less">
   @import '~src/styles/mixin.less';
    .component-btn {
        display: block;
        width: @gird-w;
        .line-height(1.13333333rem);
        text-align: center;
        font-size: @fs36;
        color: #fff;
        background-color: @orange;
        &:active {
            background-color: darken(@orange, 5%);
        }
    }
</style>