<template>
    <button class="anchor__button btn" :id="id">{{ text }}</button>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
</style>