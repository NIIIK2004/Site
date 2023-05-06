<template>
    <div v-if="!isLoading">
        <div class="app">
            <transition name="slide-fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
    <div v-else>
        <div class="loading-screen">
            <div class="loading-progress">{{ progress }}%</div>
        </div>
    </div>
</template>

<script>
import {ref, watch} from 'vue';
import store from './store/store';

export default {
    setup() {
        const progress = ref(0);

        setTimeout(() => {
            store.dispatch('setLoading', false);
        }, 1000);

        setInterval(() => {
            if (progress.value < 100) {
                progress.value += 1;
            }
        }, 10);

        const isFirstLoad = ref(true);
        const isLoading = ref(store.state.isLoading);

        watch(
            () => store.state.isLoading,
            (newValue) => {
                isLoading.value = newValue;
            }
        );

        watch(
            () => isLoading.value,
            (newValue) => {
                if (newValue === false && isFirstLoad.value === true) {
                    isFirstLoad.value = false;
                }
            }
        );

        return {
            isFirstLoad,
            isLoading,
            progress,
        };
    },
};
</script>

<style>
@import "../public/css/reset.css";
@import "../public/css/fonts.css";
@import "../public/css/global.css";

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>
