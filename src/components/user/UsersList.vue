<template>
    <v-container>
        <v-card>
            <v-simple-table>
                <template>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, id) in users.users" :key="id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.password }}</td>
                            <td>
                                <v-btn @click="execDeleteUser(user.id)" class="red darken-3 light" style="color: white">Delete</v-btn>
                                <v-btn @click="execLoadUser(user)" class="warning ml-2">Edit</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card>
    </v-container>
</template>

<script>

export default {
    props: ['users'],
    methods: {
        execDeleteUser(id) {
            this.$store.dispatch('deleteUser', id)
        },
        execLoadUser(user) {
            this.$emit('loadUser', user)
        }
    }
}
</script>

<style>
    tbody td {
        min-width: 200px
    }
</style>