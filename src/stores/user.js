import { defineStore, storeToRefs } from "pinia";

export const useUserStore = defineStore('useUserStore', {
    state: () => {
        return {
            user: {
                name: '',
                image: ''
            },
            accessed: false
        }
    },
})