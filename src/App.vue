<template>
    <router-view></router-view>
</template>
<style lang="less">
    @import '~src/styles/neat.min.css';
    @import '~src/styles/base.css';
    @import '~src/styles/mixin.less';
    html {
        height: 100%;
    }
    body{
        width: @body-w;
        height: 100%;
        margin: 0 auto;
        background-color: @c-f8f8f8;
    }
    #app{
        width: @body-w;
        position: relative;
        overflow-x: hidden;
    }
</style>