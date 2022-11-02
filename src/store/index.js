import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {}
const getters = {}
const mutations = {}
const actions = {}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store