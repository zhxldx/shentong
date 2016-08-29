<template>
    <footer>
        <ul>
            <li v-for="(k,item) in list" :class="{'active': active==k+1}">
                <a href=""><i></i>{{item.title}}</a>
            </li>
        </ul>
    </footer>
</template>
<script>
    export default {
        props: ['active'],
        data() {
            return {
                list: [
                    {
                        title: '首页',
                        url: ''
                    },
                    {
                        title: '商城',
                        url: ''
                    },
                    {
                        title: '消息',
                        url: ''
                    },
                    {
                        title: '我的',
                        url: ''
                    },
                ]
            }
        }
    }
</script>
<style lang="less">
    @import '../assets/less/public.less';
    footer {
        width: @body-w;
        @f-h: 1.31rem/* 98px */;
        height: @f-h;
        border-top: solid 1px @c-d8d8d8;
        position: fixed;
        bottom: 0;
        z-index: @zx100;
        ul {
            width: @body-w - .93rem/* 70px */ * 2;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
        }
        li {
            height: @f-h;
            display: flex;
            flex-flow: column;
            justify-content: center;
            &.active a {
                color: @c-f26b00;
            }
            &:first-of-type {
                i {
                    .background('../../assets/img/tab_shouye_nor@2x.png');
                }
                &.active i {
                    .background('../../assets/img/tab_shouye_sel@2x.png');
                }

            }
            &:nth-of-type(2) {
                i {
                    .background('../../assets/img/tab_shangcheng_nor@2x.png');
                }
                &.active i {
                    .background('../../assets/img/tab_shangcheng_sel@2x.png');
                }
            }
            &:nth-of-type(3) {
                i {
                    .background('../../assets/img/tab_xiaoxi_nor@2x.png');
                }
                &.active i {
                    .background('../../assets/img/tab_xiaoxi_sel@2x.png');
                }
            }
            &:last-of-type {
                i {
                    .background('../../assets/img/tab_wode_nor@2x.png');
                }
                &.active i {
                    .background('../../assets/img/tab_wode_sel@2x.png');
                }
            }
        }
        a {            
            text-align: center;
            font-size: @fs-22;
            color: @c-999999;
            line-height: @fs-22;
        }
        i {
            @wh: .67rem/* 50px */;
            display: block;
            width: @wh;
            height: @wh;
            margin-bottom: .12rem/* 9px */;
        }
    }
</style>