<script>
import { mapActions, mapState } from 'pinia';
import { usePlaylistActive } from '../stores/playlistActive';


export default {
    name: 'CardMusic',
    props: {
        song: {
            name: String,
            band: String,
            genre: String,
            music: {
                banner: String,
                url: String,
                duration: String
            }
        },
    },
    methods: {
        ...mapActions(usePlaylistActive, ['setNewMusic']),
        startedMusic(song) {
            this.setNewMusic(song)
        }
    },
    computed: {
        ...mapState(usePlaylistActive, ['musicActive'])
    }
}

</script>

<template>
    <button class="card-music" @click.prevent="startedMusic(song)">
        <img :src="song.music.banner" :alt="`Capa da música - ${song.name}`">
        <div class="description">
            <h6>{{ song.name }}</h6>
            <span>{{ song.band }}</span>
        </div>
    </button>
</template>

<style scoped>

.card-music {
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    transition: 200ms;
    text-align: start;
}

.card-music:hover {
    transform: scale(.95);
}

.card-music img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px #00000060;
}

.card-music .description {
    margin: 10px 0 0;
}

.card-music .description h6 {
    user-select: none;
    font-weight: 500;
}
.card-music .description span {
    font-size: 12px;
    color: #ffffff80;
    cursor: pointer;
    user-select: none;
}

.card-music .description h6, .card-music .description span {
    max-width: 140px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

</style>