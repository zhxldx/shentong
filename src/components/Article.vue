<template>
    <article class="news">
        <h1>{{title}}</h1>
        <p class="meta">{{meta}}</p>
        <div class="content">{{content}}</div>
    </article>
</template>

<script>
export default {
  props: {
    title: String,
    meta: String,
    content: String
  }
};
</script>

<style lang="less">
@import '~src/styles/mixin.less';
.news {
    margin: .53333333rem .26666667rem 0;  // 40px 20px 0;
    h1 {
        font-size: .4rem;  // 30px
        font-weight: bold;
        color: #333;
        text-align: center;
    }
    .meta {
        font-size: .34666667rem;  // 26px
        color: #999;
        text-align: center;
        line-height: 1.5em;
    }
    .content {
        font-size: .37333333rem;  // 28px
        color: #666;
        text-indent: 2em;
        line-height: 1.5em;
        margin-top: .4rem;  // 30px
    }
}
</style>