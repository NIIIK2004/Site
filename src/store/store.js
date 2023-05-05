import { createStore } from 'vuex';

const store = createStore({
    state: {
        isLoading: true,
    },
    mutations: {
        setLoading(state, loading) {
            state.isLoading = loading;
        },
    },
    actions: {
        setLoading(context, loading) {
            context.commit('setLoading', loading);
        },
    },
});

export default store;
