<script>

export default {
    name: 'RoundedButton',
    props: {
        text: '',
    },
    emits: ['eventClick']
}

</script>

<template>
    <button @click.prevent="$emit('eventClick')">{{ text }}</button>
</template>

<style scoped>

button {
    padding: 10px;
    background-color: var(--gray800);
    border: none;
    border-radius: 10px;
    transition: 200ms;
}

button:hover {
    background-color: var(--color-first);
    padding: 10px 20px;
}

</style>