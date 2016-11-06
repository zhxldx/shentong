<template>
    <page-title title="给领导打分"></page-title>
    <div class="page page-leader-score" v-if="!$loadingRouteData">
        <div class="leader-score bg-white bd">
            <div class="grid">
                <p class="fs-34 fs-black mb20 mt20">{{currentData.question}}</p>
                <label for="radio_{{$index}}" v-for="item of currentData.questionItems">
                    <span class="fs-30 fs-gray-plus">A.{{item}}</span>
                    <input id="radio_{{$index}}" type="radio" name="answer-pick" :value="item" v-model="currentAswer">
                </label>
            </div>
        </div>
        <div class="grid mt50">
            <btn @click="nextQuestion">{{btnText}}</btn>
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
                superiorUserId: 0,
                btnText: '下一题',
                list: [],
                currentIndex: 0,
                currentAswer: '',
                totalPoint: 0
            }
        },
        components: {
            PageTitle,
            Btn
        },
        methods: {
            nextQuestion() {
                if(this.currentAswer == '') {
                    this.toast('请选择答案');
                    return;
                }
                if(this.btnText =='提交打分') {
                    this.handleSubmit();
                }
                if(this.list.length - 2 == this.currentIndex) {
                    this.btnText = '提交打分'
                }
                this.currentIndex += 1;
                switch (this.currentAswer) {
                    case '非常好':
                        this.totalPoint += 100;
                        break;
                    case '好':
                        this.totalPoint += 80;
                        break;
                    case '一般':
                        this.totalPoint += 60;
                        break;
                    case '较差':
                        this.totalPoint += 40;
                        break;
                }
                this.currentAswer = '';
            },
            handleSubmit() {
                let param = [{
                    userId: this.userId,
                    superiorUserId: this.superiorUserId,
                    totalPoint: this.totalPoint
                }];
                http.handle(this, 'mark/submitMark', {
                    score: JSON.stringify(param)
                })
                .then((userInfo) => {
                    this.toast('打分成功');
                    this.$router.go('/user/leader');
                });
            }
        },
        computed: {
            currentData() {
                if(this.list.length - 1 == this.currentIndex) return;
                let list = this.list[this.currentIndex];
                list.questionItems = list.questionItems.split('，');
                return list;
            }
        },
        route: {
            data(transition) {
                this.superiorUserId = transition.to.query.superiorUserId;
                return http.getData(this, 'mark/giveMark', {
                    userId: this.userId,
                    superiorUserId: this.superiorUserId
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
    .page-leader-score {
        .leader-score {
            padding: .26666667rem; // 20px
            label {
                height: .93333333rem; // 70px
                display: flex;
                align-items: center;
                span {
                    flex: 1;
                }
            }
            input {
                display: block;
                .wh(.42666667rem);
                .background-img('xuanze_nor@3x.png');
                &:checked {
                    .background-img('xuanze_sel@3x.png');
                }
            }
        }
    }
</style>