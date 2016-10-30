
<template>
    <page-title title="日报详情"></page-title>
    <div class="page page-note-detail" v-if="!$loadingRouteData">
        <user-item>
            <p class="fs-26 fs-gray pt10">{{list.createtime}}</p>
        </user-item>
        <text-card
        title="已完成工作"
        :value="list.finishedwork"
        :disabled="true"></text-card>

        <text-card
        title="未完成工作"
        :value="list.unfinishedwork"
        :disabled="true"></text-card>
            
        <text-card
        title="遇到的问题"
        :value="list.problems"
        :disabled="true"></text-card>
    </div>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import TextCard from './text-card'
    import UserItem from '../user/user-item'

    import http from 'lib/http'
    import { loading, toast } from 'vx/actions'
    export default {
    	data() {
    		return {
    			list: {}
    		}
    	},
        components: {
            PageTitle,
            TextCard,
            UserItem
        },
        route: {
            data(transition) {
                let query = transition.to.query;
                return http.getData(this, 'report/getDiaryDetail', {
                    diaryId: query.diaryId
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
        }
    }
</script>