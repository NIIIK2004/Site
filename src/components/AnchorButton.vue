<template>
    <a class="anchor__button btn" :href="href">{{ text }}</a>
</template>

<script>
export default {
    props: {
        href: {
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