
<template>
    <page-title title="申请加分"></page-title>
    <div class="page page-add-integral">
        <text-card
        title="申请理由"
        placeholder="请输入申请理由"
        :value.sync="reason"></text-card>
    </div>
    <div class="bottom bg-white bt">
    	<btn @click="handleSubmit">提 交</btn>
    </div>
	
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import Cell from 'components/Cell'
    import Btn from 'components/Btn'
    import TextCard from '../note/text-card'
    import http from 'lib/http'
    import { loading,toast } from 'vx/actions'
    import locache from 'lib/locache.js'
    let userInfo = locache.get('STuserInfo');
    export default {
    	data() {
    		return {
    			userId: userInfo.userId,
                departmentId: userInfo.department_Id,
                reason: ''
    		}
    	},
        components: {
            PageTitle,
            Cell,
            Btn,
            TextCard
        },
        methods: {
            handleSubmit() {
                if(!this.verification()) return;
                let param = [{
                    userId: this.userId,
                    reason: this.reason,
                    departmentId: this.departmentId
                }];
                http.handle(this, 'integral/apply', {
                    integralApply: JSON.stringify(param)
                })
                .then((userInfo) => {
                    this.toast('申请成功');
                    this.reason = '';
                });
            },
            verification() {
                if(this.reason == '') {
                    this.toast('请输入申请理由');
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
</style>