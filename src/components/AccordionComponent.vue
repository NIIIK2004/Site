<template>
    <div class="faq__wrapper">
        <div class="faq__field-wrapper">
            <div class="faq__filed" v-for="(faq, i) in faqBase" :key="i">
                <div class="open__faq" @click="closeAllFaq(faq)">
                    <h3 class="deactive" :class="faq.open ? 'active' : '' ">
                        {{ faq.q }}
                    </h3>
                    <p class="invisible" :class="faq.open ? 'visible' : '' ">{{ faq.a }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {ref} from 'vue'

export default {
    name: "AccordionsForFAQ",


    setup() {
        const faqBase = ref([
            {
                q: 'Что нужно, чтобы начать обучение?',
                a: 'Цель и Мотивация, Расписание и Время, Наши ресурсы и Материалы Самодисциплина и настойчивость, все, а поддержка и менторство уже с нашей стороны.',
                open: false,
            },
            {
                q: 'Не могу прийти на урок, что делать?',
                a: 'Если вы не можете прийти на урок, вам необходимо связаться с преподавателем или учебным заведением, чтобы уведомить их о вашем отсутствии',
                open: false,
            },
            {
                q: 'Хочу работать у вас, как начать?',
                a: 'Если вы хотите работать в нашей компании, вам необходимо ознакомиться с нашими вакансиями на сайте',
                open: false,
            },
            {
                q: 'Мало времени, боюсь не буду успевать',
                a: 'Если у вас мало времени и вы боитесь, что не сможете успеть выполнить все свои задачи, вам необходимо организовать свое время и приоритизировать задачи.',
                open: false,
            },
        ])
        const closeAllFaq = (item) => {
            if (!item.open) {
                faqBase.value.forEach(el => el.open = false)
            }
            item.open = !item.open;
        }
        return {faqBase, closeAllFaq}
    }
}


</script>

<style scoped>

.faq__wrapper {
    margin-top: 50px;
    text-align: left;
    max-width: 100%;
    margin: 40px auto;
}

.faq__field-wrapper {
    margin-top: 20px;
}

.faq__filed {
    border: 1px solid transparent;
    border-radius: 10px;
    margin: 10px 0;
}

.open__faq {
}

.invisible {
    visibility: hidden;
    opacity: 0;
    height: 0;
    transition: opacity .3s, height .3s, padding .3s, visibility .3s;
}

.visible {
    visibility: visible;
    height: 40px;
    opacity: 1;
    padding: 0px 25px;
}

h3 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0 24px 0;
    margin: 5px 0;
}

.open__faq {
    cursor: pointer;
}

.deactive::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    background: url("../../public/images/icons/arrow-down.svg") no-repeat;
    right: 0;
    margin-top: 15px;

    transition: all .3s;
}

.deactive.active::after {
    transform: rotateX(-180deg);
}

@media (max-width: 650px) {
    .visible {
        padding: 0;
    }
}

@media (max-width: 950px) {
    .visible {
        height: 90px;
    }
}

@media (max-width: 530px) {
    .visible {
        height: 60px;
    }

    h3 {
        font-size: 18px;
        padding: 5px 0 10px 0;
    }

    p {
        font-size: 15px;
    }

    .deactive[data-v-0ba99845]::after {
        margin-top: 10px;
    }
}


@media (max-width: 460px) {
    .deactive.active::after {
        margin-top: -20px;
    }

    h3 {
        font-size: 19px;
    }

    p {
        font-size: 17px;
    }

    .visible[data-v-0ba99845] {
        height: auto;
    }

    .deactive[data-v-0ba99845]::after {
        display: none;
    }
}
</style>