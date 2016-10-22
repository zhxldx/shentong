<template>
    <page-title title="登陆"></page-title>
    <div class="page page-login">
    	<div class="grid mt50">
            <v-input placeholder="手机号码" type="number"></v-input>
            <v-input placeholder="输入密码" type="password"></v-input>
            <btn class="btn">登录</btn>
            <p>
                <a class="fs-gray" 
                 href="javascript:;"
                 v-link="{path: '/register'}">注册帐号</a>
                <a class="fs-gray" 
                 href="javascript:;"
                 v-link="{path: '/pwd'}">忘记密码？</a>
            </p>   
        </div>
    </div>
</template>
<script>
    import Cell from 'components/Cell'
    import vInput from 'components/Input'
    import PageTitle from 'components/PageTitle'
    import Btn from 'components/Btn'
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
            Cell
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
    .page-login {
        .btn {
        	margin-top: .64rem; // 48px
        }
		p {
			display: flex;
			justify-content: space-between;
            font-size: @fs28;
			margin-top: .46666667rem; // 35px 
		}
    }
</style>