const state = {
    currentLayout: null
}

const mutations = {
    SET_LAYOUT (state, userObj) {
        state.currentLayout = userObj
    }
}

const actions = {
    setUserObj: ({commit}, userObj) => {
        commit('SET_LAYOUT', userObj)
    }
}

export default {
    state, mutations, actions
}