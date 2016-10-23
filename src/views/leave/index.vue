<template>
    <page-title title="请假"></page-title>
    <div class="page page-leave">
        <cell h="1.73333333rem" v-for="item in 15">
            <div slot="title">
                <p class="fs-black">请假标题</p>
                <p class="fs-gray text-overflow fs-26">同意</p>
            </div>
            <span class="fs-gray fs-26" slot="value">07-11 09:00</span>
        </cell>
    </div>
    <div class="bottom bg-white bt">
      <btn link="/leave/ask">请 假</btn>
    </div>
  
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import Cell from 'components/Cell'
    import Btn from 'components/Btn'
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
        }
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .page-leave {
        .textarea {
            height: 80%;
            textarea {
                width: 100%;
            }
        }
        .fs-black {
            line-height: .6rem; // 45px
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