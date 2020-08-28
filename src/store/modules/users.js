import Vue from 'vue'

export default {
    state: {
        users: [],
        
    },
    getters: {
        getUsers(state) {
            return state
        },
        getUser(state, id) {
            let user = state.users.filter(user => user.id == id)
            if (user) {
                return user
            }
            return {}
        }
    },
    mutations: {
        setUsers(state, users) {
            state.users = []
            if (users) {
                users.map(user => {
                    state.users.push(user)
                })
            }
        },
        addUser(state, user) {
            state.users.push(user)
        },
        updUser(state, data) {
            state.users[data.index] = data.user
        }
    },
    actions: {
        saveUser(state, new_user) {
            if (new_user.id) {
                state.dispatch('saveUserBd', { action: 'upd', user: new_user })
                return
            }
            state.dispatch('saveUserBd', { action: 'inst', user: new_user })
        },
        saveUserBd(state, data) {
            let url = ''
            let method = ''
            if (data.action == 'inst') {
                url = 'usuarios.json'
                method = 'post'
            } else {
                url = `usuarios/${data.user.id}.json`
                method = 'patch'
            }
            Vue.prototype.$http[method](url, { name: data.user.name, email: data.user.email, password: data.user.password }).then(_ => {
                alert('Salvo com sucesso!')
            })
        },
        loadUserBd(state) {
            Vue.prototype.$http('usuarios.json').then(data => {
                data = data.data
                let users = []
                if (data) {
                    Object.entries(data).map(user => {
                        users.push({
                            id: user[0],
                            name: user[1].name,
                            email: user[1].email,
                            password: user[1].password
                        })
                    })
                }
                state.commit('setUsers', users)
            })
        },
        deleteUser(state, id) {
            Vue.prototype.$http.delete(`/usuarios/${id}.json`).then(_ => {
                alert('Deletado com sucesso!')
            })
        }

    }
}