<template>
    <ul class="tabs__list">
        <li class="tabs__item" v-for="tab in names" :key="tab.name">
            <button :class="['tabs__button', {'tabs__button--active': tab.name === selectedTab}]"
                    @click="clickOnTab(tab.name)">
                {{ tab.label }}
            </button>
        </li>
    </ul>
    <div class="tab-content">
        <slot></slot>
    </div>
</template>

<script setup>
import {defineProps, defineEmits} from 'vue';

defineProps({
    names: {
        type: Array,
        required: true
    },
    selectedTab: {
        type: String,
        required: false
    }
})

const emit = defineEmits(['changeTab'])
const clickOnTab = (tabName) => {
    emit('changeTab', tabName)
}
</script>

<style scoped>
.tabs__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 30px;
}

.tabs__button {
    border-radius: 30px;
    padding: 14px 60px;
    cursor: pointer;
    line-height: 1;
    background-color: transparent;
    border: 1px solid #98e500;
    transition: background-color .3s, opacity .3s;
}

.tabs__button--active {
    background-color: #B4FE1A;
    border-color: transparent;
    pointer-events: none;
}

.tabs__button:hover {
    background-color: #B4FE1A;
}

.tabs__button:focus {
    opacity: .7;
}

@media (max-width: 600px) {
    .tabs__list {
        font-size: 16px;
        gap: 15px;
    }

    .tabs__button {
        padding: 14px 35px;
    }
}
</style>