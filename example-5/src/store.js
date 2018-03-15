import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            'Milk',
            'Sugar',
            'Tea'
        ],
        selectedProducts: []
    },
    mutations: {
        updateProducts: (state, selectedProducts) => {
            console.log(selectedProducts);
            state.selectedProducts = selectedProducts
        }
    }
})
