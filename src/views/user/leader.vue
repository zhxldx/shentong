<template>
    <page-title title="给领导打分"></page-title>
    <div class="page page-leader" v-if="!$loadingRouteData">
        <div class="leader bg-white bd">
            <img src="../../assets/paihangbang_touxiang@3x.png">
            <p class="fs-32 fs-gray-plus pt20">爽肤水</p>
            <p class="fs-26 fs-gray pt10">似懂非懂说</p>
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
    export default {
        data() {
            return {
                userId: locache.get('STuserInfo').userId,
                list: {},
            }
        },
        components: {
            PageTitle,
            Btn
        },
        methods: {
            handleClick() {
                this.$router.go({path: '/user/leaderScore', query: {superiorUserId: this.list.superiorUserId}});
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