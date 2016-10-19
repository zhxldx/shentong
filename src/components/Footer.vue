<template>
    <footer class="component-footer">
        <ul>
            <li><a v-link="{path: '/', exact: true}" class="tap-active" href="javascript:;">首页</a></li>
            <li><a v-link="{path: '/shop', exact: true}" class="tap-active" href="javascript:;">商城</a></li>
            <li><a v-link="{path: '/message', exact: true}" class="tap-active" href="javascript:;">消息</a></li>
            <li><a v-link="{path: '/user', exact: true}" class="tap-active" href="javascript:;">我的</a></li>
        </ul>
    </footer>
</template>
<style lang="less">
    @import '~src/styles/mixin.less';
    .component-footer {
        width: @body-w;
        height: @footer-h;
        background-color: #fff;
        border-top: solid 1px @c-d8d8d8;
        box-sizing: border-box;
        ul {
            display: flex;
        }   
        li {
            flex: 1;
            a:before {
                content: " ";
                display: block;
                .wh(.66666667rem); // 50px
            }
            a.v-link-active {
                color: @orange;
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
                    .background-img(@base);
                }
                &.active a:before {
                    .background-img(@active);
                }
            }
        } 
        a {
            display: flex;
            flex-direction: column;
            height: @footer-h;
            align-items: center;
            justify-content: center;  
            font-size: @fs22;
            color: @c-999999; 
        }   
    }    
</style>