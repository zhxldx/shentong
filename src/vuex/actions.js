// 提示信息
export function toast({ dispatch, state }, message) {
    dispatch('TOAST', message);
}
export function loading({ dispatch, state }, data) {
    dispatch('LOADING', data);
}