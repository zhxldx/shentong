<template>
    <input class="component-input bd radius8 mt20 fs-black" 
        :placeholder="placeholder"
        :type="type"
        v-model="value" 
        :style="{'width': w}" 
        :disabled="disabled" 
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
            w: String,
            disabled: Boolean
        }
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .component-input {
        box-sizing: border-box;
        width: 100%;
        height: 1.17333333rem; // 88px
        padding-left: .4rem; // 30px
        &::-webkit-input-placeholder {
            color: @c-999999;
        }
    }
</style>