<template>
    <page-title title="商城"></page-title>
    <div class="page page-shop">
        <ul class="overflow-hidden">
            <li class="bb fl" v-for="item in 10">
                <a class="tap-active" href="javascript:;">
                    <img class="pt30" src="../../assets/pic_e@2x.png">
                    <p class="fs-black pt30">太阳伞</p>
                    <p class="fs-gray fs-26 pt10">点券数：<span class="fs-orange">100</span></p>
                </a>
            </li>
        </ul>
    </div>
    <v-footer></v-footer>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import vFooter from 'components/Footer'
    export default {
        components: {
            vFooter,
            PageTitle
        },
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .page-shop {
        li {
            width: @body-w/2;
            height: 6.4rem; // 480px
            box-sizing: border-box;
            &:nth-of-type(2n) {
                border-left: solid 1px @bd-color;
            }
            a {
                display: flex;
                height: 100%;
                flex-direction: column;
                align-items: center;
                img {
                    width: 4.26666667rem; // 320px
                    height: 4rem; // 300px
                }
                p {
                    width: 4.26666667rem; // 320px
                }
            }
        }
    }
</style>