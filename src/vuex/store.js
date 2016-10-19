import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
    toast: {
    	message: '',
    	show: false
    },
    loading: false,
    mask: false
}
var toastTimer = 1;
function toastFun(state, message) {
    if(!state.toast.show) {
        openToast();
        closeToastTimer();
    }else {
        closeToast(state, message);
        setTimeout(function(){
            openToast();
        },100);
        closeToastTimer();
    }
    function openToast() {
        state.toast = {
            message: message,
            show: true
        }
    }
    function closeToast() {
        state.toast = {
            message: '',
            show: false
        }
    }
    function closeToastTimer() {
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function(){
            closeToast();
        },1500);
    }
}
const mutations = {
    TOAST(state, message) {
        toastFun(state, message);
    },
    LOADING(state, loading) {
    	state.loading = loading;
    },
    MASK(state, mask) {
        state.mask = mask;
    }
}
export default new Vuex.Store({
    state,
    mutations
})