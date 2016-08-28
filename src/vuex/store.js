import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
	carts: []
}
setTimeout(function(){
	state.carts = [
			{
				name: '1111',
				price: 24
			},
			{
				name: '2222',
				price: 56
			}
		]
	},3000)
const mutations = {
	ADDCARTS (state, goods) {
    	state.carts.push(goods)
  	},
  	REMOVE (state, index) {
  		state.carts.splice(index,1)
  	},
  	REMOVEP (state, name) {
  		for (var i = 0; i < state.carts.length; i++) {
  			if(name == state.carts[i].name){
  				state.carts.splice(i,1);
  			}
  		}
  	},
  	
}

export default new Vuex.Store({
	state,
	mutations
})
