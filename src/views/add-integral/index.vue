
<template>
    <page-title title="申请加分"></page-title>
    <div class="page page-add-integral">
        <text-card
        title="申请理由"
        placeholder="请输入申请理由"
        :value="value"></text-card>
    </div>
    <div class="bottom bg-white bt">
    	<btn>提 交</btn>
    </div>
	
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import Cell from 'components/Cell'
    import Btn from 'components/Btn'
    import TextCard from '../note/text-card'
    import { mask } from 'vx/actions'
    export default {
    	data() {
    		return {
    			show: false,
                value: ''
    		}
    	},
        components: {
            PageTitle,
            Cell,
            Btn,
            TextCard
        },
        methods: {
        	handleRelease() {
        		this.show = true;
        		this.mask(true);
        		$('.mask').on('click', () => {
        			this.handleCancle();
        		});
        	},
        	handleCancle() {
        		this.show = false;
        		this.mask(false);
        	}
        },
        vuex: {
            actions: {
                mask
            }
        }
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
</style>