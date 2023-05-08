<template>
    <div class="custom-select" :class="{ 'custom-select--active': showDropdown }" ref="select" @click="toggleDropdown">
        <div class="selected-option">{{ selectedOption }}</div>
        <ul :class="{ show: showDropdown }">
            <li v-for="option in options" :key="option" @click.stop="selectOption(option)">{{ option }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: ['Без разницы', 'Сурин А.Ю.', 'Машков Н.В.', 'Смольняков А.В.'],
            selectedOption: 'Без разницы',
            showDropdown: false,
            active: false
        };
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        selectOption(option) {
            if (this.selectedOption !== option || option === 'Без разницы') {
                this.selectedOption = option;
                this.showDropdown = false;
            }
        },
        closeDropdown(event) {
            if (this.$refs.select && !this.$refs.select.contains(event.target)) {
                this.showDropdown = false;
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.closeDropdown);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.closeDropdown);
    },
};
</script>

<style scoped>
.custom-select {
    position: relative;
    cursor: pointer;
    max-width: 100%;
    font-size: 20px;
    border-radius: 10px;
    padding: 20px 25px;
    line-height: 1;
    border: 1px solid #2D2924;
    color: #2D2924;
    background-color: transparent;
    transition: all .3s ease-in-out;
}

.custom-select {
    position: relative;
}

.custom-select--active {
    border-radius: 10px 10px 0 0;
}

.custom-select ul {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: -10;
    opacity: 0;
    overflow: hidden;
    max-height: 200px;
    list-style: none;
    margin: 0;
    padding: 0;
    border: 1px solid #2D2924;
    width: 100%;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    transition: all .3s ease-in-out;
}

.custom-select ul::-webkit-scrollbar {
    width: 5px;
}

.custom-select ul::-webkit-scrollbar-track {
    background-color: #B4FE1A;
}

.custom-select ul::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.custom-select ul.show {
    overflow-y: scroll;
    z-index: 10;
    opacity: 1;
    transition: all .3s;
}

.custom-select ul li {
    cursor: pointer;
    padding: 15px 25px;
    line-height: 1;
    transition: color .3s, background-color .3s;
}

.custom-select ul li:not(:last-child) {
    border-bottom: 1px solid #2D2924;
}

.custom-select ul li:hover {
    color: #fff;
    background-color: #2D2924;
}

@media (max-width: 1200px) {
    .custom-select {
        font-size: 18px;
    }
}

@media (max-width: 768px) {
    .custom-select,
    .custom-select ul li {
        padding: 20px 15px;
    }
}

@media (max-width: 600px) {
    .custom-select {
        font-size: 16px;
    }

    .custom-select,
    .custom-select ul li {
        padding: 17px 15px;
    }
}

@media (max-width: 468px) {
    .custom-select {
        font-size: 14px;
    }
}
</style>