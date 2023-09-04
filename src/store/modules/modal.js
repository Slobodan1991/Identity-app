
const state = {
    opened: false,
    currentOverlay: '',
    currentProp: undefined,
    closeX: false,
    modalOpened: false
};

const getters = {
    opened(state) {
        return  state.opened
    },
    currentOverlay(state) {
        return state.currentOverlay
    },
    currentProp(state) {
        return state.currentProp
    },
    closeX(state) {
        return state.closeX
    },
    modalOpened(state) {
        return state.modalOpened
    }
};

const mutations = {
    SET_MODAL_OPENED(state, status) {
        state.opened = status
    },
    SET_CURRENT_OVERLAY(state, currentOverlay) {
        state.currentOverlay = currentOverlay
    },
    SET_CURRENT_PROPS(state, props) {
        state.currentProp = props
    },
    SET_CLOSE_X(state, flag) {
        state.closeX = flag
    },
    SET_OPENED(state, status) {
        state.modalOpened = status
    }
};

const actions = {
    openModal({commit}, payload) {
        commit('SET_CURRENT_PROPS', payload.prop ? {...payload.prop} : null);
        commit('SET_CURRENT_OVERLAY', payload.overlay);
        commit('SET_OPENED', true)
    },
    closeModal({commit}) {
        commit('SET_OPENED', false);
        commit('SET_CURRENT_PROPS', null);
        commit('SET_CURRENT_OVERLAY', null);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

