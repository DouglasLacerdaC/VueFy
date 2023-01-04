<script>

import { defineAsyncComponent } from 'vue'

const CardMusic = defineAsyncComponent(() => import('./CardMusic.vue'))

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import { recommendedSongs } from '../data/playlists';

export default {
    data() {
        return {
            recommendedList: recommendedSongs
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        CardMusic
    },
    setup() {
        const onSwiper = (swiper) => { };
        const onSlideChange = () => { };
        return {
            onSwiper,
            onSlideChange,
        };
    },
};
</script>

<template>
    <swiper :slides-per-view="4.5" :space-between="10" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="(song, index) in recommendedList">
            <CardMusic :song="song" :index="index" />
        </swiper-slide>
    </swiper>
</template>