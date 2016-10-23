<template>
    <page-title title="英雄榜"></page-title>
    <div class="tabs bb">
        <ul>
            <li class="active">
                <span>总排行</span>
            </li>
            <li>
                <span>部门排行</span>
            </li>
            <li>
                <span>部门PK</span>
            </li>
        </ul>
    </div>
    <div class="page page-rank">
        <div class="rank-list pt20">
            <table>
                <thead class="fs-white">
                    <tr>
                        <th><span>排名</span></th>
                        <th><span>姓名</span></th>
                        <th><span>积分</span></th>
                        <th><span>职位</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in 15">
                        <td class="fs-gray-small">1</td>
                        <td class="fs-black">
                            <img src="../../assets/paihangbang_touxiang@3x.png">
                            李大仁
                        </td>
                        <td class="fs-gray">1000</td>
                        <td class="fs-gray">商务经理</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import vFooter from 'components/Footer'
    import Cell from 'components/Cell'
    export default {
        components: {
            PageTitle,
            vFooter,
            Cell
        },
    }
</script>
<style lang="less" scoped>
    @import '~src/styles/mixin.less';
    .tabs {
        z-index: 100;
        ul {
            display: flex;
        }
        li {
            flex: 1;
            display: flex;
            height: 1.33333333rem; // 100px
            align-items: center;
            font-size: @fs30;
            background-color: #fff;
            position: relative;
            &:nth-of-type(2) span {
                border-right: solid 1px @bd-color;
                border-left: solid 1px @bd-color;
            }
            &.active {
                span {
                    color: @orange;
                }
                &:after {
                    content: " ";
                    display: block;
                    width: 2.26666667rem; // 170px
                    height: .05333333rem; // 4px
                    background-color: @orange;
                    position: absolute;
                    bottom: 0;
                    .translate(-50%, 0);
                    left: 50%;
                }
            }
        }
        span {
            width: 100%;
            text-align: center;
            color: @c-999999;
        }
    }
    .page-rank {
        table {
            width: 100%;
            th, td {
                padding: 0;
                border: none;
                text-align: center;
                position: relative;
                &:after {
                    content: " ";
                    display: block;
                    position: absolute;
                    width: 1px;
                    height: .4rem;
                    background-color: #fff;
                    right: 0;
                    .translate(0, -50%);
                    top: 50%;
                }
                &:last-of-type:after {
                    width: 0;
                    height: 0;
                }
            }
            thead {
                background-color: @orange;
                font-size: @fs28;
                th {
                    height: .8rem; // 60px
                }
            }
            tbody {
                tr {
                    background-color: #fff;
                    &:nth-of-type(2n) {
                        background-color: @bg-color;
                    }
                }
                td {
                    height: 1.6rem; // 120px
                    border-bottom: solid 1px @bd-color;
                    &:after {
                        background-color: @bd-color;
                    }
                    img {
                        .wh(.93333333rem);
                        vertical-align: -.32rem; // 24px
                        padding-right: .13333333rem; // 10px
                    }
                }
                .fs-black, .fs-gray-small {
                    font-size: @fs30;
                }
                .fs-gray {
                    font-size: @fs28;
                }
            }
        }
    }
</style>