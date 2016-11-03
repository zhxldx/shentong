
<template>
    <page-title title="发布日报"></page-title>
    <div class="page page-release">
    <text-card
        title="简介"
        placeholder="请输入简介"
        :value.sync="introduction"></text-card>

        <text-card
        title="已完成工作"
        placeholder="请输入已完成工作"
        :value.sync="finishedwork"></text-card>

        <text-card
        title="未完成工作"
        placeholder="请输入未完成工作"
        :value.sync="unfinishedwork"></text-card>

        <text-card
        title="遇到的问题"
        placeholder="请输入遇到的问题"
        :value.sync="problems"></text-card>

        <text-card
        title="备注"
        placeholder="请输入备注"
        :value.sync="remarks"></text-card>
    </div>
    <div class="bottom bg-white bt">
    	<btn @click="handleSubmit">提 交</btn>
    </div>
	
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import vFooter from 'components/Footer'
    import Cell from 'components/Cell'
    import Btn from 'components/Btn'
    import TextCard from './text-card'

    import http from 'lib/http'
    import { loading,toast } from 'vx/actions'
    import locache from 'lib/locache.js'
    export default {
    	data() {
    		return {
    			introduction: '',
                finishedwork: '',
                unfinishedwork: '',
                problems: '',
                remarks: '',
                userId: locache.get('STuserInfo').userId
    		}
    	},
        components: {
            PageTitle,
            vFooter,
            Cell,
            Btn,
            TextCard
        },
        methods: {
            handleSubmit() {
                if(!this.verification()) return;
                http.handle(this, 'report/publishDiary', {
                    userId: this.userId,
                    introduction: this.introduction,
                    finishedwork: this.finishedwork,
                    unfinishedwork: this.unfinishedwork,
                    problems: this.problems,
                    remarks: this.remarks
                })
                .then((userInfo) => {
                    this.toast('发布成功');
                    this.$router.go('/note');
                });
            },
        	verification() {
                if(this.introduction == '') {
                    this.toast('请输入简介');
                    return false;
                }
                if(this.finishedwork == '') {
                    this.toast('请输入已完成工作');
                    return false;
                }
                if(this.unfinishedwork == '') {
                    this.toast('请输入未完成工作');
                    return false;
                }
                if(this.problems == '') {
                    this.toast('请输入遇到的问题');
                    return false;
                }
                if(this.remarks == '') {
                    this.toast('请输入备注');
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