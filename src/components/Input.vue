<template>
    <input class="component-input bd radius8 mt20" 
        :placeholder="placeholder"
        :type="type"
        v-model="value" 
        :style="{'width': w}" 
    >
</template>
<script>
    export default {
        props: {
            value: {
                twoWay: true
            },
            placeholder: String,
            type: {
                type: String,
                default: 'text'
            },
            w: String
        }
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .component-input {
        box-sizing: border-box;
        width: 100%;
        height: 1.2rem; // 90px
        padding-left: .4rem; // 30px
        color: @c-333333;
        &::-webkit-input-placeholder {
            color: @c-999999;
        }
    }
</style>