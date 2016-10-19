<template>
    <a href="javascript:;" class="account-btn-code radius8 mt20">获取验证码</a>
</template>
<style lang="less">
   @import '~src/styles/mixin.less';
    .account-btn-code {
        display: inline-block;
        width: 2.66666667rem; // 200px
        .line-height(1.2rem);
        text-align: center;
        font-size: @fs28;
        color: #fff;
        @bgcolor: #fcac34;
        background-color: @bgcolor;
        &:active {
            background-color: darken(@bgcolor, 10%);
        }
    }
</style>