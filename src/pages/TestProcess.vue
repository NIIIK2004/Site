<template>
    <section class="quiz" v-if="!quizCompleted">
        <div class="container">
            <div class="progress-bar__wrapper">
                <div class="progress-bar__inner" :style="{ width: progressPercentage + '%'}"></div>
            </div>
            <div class="quiz-info">
                <span class="question">{{ getCurrentQuestion.question }}</span>
                <!--                <span class="score">Результат: {{ score }} / {{ questions.length }}</span>-->
            </div>
            <div class="options">
                <label v-for="(option, index) in getCurrentQuestion.options" :key="index"
                       :class="`option ${getCurrentQuestion.selected == index ? index == getCurrentQuestion.answer ? 'correct' : 'wrong' : ''} ${getCurrentQuestion.selected != null && index != getCurrentQuestion.selected ? 'disabled' : ''} `">
                    <input
                            type="radio"
                            :name="getCurrentQuestion.index"
                            :value="index"
                            v-model="getCurrentQuestion.selected"
                            :disabled="getCurrentQuestion.selected"
                            @change="SetAnswer"
                    >
                    <span>{{ option }}</span>
                </label>
            </div>
            <button
                    @click="NextQuestion"
                    :disabled="!getCurrentQuestion.selected">
                {{
                getCurrentQuestion.index == questions.length - 1 ? 'Завершить тест' : getCurrentQuestion.selected == null ? 'Выберите ответ' : 'Далее'
                }}
            </button>
        </div>
    </section>
    <section class="quiz__end" v-else>
        <h2>Вы закончили тест</h2>
        <p>Ваш результат: {{ score }} из {{ questions.length }}</p>
        <p>{{Math.round(score / questions.length * 100)}}%</p>

        <a>
            <router-link to="/" @click.prevent="animateTransition">На главную</router-link>
        </a>
        <a>
            <router-link to="/alltests" @click.prevent="animateTransition">К тестам</router-link>
        </a>
    </section>

</template>

<script setup>
import {computed, ref} from 'vue'


const questions = ref([
    {
        question: 'Слово “Автомобиль”',
        answer: 0,
        options: [
            'Car',
            'Cat',
            'Dog',
            'Hello',
        ],
        selected: null
    },

    {
        question: 'Слово “Собака”',
        answer: 2,
        options: [
            'Book',
            'Cat',
            'Dog',
            'Hello',
        ],
        selected: null
    },

    {
        question: 'Слово “Смартфон”',
        answer: 1,
        options: [
            'Laptop',
            'Phone',
            'Car',
            'School',
        ],
        selected: null
    },
    {
        question: 'Слово “Книга”',
        answer: 3,
        options: [
            'People',
            'Black',
            'Man',
            'Book',
        ],
        selected: null
    },
    {
        question: 'Слово “Мужчина”',
        answer: 0,
        options: [
            'Man',
            'Mouse',
            'Car',
            'Keyboard',
        ],
        selected: null
    },
    {
        question: 'Слово “Женщина”',
        answer: 3,
        options: [
            'People',
            'Black',
            'Man',
            'Woman',
        ],
        selected: null
    },
])

const quizCompleted = ref(false)
const currentQuestion = ref(0)

const score = computed(() => {
    let value = 0
    questions.value.map(q => {
        if (q.selected != null && q.selected == q.answer) {
            console.log('correct');
            value++
        }
    })
    return value
})

const getCurrentQuestion = computed(() => {
    let question = questions.value[currentQuestion.value]
    question.index = currentQuestion.value
    return question
})

const SetAnswer = evt => {
    questions.value[currentQuestion.value].selected = evt.target.value
    evt.target.value = null
}
const NextQuestion = () => {
    if (currentQuestion.value < questions.value.length - 1) {
        currentQuestion.value++
    } else {
        quizCompleted.value = true
    }
}


const progressPercentage = computed(() => {
    return Math.round((currentQuestion.value + 1) / questions.value.length * 100)
})

const animateTransition = () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'white';
    overlay.style.zIndex = '9999';

    const slide = document.createElement('div');
    slide.style.position = 'fixed';
    slide.style.bottom = '0';
    slide.style.left = '0';
    slide.style.width = '100%';
    slide.style.height = '0';
    slide.style.background = '#CAFD5E';
    slide.style.zIndex = '10000';
    slide.style.transition = 'all 0.5s ease-in-out';

    document.body.appendChild(overlay);
    document.body.appendChild(slide);

    setTimeout(() => {
        slide.style.height = '100vh';
        setTimeout(() => {
            slide.style.transform = 'translateY(-50%)';
            setTimeout(() => {
                slide.style.transform = 'translateY(-100%)';
                overlay.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(overlay);
                    document.body.removeChild(slide);
                }, 500);
            }, 500);
        }, 500);
    }, 10);
}

</script>

<style scoped>


.progress-bar__wrapper {
    width: 100%;
    height: 15px;
    background-color: #acacac3d;
    margin-bottom: 160px;
    border-radius: 50px;
}

.progressPercentage {
    width: 100%;
    height: 15px;
    border-radius: 50px;
}

.progress-bar__inner {
    height: 15px;
    border-radius: 50px;
    background-color: #B4FE1A;
    transition: width 0.5s ease-in-out;
}

.quiz {
    margin: 20px auto 0;
    max-width: 953px;
}

.quiz-info {
    display: block;
    justify-content: center;
    margin-bottom: 1rem;
    text-align: center;
}

.quiz-info .question {
    font-family: 'Stolzl';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 130%;
    text-align: center;


    color: #000000;
}

.quiz-info.score {
    font-family: 'Stolzl';
    font-weight: 400;
    font-size: 40px;
    line-height: 130%;
    color: #000000;
}

.options {
    margin-top: 80px;
    margin-bottom: 120px;
    display: flex;
    gap: 45px;
    justify-content: center;
}

.option {
    padding: 14px 70px;
    display: inline;
    border-radius: 5px;
    cursor: pointer;
    background-color: #B4FE1A;

    font-family: 'Stolzl';
    font-weight: 700;
    font-size: 25px;
    line-height: 130%;

    color: #000000;

    transition: background-color .4s;

    text-align: center;
    display: flex;
    align-items: center;
}

.option:hover {
    background-color: #A3E913;
}

.option.correct {
    background-color: #333BF4;
    color: #F3F3F3;
}

.option.wrong {
    background-color: #D22424;
}

.option:last-of-type {
    margin-bottom: 0;
}

.option.disabled {
    opacity: 0.5;
}

.option input {
    display: none;
}

button {
    border: none;
    cursor: pointer;
    color: #000;
    display: block;
    font-family: 'Stolzl';
    font-weight: 700;
    font-size: 30px;
    line-height: 130%;
    margin-left: auto;
}

button:disabled {
    opacity: 0.5;
}

h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
}

p {
    color: #8F8F8F;
    font-size: 1.5rem;
    text-align: center;
}

.quiz__end {
    display: flex;
    text-align: center;
    align-items: center;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
}

a {
    margin-top: 20px;
}


@media (max-width: 1064px) {
    .options {
        flex-wrap: wrap;
        flex-direction: column;
        gap: 15px;
        margin-top: 40px;
    }

    .option[data-v-33e60409] {
        justify-content: center;
    }

    .quiz-info .question[data-v-33e60409] {
        font-size: 48px;
    }

    button[data-v-33e60409] {
        background: #d9fe8c;
        border-radius: 15px;
        padding: 15px 50px;
        font-size: 23px;
    }
}

@media (max-width: 560px) {
    .option {
        font-size: 20px;
    }

    .quiz-info .question[data-v-33e60409][data-v-33e60409] {
        font-size: 32px;
    }
    button[data-v-33e60409] {
        margin-right: auto;
    }
    .options[data-v-33e60409] {
        margin-bottom: 50px;
    }

    .progress-bar__wrapper {
        margin-bottom: 60px;
    }

    .quiz {
        margin: 80px auto 0;
    }

}
@media (max-width: 460px) {
    .quiz-info .question[data-v-33e60409][data-v-33e60409][data-v-33e60409] {
        font-size: 27px;
    }
    button[data-v-33e60409][data-v-33e60409] {
        font-size: 19px;
    }
}
</style>