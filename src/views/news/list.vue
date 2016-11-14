<template>
    <div class="l-cell grid" v-for="item of list" v-link="{path: '/news/detail', query: {id: item.id}}">
        <img :src="item.listImg" alt="">
        <div class="l-text">
            <p class="l-title">{{item.title}}</p>
            <div class="l-time">{{item.createtime}}</div>
        </div>
    </div>
</template>

<script>
import http from 'lib/http'
import LoadMore from 'components/LoadMore'
import { loading, toast } from 'vx/actions'
export default {
  data () {
    return {
        list: [],
        page: 1,
        loadMoreBusy: false,
        loadMoreEnd: false
    };
  },
  components: {
    LoadMore
  },
  route: {
    data() {
        return http.getData(this, 'news/getNews', {
            page: 1
        })
        .then((list) => {
            list.forEach((news)=>{
                news.listImg = http.imgHost + news.listImg;
                return news;
            })
            this.$set('list', list)
        })
    }
  },
  vuex: {
    actions: {
        loading,
        toast
    }
  }
};
</script>

<style lang="less">
@import "~src/styles/mixin.less";

.l-cell {
    padding: .26666667rem 0;
    display: flex;
    border-bottom: 1px solid @bd-color;
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