<template>
    <page-title title="员工福利"></page-title>
    <div class="page page-welfare">
        <ul>
            <li class="bb" v-for="item in 10">
                <div class="grid">
                    <img src="../../assets/pic_a@2x.png">
                    <div class="name">
                        <p class="fs-black text-overflow">国内旅游一次国内旅游一次国内旅游一次</p>
                        <p class="fs-gray fs-26">
                            积分数：<span class="fs-orange">1000</span>
                        </p>
                    </div>
                    <div class="btn">
                        <a class="fs-white radius8"
                         href="javascript:;"
                         v-link="{path: '/welfare/detail'}">申请</a>
                        <p class="fs-gray pt20 fs-24">剩余名额：10</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    export default {
        components: {
            PageTitle
        },
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .page-welfare {
        li {
            padding: .26666667rem 0;
            .grid {
                display: flex;
                justify-content: space-between;
            }
            img {
                .wh(2.66666667rem);
            }
            .name {
                width: 3.73333333rem; // 280px
                .text-overflow {
                    padding: .53333333rem 0;
                }
                .fs-gray {
                }
            }
            .btn {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-end;
                a {
                    display: block;
                    width: 1.6rem; // 120px
                    .line-height(.66666667rem);
                    text-align: center;
                    background-color: @orange;
                }
            }
        }
    }
</style>