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
@import "../public/css/global.css";
@import "../public/css/fonts.css";

body {
    font-family: "Jost", sans-serif;
}

@import "../public/css/reset.css";

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #CAFD5E;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 106px;
  box-sizing: border-box;
}

.loading-progress {
  font-size: 100px;
  font-weight: bold;
}
@import "../public/css/root.css";

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
