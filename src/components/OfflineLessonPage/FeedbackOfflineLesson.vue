<template>
    <section class="feedback">
        <h2 class="feedback__title section-title">Форма обратной связи:</h2>
        <form class="feedback__form" action="">
            <ul class="feedback__list">
                <li class="feedback__item">
                    <label class="feedback__label" for="input_name">Имя</label>
                    <input class="feedback__input" id="input_name" type="text" placeholder="Введите имя" required>
                </li>
                <li class="feedback__item">
                    <label class="feedback__label" for="input_surname">Фамилия</label>
                    <input class="feedback__input" id="input_surname" type="text" placeholder="Введите фамилию" required>
                </li>
                <li class="feedback__item">
                    <label class="feedback__label" for="input_email">Почта</label>
                    <input class="feedback__input" id="input_email" type="email" placeholder="Введите почту" required>
                </li>
                <li class="feedback__item">
                    <label class="feedback__label" for="input_phone">Номер телефона</label>
                    <input class="feedback__input" id="input_phone" type="text" placeholder="Введите номер" required>
                </li>
                <li class="feedback__item">
                    <label class="feedback__label" for="input_teacher">Преподаватель</label>
                    <custom-select
                            v-model="selectedOptionIndex"
                            :options="options.map((option, index) => ({ ...option, value: index }))"
                    />
                </li>
            </ul>
            <p class="feedback__accept">
                Оставляя заявку, вы принимаете условия соглашения об обработке персональных данных
            </p>
            <button class="feedback__btn btn">Отправить заявку</button>
        </form>
    </section>
</template>

<script>
import CustomSelect from "@/components/CustomSelect/CustomSelect.vue";

export default {
    components: {
        CustomSelect
    },
    data() {
        return {
            options: [

            ],
            selectedOptionIndex: 0,
        };
    },
}
</script>

<style scoped>
.feedback__title {
    margin-bottom: 40px;
}

.feedback__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin-bottom: 15px;
}

.feedback__label {
    display: block;
    font-size: 20px;
    margin-bottom: 10px;
    line-height: 1;
}

.feedback__input {
    max-width: 100%;
    font-size: 20px;
    border-radius: 10px;
    padding: 20px 25px;
    line-height: 1;
    border: 1px solid #2D2924;
    color: #2D2924;
    background-color: transparent;
    transition: color .3s, background .3s, border .3s;
}

.feedback__input,
.feedback__input::placeholder {
    font-size: 20px;
}

.feedback__input:hover {
    background: rgba(180, 254, 26, 0.1);
}

.feedback__accept {
    font-size: 16px;
    margin-bottom: 40px;
    color: #C2C2C2;
}

.feedback__btn {
    padding: 15px 50px;
    border-radius: 10px;
}

@media (max-width: 1200px) {
    .feedback__input,
    .feedback__label {
        font-size: 18px;
    }
}

@media (max-width: 768px) {
    .feedback__title {
        margin-bottom: 30px;
    }

    .feedback__list {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 25px;
    }

    .feedback__input {
        padding: 20px 15px;
    }

    .feedback__input,
    .feedback__input::placeholder {
        font-size: 18px;
    }
}

@media (max-width: 600px) {
    .feedback__label {
        font-size: 16px;
    }

    .feedback__input {
        padding: 17px 15px;
    }

    .feedback__input,
    .feedback__input::placeholder {
        font-size: 16px;
    }

    .feedback__accept {
        font-size: 14px;
        margin-bottom: 30px;
    }
}

@media (max-width: 468px) {
    .feedback__input,
    .feedback__input::placeholder {
        font-size: 14px;
    }
}
</style>