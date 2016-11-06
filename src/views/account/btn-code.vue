<template>
    <a href="javascript:;"
     class="account-btn-code radius8 mt20 fs-white fs-28"
     :class="{'disabled': disabled}"
     @click="handleClick">{{content}}</a>
</template>
<script>
    import http from 'lib/http'
    import utils from 'lib/utils'
    import { loading,toast } from 'vx/actions'
    export default {
        props: {
            phone: String
        },
        data() {
            return {
                disabled: false,
                content: '获取验证码',
                time: 60,
            }
        },
        methods: {
            handleClick() {
                if(!this.verification()) return;
                if(this.disabled) return;
                http.handle(this, 'user/sendVericationCode', {
                    phone: this.phone
                })
                .then(() => {
                    this.toast('发送成功');
                    this.cutdownTime();
                });
            },
            verification() {
                if(!this.phone) {
                    this.toast('请输入手机号');
                    return false;
                }
                if(!utils.phoneVerfiy(this.phone)) {
                    this.toast('请输入正确的手机号');
                    return false;
                }
                return true;
            },
            cutdownTime() {
                let time = this.time;
                this.disabled = true;
                this.format(time);
                let timer = setInterval(() => {
                    if(time > 1) {
                        time -= 1; 
                    }else {
                        time = 0;
                        this.disabled = false;
                        clearInterval(timer);
                    }
                    this.format(time);
                }, 1000);
            },
            format(time) {
                if(time > 0) {
                    this.content = `已发送 (${time}s)`;
                }else {
                    this.content = '获取验证码';
                }
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
    .account-btn-code {
        display: inline-block;
        width: 2.66666667rem; // 200px
        .line-height(1.17333333rem);
        text-align: center;
        @bgcolor: #fcac34;
        background-color: @bgcolor;
        &:active {
            background-color: darken(@bgcolor, 10%);
        }
        &.disabled {
            background-color: @c-cccccc;
        }
    }
</style>