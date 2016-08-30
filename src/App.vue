<template>
    <router-view></router-view>
</template>
<style lang="less">
    @import '~/static/neat.min.css';
    @import '~/static/base.css';
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