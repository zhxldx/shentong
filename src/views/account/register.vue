<template>
    <page-title title="注册"></page-title>
    <div class="page page-register">
        <div class="grid mt50">
            <v-input placeholder="手机号码" type="tel" :value.sync="phone"></v-input>
            <div class="code-area">
                <v-input w="6.26666667rem" placeholder="输入验证码" :value.sync="code"></v-input>
                <btn-code :phone="phone"></btn-code>
            </div>
            <v-input placeholder="姓名" :value.sync="name"></v-input>
            <div class="departments-picker mt20 radius8 bd fs-gray" @click="handlePick">{{pickDepartmentName}}</div>
            <v-input placeholder="输入密码" type="password" :value.sync="password"></v-input>
            <v-input placeholder="确认密码" type="password" :value.sync="confirmPwd"></v-input>
            <btn class="btn" @click="handleSubmit">注册</btn>
            <p class="notice fs-gray fs-26">审核时间为1-2个工作日</p>
        </div>
    </div>
    <picker-modal title="选择部门" action-msg="完成" :show.sync="pickerShow" :init="pickerInit">
    	<div class="departments-picker-list">
    		<label v-for="item of departments" for="radio_{{$index}}">
    			<cell h="1.13333333rem" :title="item.name">
    				<input 
    					id="radio_{{$index}}" 
    					type="radio" 
    					name="departments" 
    					slot="value" 
    					:value="$index" 
    					v-model="pickerIndex">
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
    import http from 'lib/http'
    import utils from 'lib/utils'
    import { loading,toast } from 'vx/actions'
    export default {
    	data() {
    		return {
                pickerInit: false,
    			pickerShow: false,
    			pickerIndex: 0,
    			departments: [],
                phone: '',
                code: '',
                name: '',
                password: '',
                confirmPwd: '',
    		}
    	},
        components: {
            PageTitle,
            vInput,
            Btn,
            BtnCode,
            Cell,
            PickerModal,
        },
        methods: {
        	handlePick() {
        		if(this.departments.length) {
                    this.pickerShow = true;
                    this.pickerInit = true;
                }else {
                    http.getData(this, 'department/getDepartmentInfo')
                    .then((departments) => {
                        this.$set('departments', departments);
                        this.pickerShow = true;
                        this.pickerInit = true;
                    });
                }
        	},
            handleSubmit() {
                if(!this.verification()) return;
                http.handle(this, 'user/register', {
                    phone: this.phone,
                    name: this.name,
                    department: this.pickDepartmentId,
                    password: this.password,
                    verificationCode: this.code
                })
                .then(() => {
                    this.toast('注册成功');
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
                if(this.name == '') {
                    this.toast('请输入姓名');
                    return false;
                }
                if(!this.pickDepartmentId) {
                    this.toast('请选择部门');
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
        computed: {
            pickDepartmentName() {
                var departments = this.departments;
                return departments.length ? departments[this.pickerIndex].name : '所在部门'
            },
            pickDepartmentId() {
                var departments = this.departments;
                return departments.length ? departments[this.pickerIndex].id : false
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
    .page-register {
        .code-area {
        	display: flex;
        	justify-content: space-between;
        }
        .btn {
        	margin-top: 1.33333333rem; // 100px
        }
		.notice {
			text-align: center;
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
			.line-height(1.17333333rem);// 88px
			background-color: #fff;
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