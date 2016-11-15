
<template>
    <page-title title="提交意见或建议"></page-title>
    <div class="page page-add-integral">
        <text-card
        title="意见或建议"
        placeholder="请输入意见或建议"
        :value.sync="content"></text-card>
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
    export default {
    	data() {
    		return {
    			userId: locache.get('STuserInfo').userId,
                content: ''
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
                    content: this.content
                }];
                http.handle(this, 'suggestion/sumbitSuggest', {
                    suggestion: JSON.stringify(param)
                })
                .then((userInfo) => {
                    this.toast('提交成功');
                    this.content = '';
                });
            },
            verification() {
                if(this.content == '') {
                    this.toast('请输入意见或建议');
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