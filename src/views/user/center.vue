<template>
    <page-title title="我的"></page-title>
    <div class="page page-user-center">
        <div class="head">
            <div class="head-img">
                <img v-touch:tap="handleClick" :src="head || headImg || defaultImg">
                <input id="head-img" type="file" @change="handleChange($event)">
            </div>
            <p class="name fs-white pt20">李大仁</p>
            <p class="positon fs-white pt10">商务经理</p>
        </div>
        <div class="handle-list pt20">
            <cell class="bt" title="我的积分" :arrow="true" link="/user/integral">
                <img slot="title" src="../../assets/wode_wdjf@3x.png">
            </cell>
            <cell title="我的履历" :arrow="true" link="/user/resume">
                <img slot="title" src="../../assets/wode_lvli@3x.png">
            </cell>
            <cell title="兑换记录" :arrow="true" link="/user/exchange">
                <img slot="title" src="../../assets/wode_dhjl@3x.png">
            </cell>
            <cell title="给领导打分" :arrow="true" link="/user/leader">
                <img slot="title" src="../../assets/wode_glddf@3x.png">
            </cell>
            <cell title="自助申请加分" :arrow="true" link="/addIntegral">
                <img slot="title" src="../../assets/wode_zzsqjf@3x.png">
            </cell>
            <cell title="意见或者建议" :arrow="true">
                <img slot="title" src="../../assets/wode_yjhzjy@3x.png">
            </cell>
        </div>

    </div>
    <v-footer></v-footer>
</template>
<script>
    import PageTitle from 'components/PageTitle'
    import vFooter from 'components/Footer'
    import Cell from 'components/Cell'

    import CanvasUpload from 'src/lib/upload'
    import http from 'lib/http'
    import locache from 'lib/locache.js'
    import { loading, toast } from 'vx/actions'
    import defaultImg from 'assets/wode_touxiang.png'
    export default {
        data() {
            return {
                userInfo: locache.get('STuserInfo'),
                defaultImg: defaultImg,
                head: null
            }
        },
        components: {
            PageTitle,
            vFooter,
            Cell
        },
        computed: {
            headImg() {
                let headImg = this.userInfo.headImg;
                if(headImg) {
                    return http.imgHost + headImg;
                }
                return false;
            }
        },
        methods: {
            handleChange(event) {
                var el = event.target;
                var self = this;
                if(el.files && el.files[0]){
                    CanvasUpload(el, {
                        uploading: function(){
                            self.loading(true);
                        },
                        complete: function(data){
                            self.head = data;
                            let base64 = data.split('base64,')[1];
                            http.handle(self, 'user/upLoadHeadImg', {
                                userId: self.userInfo.userId,
                                headImg: base64
                            })
                            .then((headImg) => {
                                http.refreshUserInfo(self, self.userInfo.userId, locache);
                                // self.headImg = http.imgHost + headImg.imgPath;
                            })
                        },
                        error(msg) {
                            self.loading(false);
                            self.toast(msg);
                        }
                    });
                }
            },
            handleClick() {
                document.getElementById('head-img').click();
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
    .page-user-center {
        #head-img {
            display: none;
        }
        .head {
            height: 4.26666667rem; // 320px
            .background-img('wode_bg@3x.png');
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .head-img {
                border: solid .10666667rem #ff8a3c;
                border-radius: 50%;
                img {
                    .wh(1.6rem);
                    border: solid .10666667rem #ffab72;
                    border-radius: 50%;
                }
            }
            .name {
                font-size: .48rem; // 36px
            }
            .position {
                font-size: .37333333rem; // 28px
            }
        }
        .handle-list {
            img {
                .wh(.53333333rem);
                padding-right: .33333333rem; // 25px
            }
        }
    }
</style>