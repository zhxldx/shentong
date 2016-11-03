<template>
    <page-title title="英雄榜"></page-title>
    <div class="tabs bb">
        <ul>
            <li class="fs-30" :class="{'active': status==1}" @click="handleTab(1, rankList)">
                <span>总排行</span>
            </li>
            <li class="fs-30" :class="{'active': status==2}" @click="handleTab(2, rankListInDepartment)">
                <span>部门排行</span>
            </li>
            <li class="fs-30" :class="{'active': status==3}" @click="handleTab(3, departmentRank)">
                <span>部门PK</span>
            </li>
        </ul>
    </div>
    <div class="page page-rank" v-if="!$loadingRouteData">
        <div class="rank-list pt20">
            <table v-show="status==1">
                <thead class="fs-white fs-28">
                    <tr>
                        <th><span>排名</span></th>
                        <th width="45%"><span>姓名</span></th>
                        <th><span>积分</span></th>
                        <th><span>职位</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in rankList">
                        <td class="fs-gray-plus fs-30">{{$index + 1}}</td>
                        <td class="fs-black fs-30" style="text-align:left;">
                            <img :src="item.headImg|img">
                            {{item.name}}
                        </td>
                        <td class="fs-gray fs-28">{{item.integral}}</td>
                        <td class="fs-gray fs-28">{{item.position}}</td>
                    </tr>
                </tbody>
            </table>
            <table v-show="status==2" v-if="500">
                <thead class="fs-white fs-28">
                    <tr>
                        <th><span>排名</span></th>
                        <th width="45%"><span>姓名</span></th>
                        <th><span>积分</span></th>
                        <th><span>职位</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in rankListInDepartment">
                        <td class="fs-gray-plus fs-30">{{$index + 1}}</td>
                        <td class="fs-black fs-30" style="text-align:left;">
                            <img :src="item.headImg|img">
                            {{item.name}}
                        </td>
                        <td class="fs-gray fs-28">{{item.integral}}</td>
                        <td class="fs-gray fs-28">{{item.position}}</td>
                    </tr>
                </tbody>
            </table>

            <table v-show="status==3" v-if="500">
                <thead class="fs-white fs-28">
                    <tr>
                        <th><span>排名</span></th>
                        <th><span>部门名称</span></th>
                        <th><span>部门平均分</span></th>
                        <th><span>人数</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in departmentRank">
                        <td class="fs-gray-plus fs-30">{{$index + 1}}</td>
                        <td class="fs-black fs-30">
                            {{item.department}}
                        </td>
                        <td class="fs-gray fs-28">{{item.averageIntegral}}</td>
                        <td class="fs-gray fs-28">{{item.totalPerson}}</td>
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

    import http from 'lib/http'
    import { loading,toast } from 'vx/actions'
    export default {
        data() {
            return {
                status: 1,
                rankList: [],
                rankListInDepartment: [],
                departmentRank: []
            }
        },
        components: {
            PageTitle,
            vFooter,
            Cell
        },
        methods: {
            handleTab(status, list) {
                this.status = status;
                if(list.length) return;
                switch(status) {
                    case 2:
                        http.getData(this, 'rank/getRank', {
                            sort: 2
                        })
                        .then((list) => {
                            this.$set('rankListInDepartment', list);
                        });
                        break;
                    case 3: 
                        http.getData(this, 'rank/getDepartmentRank')
                        .then((list) => {
                            this.$set('departmentRank', list);
                        });
                        break;
                }
            }
        },
        route: {
            data() {
                return http.getData(this, 'rank/getRank', {
                    sort: 1
                })
                .then((list) => {
                    this.$set('rankList', list);
                });
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
                        border-radius: 50%;
                        vertical-align: -.32rem; // 24px
                        margin-left: 1.06666667rem; // 80px
                        margin-right: .26666667rem; // 20px
                    }
                }
            }
        }
    }
</style>