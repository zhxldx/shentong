<template>
	<cell class="user-item" h="2rem">
		<img src="../../assets/pic_a@2x.png">
		<div>
			<p class="fs-32 fs-black">李大仁</p>
			<slot></slot>
		</div>
	</cell>
</template>
<script>
	import Cell from 'components/Cell'
	export default {
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