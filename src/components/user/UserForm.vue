<template>
    <v-form>
        <v-container>
            <v-card class="pa-2">
                <v-text-field v-model="user.name" label="Name" />
                <v-text-field v-model="user.email" label="Email" />
                <v-text-field v-model="user.password" type="password" label="Password" />
                <v-btn color="primary" @click.prevent="saveUserForm">Save</v-btn>
                <v-btn color="blue lighter-3 ml-2" style="color: white" @click.prevent="$emit('clear')">Clear</v-btn>
                <slot />
            </v-card>
        </v-container>
    </v-form>
</template>

<script>
import { mapActions } from 'axios'

export default {
    props: ['user'],
    methods: {
        saveUserForm() {
            this.$store.dispatch('saveUser', this.user)
            this.$emit('clear')
        }
    }
}
</script>

<style>

</style>