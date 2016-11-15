<template>
	<cell class="user-item" h="2rem">
		<img :src="img">
		<div>
			<p class="fs-32 fs-black">{{name}}</p>
			<slot></slot>
		</div>
	</cell>
</template>
<script>
	import Cell from 'components/Cell'
	export default {
		props: {
			name: String,
			img: String
		},
		components: {
			Cell
		}
	}
</script>
<style lang="less">
	@import '~src/styles/mixin.less';
	.user-item {
		img {
			.wh(1.06666667rem);
			margin-right: .4rem; // 30px
			border-radius: 50%;
		}
	}
</style>