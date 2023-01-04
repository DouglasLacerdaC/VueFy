<script>

import { defineAsyncComponent } from 'vue'

const BaseInput = defineAsyncComponent(() => import('./BaseInput.vue'))
const RoundedButton = defineAsyncComponent(() => import('./RoundedButton.vue'))

import { useUserStore } from '../stores/user';

export default {
    name: 'FormAccess',
    data() {
        return {
            surname: '',
            random: Number
        }
    },
    components: {
        BaseInput,
        RoundedButton
    },
    methods: {
        access() {
            if (this.surname == '') return

            const random = Math.floor(Math.random() * 11)
            const store = useUserStore()
            
            store.$patch({
                user: {
                    name: this.surname,
                    image: random
                },
                accessed: true
            })

            this.$router.push('/base/home')
        }
    }
}

</script>

<template>

    <form>
        <BaseInput placeholder="Apelido" v-model="surname" />
        <RoundedButton @eventClick="access" value="surname" text=">"/>
    </form>

</template>

<style scoped>

form {
  display: flex;
  gap: 10px;
}

</style>