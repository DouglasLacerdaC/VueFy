<script>
</script>

<template>
    <div class="banner">
        <h4>Encontre as melhores músicas no VueFy :)</h4>
        <button>Explorar</button>
    </div>
</template>

<style scoped>

.banner {
    background-image: url('/imgs/bannerWelcome.jpeg');
    background-size: cover;
    height: 250px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.banner button {
    padding: 7px 20px;
    width: min-content;
    border: none;
    border-radius: 5px;
    transition: 200ms;
    margin-top: 15px;
    background-color: var(--color-first);
}

.banner button:hover {
    transform: scale(.95);
}

</style>