<template>
    <page-title title="注册"></page-title>
    <div class="page-register grid mt20">
    	<v-input placeholder="手机号码" type="number"></v-input>
    	<div class="code-area">
    		<v-input w="6.26666667rem" placeholder="输入验证码"></v-input>
    		<btn-code></btn-code>
    	</div>
    	<v-input placeholder="姓名"></v-input>
    	<div class="departments-picker mt20 radius8 bd" @click="handlePick">{{department}}</div>
    	<v-input placeholder="输入密码" type="password"></v-input>
    	<v-input placeholder="确认密码" type="password"></v-input>
    	<btn class="btn">提交</btn>
    	<p class="notice">审核时间为1-2个工作日</p>
    </div>
    <picker-modal title="选择部门" action-msg="完成" :show.sync="pickerShow">
    	<div class="departments-picker-list">
    		<label v-for="item of departments" for="radio_{{$index}}">
    			<cell h="1.13333333rem" title="部门名称">
    				<input 
    					id="radio_{{$index}}" 
    					type="radio" 
    					name="departments" 
    					slot="value" 
    					:value="item" 
    					v-model="department">
    			</cell>
    		</label>
    	</div>
    </picker-modal>
</template>
<script>
    import Cell from 'components/Cell'
    import vInput from 'components/Input'
    import PageTitle from 'components/PageTitle'
    import Btn from 'components/Btn'
    import PickerModal from 'components/PickerModal'
    import BtnCode from './btn-code'
    export default {
    	data() {
    		return {
    			pickerShow: false,
    			department: '所在部门',
    			departments: [1,2,3,5,6,7,8,9,10],
    		}
    	},
        components: {
            PageTitle,
            vInput,
            Btn,
            BtnCode,
            Cell,
            PickerModal
        },
        methods: {
        	handlePick() {
        		this.pickerShow = true;
        	}
        }
    }
</script>
<style lang="less">
   @import '~src/styles/mixin.less';
    .page-register {
        .code-area {
        	display: flex;
        	justify-content: space-between;
        }
        .btn {
        	margin-top: 1.28rem; // 96px
        }
		.notice {
			text-align: center;
			font-size: @fs26;
			color: @c-999999;
			margin-top: .46666667rem; // 35px
			&:before {
				content: " ";
				display: inline-block;
				.wh(.34666667rem);
				.background-img('tishi@3x.png');
				vertical-align: top;
				margin-right: .13333333rem; // 10px
			} 
		}
		.departments-picker {
			position: relative;
			.line-height(1.2rem);// 90px
			background-color: #fff;
			color: @c-999999;
			text-indent: .4rem; // 30px
			&:after {
				content: " ";
				display: block;
				width: .29333333rem; // 22px
				height: .18666667rem; // 14px
				.background-img('jiantou_xia@3x.png');
				position: absolute;
				right: .26666667rem; // 20px
				.translate(0, -50%);
				top: 50%;
			}
		}
    }
    .departments-picker-list {
    	label input[slot=value] {
    		display: block;
    		.wh(.42666667rem);
    		.background-img('xuanze_nor@3x.png');
    		&:checked {
    			.background-img('xuanze_sel@3x.png');
    		}
    	}
    }
</style>