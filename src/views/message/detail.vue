<template>
	<page-title title="消息详情"></page-title>
	<div class="page page-message-detail bg-white" v-if="!$loadingRouteData">
		<div class="grid">
			<p class="title fs-30 fs-black">
				{{list.title}}
			</p>
			<p class="date fs-26 fs-gray pt20">{{list.createtime}}</p>
			<p class="content fs-28 fs-gray-plus pt20">{{{list.instructions}}}</p>
		</div>
	</div>
</template>
<script>
	import PageTitle from 'components/PageTitle'
	import http from 'lib/http'
	import { loading, toast } from 'vx/actions'
	export default {
		date() {
			return {
				list: {}
			}
		},
		components: {
			PageTitle
		},
		route: {
			data(transition) {
			    let query = transition.to.query;
			    return http.getData(this, 'message/getMessageDetail', {
			    	messageId: query.id
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
<style lang="less">
	.page-message-detail {
		.title {
			padding-top: .6rem; // 45px
		}
		.title, .date {
			text-align: center;
		}
		.content {
			text-indent: 2em;
			letter-spacing: .04rem;
			line-height: 2;
		}
	}
</style>