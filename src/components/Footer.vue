<template>
    <footer>
        <ul>
            <li v-for="(k,item) in list" :class="{'active': active==k+1}">
                <a href="">{{item.title}}</a>
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
                    { title: '首页', url: '' },
                    { title: '商城', url: '' },
                    { title: '消息', url: '' },
                    { title: '我的', url: '' },
                ]
            }
        }
    }
</script>
<style lang="less">
    @import '../assets/less/public.less';
    footer {
        @f-h: 1.30666667rem/* 98px */;
        height: @f-h;
        border-top: solid 1px @c-d8d8d8;
        position: fixed;
        bottom: 0;
        z-index: @zx100;
        ul {
            width: @body-w;
            display: flex;
        }
        li {
            flex: 1;
            height: @f-h;
            display: flex;
            justify-content: center;
            align-items: center;
            &.active a {
                color: @c-f26b00;
            }
            &:first-of-type {
                .icon-background('tab_shouye_nor@3x.png', 'tab_shouye_sel@3x.png');
            }
            &:nth-of-type(2) {
                .icon-background('tab_shangcheng_nor@3x.png', 'tab_shangcheng_sel@3x.png');
            }
            &:nth-of-type(3) {
                .icon-background('tab_xiaoxi_nor@3x.png', 'tab_xiaoxi_sel@3x.png');
            }
            &:last-of-type {
                .icon-background('tab_wode_nor@3x.png', 'tab_wode_sel@3x.png');
            }
            .icon-background(@base, @active){
                a:before {
                    .background(@base);
                }
                &.active a:before {
                    .background(@active);
                }
            }
        }
        a {            
            text-align: center;
            font-size: @fs-22;
            color: @c-999999;
            line-height: @fs-22;
            &:before {
                content: "";
                @wh: .66666667rem/* 50px */;
                display: block;
                width: @wh;
                height: @wh;
                margin: 0 auto;
                margin-bottom: .12rem/* 9px */;
            }
        }
    }
</style>