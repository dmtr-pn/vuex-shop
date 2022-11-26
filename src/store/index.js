import { createStore } from 'vuex'

export default createStore({
    state: {
        cart: []
    },
    mutations: {
        add(state, data) {
            let found = state.cart.find(product => product.id == data.id)

            if(!found){
                state.cart.push(data)
                state.cart.find(product => product.id == data.id).count++;
            }
        },
        delete(state, id){
            for (let i = 0; i < state.cart.length; i++) {
                if(state.cart[i].id == id){
                    state.cart.splice(i, 1)
                }
            }
        },
        addCount(state, data){
            state.cart.find(product => product.id == data).count++;
        },
        removeCount(state, data){
            let res = state.cart.find(product => product.id == data);
            if(res.count != 1){
                res.count--;
            }
        },
    },
    actions: {
        addItem({commit}, data){
            commit('add', data)
        },
        deleteItem({commit}, id){
            commit('delete', id)
        },
        addCount({commit}, id){
            commit('addCount',id)
        },
        removeCount({commit}, id){
            commit('removeCount',id)
        }
    },
    getters: {
        getLenght(state){
            return state.cart.length
        },
        getItem: (state) => (id) => {
            return state.cart.find(product => product.id == id);
        }
    }
})
