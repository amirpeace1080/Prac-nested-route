import Vuex from 'vuex'
import Promise from 'core-js/features/promise'

export default () =>{
    return new Vuex.Store({
        state: {
            posts: []
        },
        mutations: {
            SET_POST(state, posts){
                state.posts = posts
            }
        },
        actions: {
            getPost({commit}){
                return new Promise((resolve, reject)=>{
                    this.$axios({
                        url: 'https://jsonplaceholder.typicode.com/posts',
                        method: 'GET'
                    })
                    .then((resp)=>{
                        commit('SET_POST', resp.data)
                        resolve()
                    })
                    .catch((err) =>{
                        console.log(err, statusPost);
                    })
                })
            }
        },
        getters: {}
    })
}