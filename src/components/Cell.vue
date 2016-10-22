<template>
    <div class="component-cell bb" 
        :class="{'tap-active': arrow}"
        @click="handleClick">
        <div class="grid" :style="{'height': h}">
            <slot>
                <div class="title fs-black">
                    <slot name="title"></slot>
                    {{title}}
                </div>
                <div class="value fs-gray" :class="{'arrow': arrow}">
                    {{value}}
                    <slot name="value"></slot>
                </div>
            </slot>
        </div>
    </div>
</template>
<script>
    export default {
        /**
         * 高度默认100px，可通过 h 配置，内容垂直居中，默认有一像素下边框
         *
         * 
         * 默认用法
         * <cell title="部门名称" value="基础技术部"></cell>  
         * 
         * 带箭头时，默认有点击背景效果
         * <cell title="部门名称" value="基础技术部" :arrow="true"></cell> 
         *
         * 内容单独分发，如需要，可与title内容和value内容共存
         * <cell>
         *     <target slot="title">...</target> 
         *     <target slot="value">...</target> 
         * </cell> 
         *
         * 整体分发
         * <cell>
         *     <target class="class">...</target>
         * </cell>
         * 
         * 
         */
        props: {
            link: [Object,String],
            arrow: Boolean,
            title: String,
            value: String,
            h: String
        },
        methods: {
            handleClick() {
                this.link && this.$router.go(this.link);
            }
        }
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .component-cell {
        width: @body-w;
        background-color: #fff;
        font-size: @fs30;
        .grid {
            display: flex;
            align-items: center;
            height: 1.33333333rem; // 100px  默认100px
        }
        .title {
            display: flex; 
            height: 100%;
            align-items: center; 
        }
        .value {
            display: flex; 
            height: 100%;
            flex: 1;
            justify-content: flex-end;
            align-items: center;
            &.arrow:after {
                content: " ";
                display: block;
                width: .28rem; // 21px
                height: .44rem; // 33px
                .background-img('jiantou_zuo@3x.png');
                margin-left: .33333333rem; // 25px
            }
        }
    }
</style>