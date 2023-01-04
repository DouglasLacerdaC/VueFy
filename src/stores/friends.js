import { defineStore } from "pinia";

export const useFriends = defineStore('useFriends', {
    state: () => {
        return {
            friends: [
                {
                    avatarUrl: 'https://uploads.spiritfanfiction.com/historias/capitulos/202104/treinando-sasuke-imagine-22053473-070420211037.png',
                    name: 'Doug',
                    genre: 'Rock',
                    activity: 'online'
                },
                {
                    avatarUrl: 'https://kanto.legiaodosherois.com.br/w350-h320-k1-cfill-k0/wp-content/uploads/2022/07/legiao_7qs8dAmVul2y.jpg.webp',
                    name: 'Alícia',
                    genre: 'Desconhecido',
                    activity: 'online'
                },
                {
                    avatarUrl: 'https://i.pinimg.com/564x/d6/a3/1e/d6a31e7216c8f8bc3e4da92df1b4f9b8.jpg',
                    name: 'fy',
                    genre: '--------- :)',
                    activity: 'offline'
                },
            ]
        }
    },
    getters: {
        onFriends() {
            return this.friends.filter(friend => friend.activity === 'online')
        }
    }
})