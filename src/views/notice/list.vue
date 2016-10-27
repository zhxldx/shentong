<template>
    <div class="m-list grid" v-for="item in 4" @click="toDetail('/notice/detail')">
        <h1 class="title">七部委启动第三批电子商务示范城市申报工作</h1>
        <p class="desc">中国证券网讯（记者 郭晓萍）记者31日从发改委网站获悉，国家发展改革委、商务部</p>
        <div class="time">8-11 09:00</div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },
  methods: {
    toDetail(link) {
        this.$router.go(link);
    }
  }
};
</script>

<style lang="less">
@import "~src/styles/mixin.less";

.m-list {
    display: flex;
    flex-flow: column;
    padding: .4rem 0;
    border-bottom: 1px solid @bd-color;
    .title {
        .font-size(@fs30);
        line-height: 2em;
    }
    .desc {
        line-height: 1.5em;
        font-size: @fs28;
        color: @c-666666;
        flex:　1;
        &:after {
            content: '...';
        }
    }
    .time {
        text-align: right;
        color: @c-999999;
    }
}
</style>