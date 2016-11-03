<template>
    <div class="component-picker-modal" transition="slide" v-if="init" v-show="show">
        <header class="bb">
            <span>{{title}}</span>
            <span @click="handleComplete">{{actionMsg}}</span>
        </header>
        <scroller lock-x :height="scrollHeight">
            <slot></slot>
        </scroller>
    </div>
</template>
<script>
    import scroller from 'vux/src/components/scroller'
    import { mask } from 'vx/actions'
    export default {
        props: {
            // 双向绑定
            show: {
                twoWay: true,
                type: Boolean
            },
            init: false,
            title: String,
            actionMsg: String
        },
        data() {
            return {
                scrollHeight: '',
            }
        },
        components: {
            scroller
        },
        methods: {
            handleComplete() {
                this.show = false;
                this.mask(false);
            }
        },
        watch: {
            init(val) {
                if(val) {
                    let scroll = $('.xs-container').height();
                    this.scrollHeight = scroll > 500 ? `${$(window).width()*500/750}px` : `${scroll}px`;
                }
            },
            show(val) {
                val && this.mask(true);
            }
        },
        vuex: {
            actions: {
                mask
            }
        },
        ready() {
            this.mask(this.show);
        },
        destroyed() {
            this.mask(false);
        }
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .component-picker-modal {
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: @zx500;
        background-color: #fff;
        header {
            display: flex;
            justify-content: space-between;
            span {
                display: block;
                .line-height(.93333333rem); // 70px
                padding: 0 .44rem; // 33px
                color: #0dad51;
            }
        }
        &.slide-transition {
            transition: transform .2s linear;
            transform: translateY(0);
        }
        &.slide-enter, &.slide-leave {
            transform: translateY(100%);
        }
    }
</style>