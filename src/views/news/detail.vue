<template>
    <article class="news">
        <h1>{{title}}</h1>
        <p class="meta">8-11 09:00</p>
        <div class="content">{{content}}</div>
    </article>
    <div class="btn-container">
        <div class="fav">
            <img src="~src/assets/zixun_dianzan_sel@2x.png" alt="">16
        </div>
        <div class="comment">
            <a v-link="{path: './comments'}" href="javascript:;">
                <img src="~src/assets/zixun_pinglun@2x.png" alt="">评论
            </a>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        title: '七部委启动第三批电子商务示范城市申报工作',
        content: '很多内容离开就是来的快放假了空间路上看到减肥路上看到减肥离开就是来的快放假老师打开减肥离开就是来的快放假'
    }
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
.btn-container {
    display: flex;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    height: 1.30666667rem; // 98px
    border-top: 1px solid #e0e0e0;
    font-size: .37333333rem; // 28px
    color: #999;

    position: fixed;
    bottom: 0;
    left: 0;
    a {
        color: #999;
    }
    .fav, .comment {
        flex: 1;
        text-align: center;
        line-height: 1.30666667rem; // 98px
        img {
            display: inline-block;
            width: .66666667rem;  // 50px
            height: .66666667rem;  // 50px
            vertical-align: middle;
            margin-right: .10666667rem;  // 8px
        }
    }
    .comment > img {
        width: .73333333rem;
        height: .73333333rem;  // 55px
    }
}
</style>