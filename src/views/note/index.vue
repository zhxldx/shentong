
<template>
    <page-title title="日志"></page-title>
    <div class="tabs bb">
        <ul>
            <li class="active">
                <span>日报</span>
            </li>
            <li>
                <span>周报</span>
            </li>
        </ul>
    </div>
    <div class="page page-note">
        <div class="note-list bt mt20">
        	<cell h="2rem" :arrow="true" v-for="item in 10">
        		<div slot="title">
        			<p class="fs-black text-overflow">货物送达益乐新村南区货物送达益乐新村南区</p>
        			<p class="fs-gray">08-11  09:00</p>
        		</div>
        	</cell>
        </div>
    </div>
    <div class="bottom bg-white bt">
    	<btn @click="handleRelease">发布</btn>
    </div>
	
	<div class="note-picker bg-white" transition="slide" v-show="show" v-lazy='500'>
	    <div class="release-btn">
	    	<a class="fs-black" 
            href="javascript:;"
            @click="handleGoRelease('/note/day')">日 报</a>
	    	<a class="fs-black" 
            href="javascript:;"
            @click="handleGoRelease('/note/week')">周 报</a>
	    </div>
	    <a class="cancle fs-gray-small bt" 
	    href="javascript:;"
	    @click="handleCancle">取 消</a>
	</div>
	
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import vFooter from 'components/Footer'
    import Cell from 'components/Cell'
    import Btn from 'components/Btn'
    import { mask } from 'vx/actions'
    export default {
    	data() {
    		return {
    			show: false
    		}
    	},
        components: {
            PageTitle,
            vFooter,
            Cell,
            Btn
        },
        methods: {
        	handleRelease() {
        		this.show = true;
        		this.mask(true);
        		$('.mask').on('click', () => {
        			this.handleCancle();
        		});
        	},
        	handleCancle() {
        		this.show = false;
        		this.mask(false);
        	},
            handleGoRelease(link) {
                this.handleCancle();
                this.$router.go(link);
            }
        },
        vuex: {
            actions: {
                mask
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '~src/styles/mixin.less';
    .tabs {
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
            &:first-of-type span {
                border-right: solid 1px @bd-color;
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
            color: @c-333333;
        }
    }
    .page-note {
        .note-list {
			div[slot=title] p:first-of-type {
				width: 5.6rem; // 420px
				padding-bottom: .17333333rem; // 13px
			}
        }
    }

    .note-picker {
    	position: fixed;
    	width: 100%;
    	height: 4.86666667rem; // 365px
    	z-index: @zx500;
    	bottom: 0;
    	.release-btn {
    		height: 3.53333333rem; // 265px
    		display: flex;
    		justify-content: space-around;
    		align-items: center;
    		a {
    			display: flex;
    			align-items: center;
    			flex-direction: column;
    			padding: 0 .8rem;
    			&:before {
					content: " ";
					display: block;
					width: .88rem; // 66px
					height: .96rem; // 72px
					margin-bottom: .4rem; // 30px
    			}
    			&:first-of-type:before {
    				.background-img('rili_yi@2x.png');
    			}
    			&:last-of-type:before {
    				.background-img('rili_qi@2x.png');
    			}
    		}
    	}
    	.cancle {
    		display: block;
    		.line-height(1.29333333rem);
    		text-align: center;
    		font-size: @fs36;
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