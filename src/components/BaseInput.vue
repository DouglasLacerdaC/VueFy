<script>

export default {
    name: 'BaseInput',
    props: {
        modelValue: String,
        label: String,
        placeholder: String,
    },
    emits: ['update:modelValue']
}

</script>

<template>
    <div class="input-group">
        <label v-if="label" for="">{{ label }}</label>
        <input 
            type="text" 
            :value="modelValue"
            v-bind:placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<style scoped>

.input-group {
    display: flex;
    flex-direction: column;
}

.input-group input {
    background-color: var(--gray800);
    padding: 10px 20px;
    border: 2px solid transparent;
    border-radius: 10px;
    transition: 200ms;
}

.input-group input:focus {
    border-color: var(--color-first);
}

.input-group label {
    color: var(--gray700);
    font-size: 14px;
}

</style>