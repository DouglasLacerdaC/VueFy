<script>

import { mapState } from 'pinia'
import { defineAsyncComponent } from 'vue'

const CardElevated = defineAsyncComponent(() => import('../components/CardElevated.vue'))
const ItemMusicList = defineAsyncComponent(() => import('../components/ItemMusicList.vue'))
const Recommended = defineAsyncComponent(() => import('../components/Recommended.vue'))
const BannerWelcome = defineAsyncComponent(() => import('../components/BannerWelcome.vue'))
const Loading = defineAsyncComponent(() => import('../components/Loading.vue'))

import { randomSongs } from '../data/playlists'

import { forYou } from '../data/lists'
import { useUserStore } from '../stores/user'
 
export default {
    name: 'Home',
    components: {
        CardElevated,
        ItemMusicList,
        Recommended,
        BannerWelcome,
        Loading
    },
    data() {
        return {
            forYou,
            randomSongs,
            message: String,
            onLoading: true
        }
    },
    mounted() {
        const date = new Date()
        const currentHour = date.getHours()

        if(currentHour >= 0 && currentHour < 5) this.message = 'Boa noite'
        if(currentHour >= 5) this.message = 'Bom dia'
        if(currentHour >= 12) this.message = 'Boa tarde'
        if(currentHour >= 19) this.message = 'Boa noite'

        setTimeout(() => this.onLoading = false, 1200) 

    },
    computed: {
        ...mapState(useUserStore, ['user']),
        goodMessage() {
            return `${this.message}, ${this.user.name}`
        }
    }
}

</script>

<template>

    <loading v-if="onLoading"/>
    
    <h2>{{ goodMessage }}</h2>
    
    <div>

        <section>
            <banner-welcome />
        </section>

        <section>
            <h4>Músicas recomendadas</h4>
            <recommended />
        </section>
        
        <section class="wrapper">

            <div class="for-you">
                <h4>Para você</h4>
                <div class="grid">
                    <card-elevated v-for="card in forYou" :content="card" />
                </div>
            </div>

            <div class="latest-songs">
                <h4>Aleatórias</h4>
                <div class="list">
                    <item-music-list v-for="music in randomSongs" :content="music"/>
                </div>
            </div>

        </section>

    </div>

</template>

<style scoped>

section {
    margin: 15px 0;
    padding: 20px 0;
}
.wrapper {
    display: flex;
    gap: 60px;
    border-top: 1px solid var(--gray800);
    border-bottom: 1px solid var(--gray800);
    padding: 20px 0 30px 0;
}

h4 {
    margin: 0 0 15px 0;
    font-weight: 500;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.latest-songs {
    width: 100%;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

</style>