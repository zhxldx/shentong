<template>
	<page-title title="我的履历"></page-title>
	<div class="page page-user-resume">
		<user-item>
			<p class="fs-26 fs-gray pt10">部门：商务一部</p>
		</user-item>
		<cell>
			<span slot="title">在职时间：两年</span>
		</cell>
		<cell class="bg-gray">
			<span slot="title" class="fs-gray">奖励</span>
		</cell>

		<cell class="li-item" v-for="item in 10">
			<span class="text-overflow" slot="title">奖励名称</span>
			<span slot="value" class="fs-gray fs-26">2016-09-08</span>
		</cell>
	</div>
</template>
<script>
	import Cell from 'components/Cell'
	import PageTitle from 'components/PageTitle'
	import UserItem from './user-item'
	export default {
		components: {
			Cell,
			PageTitle,
			UserItem
		}
	}
</script>
<style lang="less">
	@import '~src/styles/mixin.less';
	.page-user-resume {
		.li-item .title {
			width: 70%;
		}
	}
</style>