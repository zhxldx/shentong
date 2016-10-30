
<template>
    <page-title title="日志"></page-title>
    <div class="tabs bb">
        <ul>
            <li class="fs-30" :class="{'active': type == 1}" @click="handleTab(1, '日报')">
                <span>日报</span>
            </li>
            <li class="fs-30" :class="{'active': type == 2}" @click="handleTab(2, '周报')">
                <span>周报</span>
            </li>
        </ul>
    </div>
    <div class="page page-note">
        <div class="note-list bt mt20" v-if="!$loadingRouteData && list.length">
        	<cell h="2rem" 
            :arrow="true" 
            :link="{path: detialLink, query: {diaryId: item.id}}"
            v-for="item of list">
        		<div slot="title">
        			<p class="fs-black text-overflow">{{item.introduction}}</p>
        			<p class="fs-gray">{{item.createtime}}</p>
        		</div>
        	</cell>
        </div>
        <empty-tips v-if="!$loadingRouteData && !list.length"
        :img="img"
        :text="tips"></empty-tips>
    </div>
    <div class="bottom bg-white bt">
    	<btn @click="handleRelease">发布</btn>
    </div>
	
	<div class="note-picker bg-white" transition="slide" v-show="show" v-lazy='500'>
	    <div class="release-btn">
	    	<a class="fs-black" 
            href="javascript:;"
            @click="handleGoRelease('/note/release/day')">日 报</a>
	    	<a class="fs-black" 
            href="javascript:;"
            @click="handleGoRelease('/note/release/week')">周 报</a>
	    </div>
	    <a class="cancle fs-gray-plus bt fs-36" 
	    href="javascript:;"
	    @click="handleCancle">取 消</a>
	</div>
	
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import vFooter from 'components/Footer'
    import Cell from 'components/Cell'
    import Btn from 'components/Btn'
    import EmptyTips from 'components/EmptyTips'
    import img from 'assets/wu_xiaoxi@2x.png';

    import http from 'lib/http'
    import { loading, toast, mask } from 'vx/actions'
    export default {
    	data() {
    		return {
    			show: false,
                list: [],
                type: 1,
                tips: '',
                img: img
    		}
    	},
        components: {
            PageTitle,
            vFooter,
            Cell,
            Btn,
            EmptyTips
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
            },
            getList(type) {
                let url = (type == 2) ? 'report/getWeekReport' : 'report/getDiary';
                let tips = (type == 2) ? '暂无周报' : '暂无日报';
                return http.getData(this, url, {
                    userId: 1
                })
                .then((list) => {
                    this.tips = tips;
                    this.$set('list', list);
                });
            },
            handleTab(type, tips) {
                if(type == this.type) return;
                this.type = type;
                this.getList(type);
            }
        },
        computed: {
            detialLink() {
                return (this.type == 1) ? '/note/detail/day' : '/note/detail/week';
            }
        },
        route: {
            data() {
                return this.getList(1);
            }
        },
        vuex: {
            actions: {
                mask,
                loading,
                toast
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
        display: flex;
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