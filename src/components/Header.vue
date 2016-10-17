<template>
    <header>{{title}}</header>
</template>
<script>
    export default {
        props: ['title']
    }
</script>
<style lang="less">
   @import '~src/styles/mixin.less';
    header {
        @header-h: 1.17333333rem; // 88px
        height: @header-h;
        background-color: @c-f26b00;
        line-height: @header-h;
        text-align: center;
        font-size: @fs36;
        color: @c-fff;
        letter-spacing: 4px;
    }
</style>