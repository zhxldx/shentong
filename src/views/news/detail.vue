<template>
    <v-article 
        :title="title" 
        :meta="meta" 
        :content="content">
    </v-article>
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
import vArticle from 'components/Article'
export default {
  data () {
    return {
        title: '七部委启动第三批电子商务示范城市申报工作',
        meta: '8-11 09:00',
        content: '很多内容离开就是来的快放假了空间路上看到减肥路上看到减肥离开就是来的快放假老师打开减肥离开就是来的快放假'
    }
  },
  components: {
    vArticle,
  }
};
</script>

<style lang="less">
@import '~src/styles/mixin.less';
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