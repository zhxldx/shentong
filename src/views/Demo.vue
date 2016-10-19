<template>
	
	<cell title="选择时间" :arrow="true">
		<input slot="value" class="test" v-model="test" type="datetime-local" value="2012-05-10T10:20:20">
	</cell>
</template>

<script>
	import vInput from 'components/Input'
	import Cell from 'components/Cell'
	import datetime from 'vux/src/components/datetime'
	export default {
		data() {
			return {
				show: false,
				test: '',
				d: ''
			}
		},
		components: {
			vInput,
			datetime,
		},
		methods: {
			test1() {
				document.querySelector('.test').focus();
				document.querySelector('.test').focus();
				// $('.test').click();
			},
			change(v) {
				console.log(v)
			},
		},
		watch: {
			test(val) {
				// alert(val)
			}
		}
		
	}
</script>
<style lang="less">
	@import '~src/styles/mixin.less';
	.test{
		display: block;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		color: @c-999999;
		// border: none;
	}
	.dp-container {
		[data-dpr="2"] & {
		    zoom: 2;
		}
		[data-dpr="3"] & {
		    zoom: 3;
		}
	}
	.weui_cell_ft.with_arrow:after {
		
	}
	.scroller-item {
		font-size: .42666667rem !important;
	}
	.dp-header .dp-item {
		font-size: .42666667rem !important;
	}
	/*tr {
		border-bottom: 1px solid red;
		display: flex;
		width: 500px;
	}
	th {
		&:first-of-type {
			flex: 2;
		}
		flex: 1;
		position: relative;
		text-align: center;
		padding: 8px 0;
		&:not(.fis):after{
			content: "";
			display: inline-block;
			width: 1px;
			height: 10px;
			background-color: #000;
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto 0;
		}
	}
	td {
		position: relative;
		text-align: center;
		padding: 8px 0;
		&:not(.fis):after{
			content: "";
			display: inline-block;
			width: 1px;
			height: 10px;
			background-color: #000;
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto 0;
		}
	}
	table td, table th {
		border: none;
	}*/

</style>