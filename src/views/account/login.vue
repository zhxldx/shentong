<template>
    <page-title title="登陆"></page-title>
    <div class="page page-login">
    	<div class="grid mt50">
            <v-input placeholder="手机号码" type="tel" :value.sync="phone"></v-input>
            <v-input placeholder="输入密码" type="password" :value.sync="password"></v-input>
            <btn class="btn" @click="handleSubmit">登录</btn>
            <p class="fs-28">
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
    import vInput from 'components/Input'
    import PageTitle from 'components/PageTitle'
    import Btn from 'components/Btn'

    import http from 'lib/http'
    import { loading,toast } from 'vx/actions'
    import locache from 'lib/locache.js'
    export default {
    	data() {
    		return {
    			phone: '',
                password: ''
    		}
    	},
        components: {
            PageTitle,
            vInput,
            Btn,
        },
        methods: {
        	handleSubmit() {
        		if(!this.verification()) return;
                http.handle(this, 'user/login', {
                    account: this.phone,
                    password: this.password
                })
                .then((userInfo) => {
                    locache.set('STuserInfo', userInfo, 10000);
                    this.toast('登录成功');
                    this.$router.go('/');
                });
        	},
            verification() {
                if(this.phone == '') {
                    this.toast('请输入手机号');
                    return false;
                }
                if(this.password == '') {
                    this.toast('请输入密码');
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
    .page-login {
        .btn {
        	margin-top: .64rem; // 48px
        }
		p {
			display: flex;
			justify-content: space-between;
			margin-top: .46666667rem; // 35px 
		}
    }
</style>