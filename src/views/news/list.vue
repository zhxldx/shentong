<template>
    <div class="l-cell grid" v-for="item in 5">
        <img  src="../../assets/pic@2x.png" alt="">
        <div class="l-text">
            <p class="l-title">七部委启动第三批电子商务示范城市</p>
            <div class="l-time">8-11 09:00</div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    };
  }
};
</script>

<style lang="less">
@import "~src/styles/mixin.less";

.l-cell {
    padding: .26666667rem 0;
    display: flex;
    img {
        display: block;
        width: 3.46666667rem;  // 260px 
        height: 2.4rem;  // 180px
        margin-right: .4rem;  // 30px
    }
    .l-text {
        flex: 1;
        display: flex;
        justify-content: space-between;
        flex-flow: column;
        padding: .13333333rem 0;  // 10px
        .l-title {
            flex: 1;
            width: 100%;
            font-size: @fs32;
            line-height: 1.3em;
            color: @c-666666;
        }
        .l-time {
            .line-height(@fs26);
            color: @c-999999;
        }
    }
}

</style>