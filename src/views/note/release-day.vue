
<template>
    <page-title title="发布日报"></page-title>
    <div class="page page-release">
        <text-card
        title="已完成工作"
        placeholder="请输入已完成工作"
        :value="value"></text-card>

        <text-card
        title="未完成工作"
        placeholder="请输入未完成工作"
        :value="value"></text-card>

        <text-card
        title="遇到的问题"
        placeholder="请输入遇到的问题"
        :value="value"></text-card>

        <text-card
        title="备注"
        placeholder="请输入备注"
        :value="value"></text-card>

        <cell class="apply-person mt20 bt" h="2.66666667rem">
            <div slot="title">
                日志接收人
                <i></i>
            </div>
        </cell>
    </div>
    <div class="bottom bg-white bt">
    	<btn>提 交</btn>
    </div>
	
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import vFooter from 'components/Footer'
    import Cell from 'components/Cell'
    import Btn from 'components/Btn'
    import TextCard from './text-card'
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
            vFooter,
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
    .page-release {
        .apply-person {
            div[slot=title] i{
                display: block;
                .wh(.8rem);
                .background-img('rzjsr@2x.png');
                margin-top: .33333333rem; // 25px 
            }
        }
    }
</style>