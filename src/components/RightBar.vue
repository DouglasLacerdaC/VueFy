<script>

import { mapState } from 'pinia';
import { useFriends } from '../stores/friends'

import ItemFriendList from './ItemFriendList.vue'

export default {
    name: 'RightBar',
    components: {
        ItemFriendList
    },
    computed: {
        ...mapState(useFriends, ['friends', 'onFriends']),
    }
}

</script>

<template>

    <aside>
        
        <h5>Amigos ativos</h5>
        <div class="active-friends">
            <item-friend-list v-for="friend in onFriends" :friend="friend" />
        </div>
        
        <h5>Todos</h5>
        <div class="active-friends">
            <item-friend-list v-for="friend in friends" :friend="friend" />
        </div>

    </aside>

</template>

<style scoped>

aside {
    width: 200px;
    height: 100%;
    padding: 30px 20px;
    overflow-y: auto;
}

aside:hover::-webkit-scrollbar-thumb {
    background-color: var(--gray700);
}

aside .active-friends {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
    margin-bottom: 10px;
}

</style>