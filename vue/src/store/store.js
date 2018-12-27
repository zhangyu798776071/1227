import Vue from 'vue';
import Vuex from 'vuex';
import storage from '../untils/storage.js';

Vue.use(Vuex);
const setViews = visitedViews => {
    storage.set("visitedViews", visitedViews);
};
const store = new Vuex.Store({
    state: {
        count: 0,
        show: false,
        visitedViews: storage.get("visitedViews") || [],
        cachedViews: []
    },
    getters: {
        del(state) {
            state.count;
        }
    },
    mutations: {
        increment(state, payload) {
            state.count += payload;
        },
        shows(state) {
            state.show = state.show ? false : true
        },
        addVisited: (state, route) => {
            if (state.visitedViews.some(view => view.name === route.name)) return;
            state.visitedViews.push({
                name: route.name,
                title: route.meta.title || "empty-name",
                path: route.path
            });
            if (route.cache) {
                state.cachedViews.push(route.name);
            }
            setViews(state.visitedViews);
        },
        removeVisited: (state, tag) => {
            for (let [index, viewItem] of state.visitedViews.entries()) {
                if (viewItem.path === tag.path) {
                    state.visitedViews.splice(index, 1);
                    break;
                }
            }
            for (let [index, name] of state.cachedViews.entries()) {
                if (name === tag.name) {
                    state.cachedViews.splice(index, 1);
                }
            }
            setViews(state.visitedViews);
        },
        closeVisited: (state, route) => {
            const newView = new Array({
                name: route.name,
                title: route.meta.title || "empty-name",
                path: route.path
            });
            state.visitedViews = newView;
            setViews(newView);
        },
        closeAll: state => {
            state.visitedViews = [];
            setViews([]);
        }
    },
    actions: {
        shows(ctx) {
            ctx.commit('increment')
        },
        addVisitedTag({ commit }, route) {
            commit('addVisited', route);
        },
        removeVisitedTag({ commit, state }, tag) {
            return new Promise(resolve => {
                commit('removeVisited', tag);
                resolve(state.visitedViews);
            });
        },
        closeOtherView({ commit }, route) {
            commit(closeVisited, route);
        },
        closeAllView({ commit }) {
            return new Promise(resolve => {
                commit('closeAll');
                resolve();
            });
        }
    }
})
export default store;