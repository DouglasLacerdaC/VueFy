<script>

import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';
import RoundedButton from './RoundedButton.vue';

export default {
    name: 'LeftBar',
    components: {
        RoundedButton
    },
    computed: {
        ...mapState(useUserStore, ['user'])
    }
}

</script>

<template>
    <aside>

        <div class="user">
            <img src="https://media.tenor.com/nn2EVzWA0TUAAAAd/yone-lol.gif" alt="">
            <span>{{ user.name }}</span>
        </div>

        <nav>
            <ul>
                <li>
                    <router-link to="/base/home">Home</router-link>
                </li>
                <li>
                    <router-link to="">Buscar</router-link>
                </li>
                <li>
                    <router-link to="">Favoritos</router-link>
                </li>
                <li class="logout">
                    <router-link to="/">Sair</router-link>
                </li>
            </ul>
        </nav>

    </aside>
</template>

<style scoped>

aside {
    width: 200px;
    height: 100%;
    padding: 30px 0;
    overflow-y: auto;
}

aside:hover::-webkit-scrollbar-thumb {
    background-color: var(--gray700);
}

aside .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;
}

aside .user img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid var(--gray800);
}

aside nav ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

aside nav ul li {
    padding: 0 20px;
    cursor: pointer;
}

aside ul li.logout a {
    color: var(--color-first) !important;
}

aside ul li a {
    transition: 200ms;
    font-size: 13px;
    font-weight: 300;
    color: #ffffff90;
}

aside ul li a:hover, aside ul li a.active-link {
    color: var(--white)
}

</style>