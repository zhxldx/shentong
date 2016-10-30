
<template>
    <page-title title="周报详情"></page-title>
    <div class="page page-note-detail" v-if="!$loadingRouteData">
        <user-item>
            <p class="fs-26 fs-gray pt10">{{list.createtime}}</p>
        </user-item>
        <text-card
        title="本周完成工作"
        :value="list.finishedwork"
        :disabled="true"></text-card>

        <text-card
        title="本周工作总结"
        :value="list.summary"
        :disabled="true"></text-card>

        <text-card
        title="下周工作计划"
        :value="list.nextweekplan"
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
        methods: {
        	
        },
        route: {
            data(transition) {
                let query = transition.to.query;
                return http.getData(this, 'report/getWeekReportDetail', {
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