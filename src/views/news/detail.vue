<template>
    <v-article 
        :title="news.title" 
        :meta="news.createtime" 
        :content="news.content">
    </v-article>
    <div class="btn-container">
        <div class="fav" @click="changeLike">
            <img :src="likedImg" alt="">{{news.likenums}}
        </div>
        <div class="comment">
            <a v-link="{path: './comments', query: {newsId: news.id}}" href="javascript:;">
                <img src="~src/assets/zixun_pinglun@2x.png" alt="">评论
            </a>
        </div>
    </div>
</template>

<script>
import http from 'lib/http'
import vArticle from 'components/Article'
import {loading, toast} from 'vx/actions'
import locache from 'lib/locache.js'
export default {
  data () {
    return {
        news: {},
        newsId: 0,
        liked: null
    }
  },
  computed: {
    likedImg: function() {
        let l = this.liked ? 'sel' : 'nor';
        return '../assets/zixun_dianzan_'+l+'@3x.png';
    },
    user: function() {
        return locache.get('STuserInfo');
    }
  },
  components: {
    vArticle,
  },
  route: {
    data(transition) {
        let query = transition.to.query;
        this.$set('newsId', query.id);
        return http.getData(this, 'news/getNewsDetail', {
            newsId: query.id,
            userId: this.user.userId
        })
        .then((detail) => {
            this.$set('liked', detail.hasLike === 0);
            this.$set('news', detail);
        })
    }
  },
  methods: {
    changeLike() {
        const user = this.user;
        http.handle(this, 'news/clickNewsLike', {
            newsLikes: '['+JSON.stringify({userId: user.userId,newsId: this.newsId})+']',
            hasLike: (!this.liked)+0
        })
        .then((data) => {
            this.$set('liked', !this.liked);
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