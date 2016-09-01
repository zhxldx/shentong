<template>
    <div class="btn-component">{{word}}</div>
</template>
<script>
    export default {
        props: ['word']
    }
</script>
<style lang="less">
   @import '~src/styles/mixin.less';
    .btn-component {
        width: 9.2rem; // 690px
        @h: 1.17333333rem; // 88px
        height: @h;
        background-color: @c-f26b00;
        line-height: @h;
        text-align: center;
        font-size: @fs-36;
        color: @c-fff;
        letter-spacing: 4px;
        border-radius: .10666667rem;// 8px
        margin: 0 auto;
    }
</style>