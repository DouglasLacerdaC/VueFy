<script>

import { defineAsyncComponent } from 'vue'

const LeftBar = defineAsyncComponent(() => import('../../components/LeftBar.vue'))
const BottomPlayer = defineAsyncComponent(() => import('../../components/BottomPlayer.vue'))
const RightBar = defineAsyncComponent(() => import('../../components/RightBar.vue'))


import { useUserStore } from '../../stores/user'

export default {
    name: 'MainBaseLayout',
    components: {
        LeftBar,
        BottomPlayer,
        RightBar
    },
    unmounted() {
        const store = useUserStore()
        store.$reset()
    }

}

</script>

<template>

    <div class="base-layout">

        <div class="grid">

            <left-bar />
        
            <section class="router">
                <router-view />
            </section>

            <right-bar />
        
        </div>
        
        <div class="base-player">
            <bottom-player />
        </div>

    </div>


</template>

<style scoped>

.base-layout {
    position: fixed;
    height: 100vh;
    width: 100%;
}

.base-layout .grid {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    max-width: 1300px;
    margin: 0 auto;
    height: calc(100vh - 110px);
}

.router:hover::-webkit-scrollbar-thumb {
    background-color: var(--gray700);
}

.base-layout .grid .router {
    padding: 40px 20px;
    overflow-y: auto;
}

.base-player {
    width: 100%;
    height: 110px;
}

</style>