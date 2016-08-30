<template>
    <div class="index-head">
        <div class="left-item">
            <div class="integral">
                <span class="left-item-word">我的积分</span>
                <span class="left-item-number">{{integral}}</span>
            </div>
            <div class="coupon">
                <span class="left-item-word">我的点券</span>
                <span class="left-item-number">{{coupon}}</span>
            </div>
        </div>
        <div class="right-item">
            
        </div>
    </div>
</template>
<script>
    export default {
      props: ['integral', 'coupon']
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .index-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4.53333333rem; // 340px
        .background-img('shouye_bg@3x.png');
    }
    .left-item {
        margin-left: .4rem; // 30px
        span {
            display: block;
            color: @c-fff;
            letter-spacing: 1px;
        }
    }
    .coupon {
        margin-top: .73333333rem; // 55px
    }
    .left-item-word {
        .font-size(@fs-32);
    }
    .left-item-number {
        .font-size(@fs-54);
        margin-top: .10666667rem; // 8px
        letter-spacing: 2px;
    }
</style>