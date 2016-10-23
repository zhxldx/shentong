<template>
    <page-title title="忘记密码"></page-title>
    <div class="page page-password">
        <div class="grid mt50">
                <v-input placeholder="手机号码" type="number"></v-input>
                <div class="code-area">
                    <v-input w="6.26666667rem" placeholder="输入验证码"></v-input>
                    <btn-code></btn-code>
                </div>
                <v-input placeholder="输入新密码" type="password"></v-input>
                <v-input placeholder="确认密码" type="password"></v-input>
                <btn class="btn">确认</btn>
                <p class="page-bottom fs-26">
                    <a class="fs-gray" href="">或通过服务电话</a>   
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
    .page-password {
        .btn {
        	margin-top: .64rem; // 48px
        }
		.page-bottom {
			margin-top: .46666667rem; // 35px
            a {
                text-decoration: underline;
            }
		}
    }
</style>