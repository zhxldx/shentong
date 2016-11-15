<template>
    <page-title title="给领导打分"></page-title>
    <div class="page page-leader" v-if="!$loadingRouteData">
        <div class="leader bg-white bd">
            <img :src="userInfo.headImg|img">
            <p class="fs-32 fs-gray-plus pt20">{{userInfo.name}}</p>
            <p class="fs-26 fs-gray pt10">{{userInfo.department}}</p>
        </div>
        <div class="grid mt50">
            <btn @click="handleClick">给领导打分</btn>
        </div>
    </div>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import Btn from 'components/Btn'

    import http from 'lib/http'
    import locache from 'lib/locache'
    import { loading, toast } from 'vx/actions'
    let userInfo = locache.get('STuserInfo');
    export default {
        data() {
            return {
                userInfo: userInfo,
                userId: userInfo.userId,
                superiorUserId: userInfo.superiorUserId,
                list: {},
            }
        },
        components: {
            PageTitle,
            Btn
        },
        methods: {
            handleClick() {
                return http.getData(this, 'mark/giveMark', {
                    userId: this.userId,
                    superiorUserId: this.superiorUserId
                })
                .then((list) => {
                    if(!list.length) {
                        this.toast('暂无可以打分的题目');
                    }
                    this.$router.go({path: '/user/leaderScore'});
                });
                
            }
        },
        route: {
            data() {
                return http.getData(this, 'user/getSuperiorUser', {
                    userId: this.userId,
                })
                .then((list) => {
                    this.$set('list', list);
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
<style lang="less">
    @import '~src/styles/mixin.less';
    .page-leader {
        .leader {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 4.26666667rem; // 320px
            img {
                .wh(1.6rem);
                border-radius: 50%;
            }
        }
    }
</style>