<template>
    <page-title title="发布日报"></page-title>
    <div class="page page-leave">
        <cell title="开始时间" value="2016-07-07 10:00:00" :arrow="true"></cell>
        <cell title="结束时间" value="2016-07-08 10:00:00" :arrow="true"></cell>
        <cell title="请假天数" value="2天"></cell>
        <text-card
        title="请假理由"
        placeholder="请输入请假理由"
        :value="value"></text-card>
        <cell class="apply-person mt20" h="2.66666667rem">
            <div slot="title">
                审批人
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
    .page-leave {
        .cell div[slot=title] {
            height: 100%;
            input {
                height: 100%;
            }
        }
        .textarea {
            height: 80%;
            textarea {
                width: 100%;
            }
        }
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