<template>
	<page-title title="我的履历"></page-title>
	<div class="page page-user-resume" v-if="!$loadingRouteData">
		<user-item :name="userInfo.name" :img="userInfo.headImg|img">
			<p class="fs-26 fs-gray pt10">部门：{{userInfo.department}}</p>
		</user-item>
		<cell>
			<span slot="title">在职时间：{{userInfo.year}} 年</span>
		</cell>
		<cell class="bg-gray">
			<span slot="title" class="fs-gray">奖励</span>
		</cell>

		<div class="reward-list">
			<div v-if="list.rewardList.length">
				<cell class="li-item" v-for="item of list.rewardList">
					<span class="text-overflow" slot="title">{{item.rewardName}}</span>
					<span slot="value" class="fs-gray fs-26">{{item.date}}</span>
				</cell>
			</div>
			<empty-tips text="暂无奖励纪录" v-if="!list.rewardList.length"></empty-tips>
		</div>
	</div>
</template>
<script>
	import Cell from 'components/Cell'
	import PageTitle from 'components/PageTitle'
	import UserItem from './user-item'
	import EmptyTips from 'components/EmptyTips'

	import http from 'lib/http'
	import locache from 'lib/locache'
    import { loading, toast } from 'vx/actions'
	export default {
		data() {
			return {
				userInfo: locache.get('STuserInfo'),
				list: {}
			}
		},
		components: {
			Cell,
			PageTitle,
			UserItem,
			EmptyTips
		},
		route: {
		    data() {
		        return http.getData(this, 'user/getResume', {
		            userId: this.userInfo.userId,
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
	@import '~src/styles/mixin.less';
	.page-user-resume {
		display: flex;
		flex-direction: column;
		.li-item .title {
			width: 70%;
		}
		.reward-list {
			position: relative;
			flex: 1;
		}
	}
</style>