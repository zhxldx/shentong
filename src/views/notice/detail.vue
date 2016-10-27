<template>
    <v-article 
        :title="title" 
        :meta="meta" 
        :content="content">
    </v-article>
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
    vArticle
  },
};
</script>

<style lang="css" scoped>
</style>