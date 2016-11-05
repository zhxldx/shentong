<template>
    <v-article 
        :title="detail.title" 
        :meta="detail.createtime" 
        :content="detail.introduction" 
        v-if="!$loadingRouteData">
    </v-article>
</template>

<script>
import http from 'lib/http'
import { loading, toast } from 'vx/actions'
import vArticle from 'components/Article'
export default {
  
  data () {
    return {
        detail: {}
    }
  },
  components: {
    vArticle
  },
  route: {
    data(transition) {
        let query = transition.to.query;
        return http.getData(this, 'notice/getNoticeDetail', {
            noticeId: query.id
        })
        .then((detail) => {
            this.$set('detail', detail)
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

<style lang="css" scoped>
</style>