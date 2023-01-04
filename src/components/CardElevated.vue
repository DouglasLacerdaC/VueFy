<script>

export default {
    name: 'CardElevated',
    props: {
        content: {
            img: String,
            title: String,
            description: String
        }
    }
}

</script>

<template>

    <div class="card">
        <div class="front">
            <img :src="content.img" alt="">
        </div>
        <div class="elevated">
            <h5>{{ content.title }}</h5>
            <p>{{ content.description }}</p>
        </div>
    </div>

</template>

<style scoped>

.card {
    position: relative;
    border-radius: 10px;
    cursor: pointer;
    width: 150px;
    height: 150px;
    transition: 200ms;
}

.card .front img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
}

.card .elevated {
    opacity: 0;
    width: 150px;
    height: 150px;
    background-color: #00000090;
    position: absolute;
    top: 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 10px;
    transition: 200ms;
}

.card .elevated p {
    font-size: 12px;
}

.card:hover {
    transform: scale(.95);
}

.card:hover .elevated {
    opacity: 1;
}

</style>