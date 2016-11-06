<template>
	<page-title title="兑换记录"></page-title>
	<div class="page page-user-exchange"
	infinite-scroll-distance="100" 
	infinite-scroll-immediate-check="false"
	infinite-scroll-disabled="loadMoreBusy" 
	v-infinite-scroll="loadMore()">
		<ul v-if="!$loadingRouteData && list.length">
			<li class="mb20" v-for="item of list">
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
		<empty-tips text="暂无兑换记录" v-if="!$loadingRouteData && !list.length"></empty-tips>
		<load-more v-lazy="500" v-show="loadMoreBusy"></load-more>
	</div>
</template>
<script>
	import Cell from 'components/Cell'
	import PageTitle from 'components/PageTitle'
	import UserItem from './user-item'
	import LoadMore from 'components/LoadMore'
	import EmptyTips from 'components/EmptyTips'

	import http from 'lib/http'
    import locache from 'lib/locache'
    import { loading, toast } from 'vx/actions'
	export default {
		data() {
		    return {
		        userId: locache.get('STuserInfo').userId,
		        list: [],
		        page: 1,
		        loadMoreBusy: false,
		        loadMoreEnd: false,
		    }
		},
		components: {
			Cell,
			PageTitle,
			UserItem,
			LoadMore,
			EmptyTips
		},
		methods: {
		    loadMore() {
		        http.loadMore(this, 'goods/getExchangeRecords', {
		            userId: this.userId,
		            page: this.page + 1
		        })
		        .then((list) => {
		            this.list.push.apply(this.list, list);
		        });
		    }
		},
		route: {
		    data() {
		        return http.getData(this, 'goods/getExchangeRecords', {
		            userId: this.userId,
		            page: 1
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