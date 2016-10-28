<template>
	<page-title title="我的下属"></page-title>
	<div class="page page-user-subordinate">
		<user-item v-for="item in 10"></user-item>
	</div>
</template>
<script>
	import PageTitle from 'components/PageTitle'
	import UserItem from './user-item'
	export default {
		components: {
			PageTitle,
			UserItem
		}
	}
</script>
<style lang="less">
	@import '~src/styles/mixin.less';
</style>