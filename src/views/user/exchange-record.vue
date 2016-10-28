<template>
	<page-title title="兑换记录"></page-title>
	<div class="page page-user-exchange">
		<ul>
			<li class="mb20" v-for="item in 10">
				<cell class="bt">
					<span slot="title">订单编号：1234567890</span>
					<span slot="value" class="fs-gray fs-24">2016-09-08 09:10</span>
				</cell>
				<cell class="list-goods" h="3.46666667rem">
					<div slot="title" style="width:5.33333333rem;">
						<img class="list-img" src="../../assets/pic_e@2x.png">
						<div>
							<p class="fs-32">太阳伞</p>
							<p class="fs-26 fs-gray pt30">点券数：<span class="fs-orange">1000</span></p>
						</div>
					</div>
					<span class="fs-26 fs-gray" slot="value">×1</span>
				</cell>
			</li>
		</ul>
		
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
	.page-user-exchange {
		.list-goods {
			img {
				.wh(2.66666667rem);
				margin-right: .4rem; // 30px
			}
			div[slot=title] {
				display: flex;
				align-items: center;
			}
		}

	}
</style>