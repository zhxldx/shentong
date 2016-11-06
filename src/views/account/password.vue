<template>
    <page-title title="忘记密码"></page-title>
    <div class="page page-password">
        <div class="grid mt50">
                <v-input placeholder="手机号码" type="tel" :value.sync="phone"></v-input>
                <div class="code-area">
                    <v-input w="6.26666667rem" placeholder="输入验证码" :value.sync="code"></v-input>
                    <btn-code :phone="phone"></btn-code>
                </div>
                <v-input placeholder="输入新密码" type="password" :value.sync="password"></v-input>
                <v-input placeholder="确认密码" type="password" :value.sync="confirmPwd"></v-input>
                <btn class="btn" @click="handleSubmit">确认</btn>
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

    import http from 'lib/http'
    import utils from 'lib/utils'
    import { loading,toast } from 'vx/actions'
    export default {
    	data() {
    		return {
    			phone: '',
                code: '',
                password: '',
                confirmPwd: ''
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
        	handleSubmit() {
                if(!this.verification()) return;
                http.handle(this, 'user/forgetPassword', {
                    phone: this.phone,
                    password: this.password,
                    verificationCode: this.code
                })
                .then(() => {
                    this.toast('修改密码成功');
                    this.$router.go('/login');
                })
            },
            verification() {
                if(this.phone == '') {
                    this.toast('请输入手机号');
                    return false;
                }
                if(!utils.phoneVerfiy(this.phone)) {
                    this.toast('请输入正确的手机号');
                    return false;
                }
                if(this.code == '') {
                    this.toast('请输入验证码');
                    return false;
                }
                if(this.password == '') {
                    this.toast('请输入密码');
                    return false;
                }
                if(this.confirmPwd == '') {
                    this.toast('请确认密码');
                    return false;
                }
                if(this.confirmPwd != this.password) {
                    this.toast('两次输入密码不一致');
                    return false;
                }
                return true;
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