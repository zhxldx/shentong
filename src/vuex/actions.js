export function add (store, goods) {
  store.dispatch('ADDCARTS', goods)
}
export function remove (store, index) {
  store.dispatch('REMOVE', index)
}
export function removep (store, name) {
  store.dispatch('REMOVEP', name)
}
