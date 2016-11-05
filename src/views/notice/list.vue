<template>
    <div class="m-list grid" v-for="item of list" v-link="{path: '/notice/detail', query: {id: item.id}}">
        <h1 class="title">{{item.title}}</h1>
        <p class="desc">{{item.introduction}}</p>
        <div class="time">{{item.createtime}}</div>
    </div>
    <empty-tips v-if="!$loadingRouteData && !list.length"
        :img="img"
        :text="tips"></empty-tips>
    <load-more v-lazy="500" v-show="loadMoreBusy"></load-more>
</template>

<script>
import http from 'lib/http'
import LoadMore from 'components/LoadMore'
import { loading, toast } from 'vx/actions'
import EmptyTips from 'components/EmptyTips'

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
    LoadMore,
    EmptyTips
  },
  route: {
    data() {
        return http.getData(this, 'notice/getNotices', {
            page:1
        })
        .then((list) => {
            this.$set('list', list);
        });
    }
  },
  methods: {
    toDetail(link) {
        this.$router.go(link);
    },
    loadMore() {
        http.loadMore(this, 'notice/getNotices',{
            page: this.page + 1
        })
        .then((list) => {
            this.list.push(list);
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