
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
</style>