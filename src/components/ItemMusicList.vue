<script>

export default {
    name: 'ItemMusicList',
    props: {
        content: {
            name: String,
            band: String,
            music: {
                banner: String,
                url: String,
            }
        }
    }
}

</script>

<template>
    <div class="item-list">
        <button>
            <i class="fa-solid fa-play"></i>
        </button>
        <div class="wrapper">
            <img :src="content.music.banner" :alt="`Capa da música ${content.name}`">
            <div class="get-music">
                <h6>{{ content.name }}</h6>
                <span>{{ content.band }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>

.item-list {
    background-color: var(--gray800);
    border-radius: 10px;
    padding: 15px;
    display: flex;
    gap: 10px;
}

.item-list button {
    background-color: transparent;
    width: 50px;
    height: 50px;
    border: none;
    transition: 200ms;
}

.item-list button:hover {
    transform: scale(.9);
}

.item-list button:hover i {
    color: var(--color-first);
}

.item-list button i {
    font-size: 20px;
    transition: 200ms;
}

.item-list .wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    border-left: 1px solid #ffffff10;
    padding: 0 20px;
}

.item-list img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.item-list .get-music h6, .item-list .get-music span {
    max-width: 200px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.item-list .get-music h6 {
    user-select: none;
    font-weight: 500;
}
.item-list .get-music span {
    font-size: 12px;
    color: #ffffff80;
    cursor: pointer;
    user-select: none;
}

.item-list .get-music span:hover {
    text-decoration: underline;
}

</style>