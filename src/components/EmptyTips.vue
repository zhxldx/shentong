<template>
    <div class="component-empty-tips">
        <img :src="img">
        <p class="fs-gray fs-30 pt10">{{text}}</p>
    </div>
</template>
<script>
    import defaultImg from 'assets/wu_shuju@2x.png'
    export default {
        props: {
            img: {
                type: String,
                default: defaultImg
            },
            text: {
                type: String,
                default: '暂无数据'
            }
        }
    }
</script>
<style lang="less">
   @import '~src/styles/mixin.less';
    .component-empty-tips {
        position: absolute;
        .translate(-50%, -50%);
        top: 50%;
        left: 50%;
        img {
            .wh(3.01333333rem);
        }
        p {
            text-align: center;
        }
    }
</style>