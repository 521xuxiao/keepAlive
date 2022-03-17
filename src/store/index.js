import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        catchList: []
    },

    getters: {

    },

    mutations: {
        keepAlive(state, component) {
            !state.catchList.includes(component) && state.catchList.push(component)
        },
        noKeepAlive(state) {
            state.catchList = [];
        }
    },

    actions: {

    },

    modules: {

    }
})
