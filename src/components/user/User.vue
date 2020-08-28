<template>
  <v-container fluid>
    <v-row>
        <v-col cols="12" md="4">
            <UserForm :user="user" @clear="clear">
                <v-btn @click="loadUsers" class="warning ml-2">Load Users</v-btn>
            </UserForm>
        </v-col>
        <v-col cols="12" md="8">
            <UsersList :users="users" @loadUser="loadUser" />
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import UserForm from './UserForm'
import UsersList from './UsersList'

export default {
    components: { UserForm, UsersList },
    computed: {
        ...mapGetters({
            users: 'getUsers'
        })
    },
    methods: {
        clear() {
            this.user = {
                id: null,
                name: '',
                email: '',
                password: ''
            }
        },
        loadUsers() {
            this.$store.dispatch('loadUserBd')
        },
        loadUser(user) {
            this.user = user
        }
    },
    data() {
        return {
            user: {
                id: null,
                name: '',
                email: '',
                password: ''
            }
        }
    },
    beforeCreate() {
        this.$store.dispatch('loadUserBd')
    }
}
</script>

<style>

</style>