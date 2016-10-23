<template>
    <a href="javascript:;"
     class="account-btn-code radius8 mt20 fs-white fs-28"
     :class="{'disabled': disabled}"
     @click="handleClick">{{content}}</a>
</template>
<script>
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
                if(!this.verfiy()) return;
                if(this.disabled) return;
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
            },
            verfiy() {
                if(!this.phone) {
                    return true;
                }
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