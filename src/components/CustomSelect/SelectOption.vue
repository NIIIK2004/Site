<template>
    <li @click="selectOption">{{ option }}</li>
</template>

<script>
export default {
    props: ['option', 'index', 'selectedOptionIndex'],
    methods: {
        selectOption() {
            this.$emit('select-option', this.index);
        }
    },
    computed: {
        isSelected() {
            return this.index === this.selectedOptionIndex;
        }
    },
    directives: {
        'selected-option': {
            mounted(el, binding) {
                if (binding.value) {
                    el.classList.add('selected');
                }
            },
            updated(el, binding) {
                if (binding.value) {
                    el.classList.add('selected');
                } else {
                    el.classList.remove('selected');
                }
            }
        }
    }
}
</script>