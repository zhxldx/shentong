<template>
<<<<<<< HEAD
    <div class="l-cell grid" v-for="item of list" v-link="{path: '/news/detail', query: {id: item.id}}">
        <img :src="item.listImg" alt="">
        <div class="l-text">
            <p class="l-title">{{item.title}}</p>
            <div class="l-time">{{item.createtime}}</div>
=======
    <div class="page"
    infinite-scroll-distance="100" 
    infinite-scroll-immediate-check="false"
    infinite-scroll-disabled="loadMoreBusy" 
    v-infinite-scroll="loadMore()">
        <div class="l-cell grid" v-for="item in 10">
            <img  src="../../assets/pic@2x.png" alt="">
            <div class="l-text">
                <p class="l-title">七部委启动第三批电子商务示范城市</p>
                <div class="l-time">8-11 09:00</div>
            </div>
>>>>>>> master
        </div>
    </div>
</template>

<script>
<<<<<<< HEAD
import http from 'lib/http'
import LoadMore from 'components/LoadMore'
import { loading, toast } from 'vx/actions'
=======
import PageTitle from 'components/PageTitle'
import EmptyTips from 'components/EmptyTips'
import LoadMore from 'components/LoadMore'
import http from 'lib/http'
import { loading, toast, mask } from 'vx/actions'
>>>>>>> master
export default {
  data () {
    return {
        list: [],
        page: 1,
        loadMoreBusy: false,
<<<<<<< HEAD
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
=======
        loadMoreEnd: false,
    };
  },
  components: {
      PageTitle,
      LoadMore,
      EmptyTips
  },
  methods: {
      loadMore() {
          http.loadMore(this, 'message/getMessage', {
              userId: this.userId,
              page: this.page + 1
          })
          .then((list) => {
              this.list.push.apply(this.list, list);
          });
      },
      goDetail(id) {
          this.$router.go({path: '/message/detail', query: {id: id}});
      }
  },
  route: {
      data() {
          return http.getData(this, 'message/getMessage', {
              userId: 1,
              page: 1
          })
          .then((list) => {
              this.$set('list', list);
          });
      }
  },
  vuex: {
      actions: {
          loading,
          toast
      }
>>>>>>> master
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