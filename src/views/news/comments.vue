<template>
<ul class="comments page">
    <li v-for="comment of comments">
        <div class="comment">
            <div class="comment-head">
                <div class="avatar">
                    <img :src="comment.avatar">
                </div>
                <div class="meta-data">
                    <span>{{comment.realName}}</span>
                    <span>{{comment.addTime}}</span>
                </div>
            </div>
            <div class="comment-body">
                {{comment.comment}}
            </div>
        </div>
    </li>
</ul>
<div class="comment-input">
    <v-input v-model="value" placeholder="输入你的想法" ></v-input>
    <button @click="addComment">发送</button>
</div>
</template>

<script>
import http from 'lib/http'
import {loading, toast} from 'vx/actions'
import avatar from 'assets/paihangbang_touxiang@2x.png'
import vInput from 'components/Input'
export default {
  data () {
    return {
        comments:[],
        value: '',
        page: 1,
        newsId:0
    };
  },
  components: {
    vInput,
    avatar
  },
  route: {
    data(transition) {
        let query = transition.to.query;
        this.$set('newsId', query.newsId);
        return http.getData(this, 'news/getNewsComment', {
            newsId: query.newsId,
            page: 1
        })
        .then((comments) => {
            this.$set('comments', comments)
        })
    }
  },
  methods: {
    addComment() {
        let c = this.value;
        let user = locache.get('STuserInfo');
        let comment = {
            userId: user.userId,
            headImg: user.headImg,
            newsId: this.$get('newsId'),
            content: c
        }
        http.handle(this, 'news/comment', {
            newsComments: comment
        })
        .then(() => {
            // reload
            this.comments.push( comment )
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
.comments {
    li {
        background-color: #fefefe;
        padding: .48rem .4rem; // 36px 30px
        border-bottom: 1px solid @c-cccccc;

        font-size: .37333333rem;  // 28px
        line-height: 1.5em;
        color: @c-666666;
    }
    .comment-head {
        display: flex;

        .avatar {
            width: 1.06666667rem;  // 80px
            height: 1.06666667rem;  // 80px
            margin-right: .4rem;  // 30px
            border-radius: 50% 50%;
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        .meta-data {
            flex: 1;
            span {
                display: block;
                &:nth-of-type(1) {
                    font-size: .42666667rem;  // 32px
                    color: @c-666666;
                }
                &:nth-of-type(2) {
                    font-size: .34666667rem;  // 26px
                    color: @c-999999;
                }
            }
        }
    }

    .comment-body {
        padding-left: .4rem;
        padding-top: .4rem;
    }
}

.comment-input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1.30666667rem;
    border-top: 1px solid @bd-color;

    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-color: @bg-color;
    input {
        flex: 1;
        height: .8rem;  // 60px
        margin-top: 0;
        margin-left: .4rem;
    }
    button {
        width: 1.6rem;  // 120px
        font-size: .42666667rem;  // 32px
        line-height: 1em;
        color: @orange;
    }
}
</style>