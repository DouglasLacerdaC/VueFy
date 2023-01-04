<script>

import { mapActions, mapState } from 'pinia';
import { usePlaylistActive } from '../stores/playlistActive';

export default {
    name: 'BottomPlayer',
    data() {
        return {
            elementPlayActive: false,
            elementNoSound: false,
            volume: 0
        }
    },
    mounted() {
        this.volume = 0.2
    },
    methods: {
        play() {

            this.elementPlayActive = !this.elementPlayActive
            this.elementPlayActive ? this.$refs.audio.pause() : this.$refs.audio.play()

        },
        noSound() {

            this.volume = 0
            this.elementNoSound = !this.elementNoSound

        },
        ...mapActions(usePlaylistActive, ['nextMusic', 'comeBackMusic'])
    },
    computed: {
        ...mapState(usePlaylistActive, ['musicActive'])
    },
    watch: {
        volume(current) {
            this.$refs.audio.volume = current
        }
    }
}

</script>

<template>
    
    <audio :src="musicActive.music.url" controls autoplay ref="audio">
        <p>Player de música</p>
    </audio>

    <div class="player">
        <div class="container">
            
            <div class="details-music">
            
                <img :src="musicActive.music.banner" alt="">
            
                <div class="music">
                    <p>{{ musicActive.name }}</p>
                    <span>{{ musicActive.band }}</span>
                </div>
            
            </div>
            
            <div class="manipulate-player">

                <div class="controls">
                    <button>
                        <i class="fa-solid fa-arrow-rotate-right"></i>
                    </button>
                    
                    <button @click="comeBackMusic">
                        <i class="fa-solid fa-backward-step"></i>
                    </button>
                    
                    <div class="play">
                        
                        <button class="play" @click="play">

                            <span v-show="elementPlayActive">
                                <i class="fa-solid fa-play"></i>
                            </span>

                            <span v-show="!elementPlayActive">
                                <i class="fa-solid fa-pause"></i>
                            </span>

                        </button>

                    </div>
                    
                    <button @click="nextMusic">
                        <i class="fa-solid fa-forward"></i>
                    </button>

                    <button class="active">
                        <i class="fa-solid fa-music"></i>
                    </button>
                </div>
                
                <div class="duration">
                    <input type="range">
                </div>
            
            </div>

            <div>

                <div class="sound">

                    <button>
                        <i class="fa-solid fa-list"></i>
                    </button>
                    
                    <div class="measure">
                        <button @click="noSound">
                            <span v-show="!elementNoSound">
                                <i class="fa-solid fa-volume-high"></i>
                            </span>
                            <span v-show="elementNoSound">
                                <i class="fa-solid fa-volume-xmark"></i>
                            </span>
                        </button>
                        <input type="range" v-model="volume" max="1" min="0" step="0.01">
                    </div>
                
                </div>

            </div>

        </div>
    </div>

</template>

<style scoped>

audio {
    position: fixed;
    top: -30vh;
    display: none;
}

.player {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: var(--gray900);
    z-index: 1000;
    border-top: 1px solid #ffffff20;
}

.player .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px;
}

.player .container button {
    background-color: transparent;
    border: none;
    transition: 200ms;
}

.player .container button.active i {
    color: var(--color-first);
}

.player .container button i {
    color: #ffffff90;
    font-size: 14px;
    transition: 200ms;
}

.player .container button:hover i {
    color: var(--white);
}

.player .container .details-music {
    display: flex;
    align-items: center;
    gap: 20px;
}

.player .container .details-music img {
    width: 70px;
    height: 70px;
    border-radius: 10px;
}

.player .container .details-music .music p {
    font-size: 14px;
    line-height: 10px;
}

.player .container .details-music .music span {
    font-size: 12px;
    color: #ffffff90;
}

.player .container .manipulate-player {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.player .container .manipulate-player .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.player .container .manipulate-player .controls button.play {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: var(--white);
    border: none;
    transition: 200ms;
}

.player .container .manipulate-player .controls button.play i {
    color: var(--black);
}

.player .container .manipulate-player .controls button.play:hover {
    transform: scale(.9);
}

.player .container .manipulate-player .controls button.play:hover i {
    color: var(--color-first);
}

.player .container .manipulate-player .duration {
    width: 30vw;
}

.player .container .sound {
    display: flex;
    gap: 20px;
    align-items: center;
}

.player .container .sound .measure {
    display: flex;
    align-items: center;
    gap: 10px;
}

input[type="range"] {
    width: 100%;
    accent-color: var(--color-first);
    height: 3px;
    border-radius: 5px;
    cursor: pointer;
}

</style>