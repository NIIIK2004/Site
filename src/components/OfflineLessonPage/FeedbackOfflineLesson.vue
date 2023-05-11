<template>
    <section class="feedback">
        <h2 class="feedback__title section-title">Форма обратной связи:</h2>
        <form class="feedback__form" @submit.prevent="submitForm" v-if="isFormVisible"
              action="http://localhost:8080/submit-form" method="post">
            <ul class="feedback__list">
                <li class="feedback__item">
                    <label class="feedback__label" for="input_name">Имя</label>
                    <input class="feedback__input" id="input_name" type="text" placeholder="Введите имя" required
                           v-model="formData.name"/>
                </li>
                <li class="feedback__item">
                    <label class="feedback__label" for="input_surname">Фамилия</label>
                    <input class="feedback__input" id="input_surname" type="text" placeholder="Введите фамилию" required
                           v-model="formData.surname"/>
                </li>
                <li class="feedback__item">
                    <label class="feedback__label" for="input_email">Почта</label>
                    <input class="feedback__input" id="input_email" type="email" placeholder="Введите почту" required
                           v-model="formData.email"/>
                </li>
                <li class="feedback__item">
                    <label class="feedback__label" for="input_phone">Номер телефона</label>
                    <input class="feedback__input" id="input_phone" type="text" placeholder="Введите номер" required
                           v-model="formData.phone"/>
                </li>
                <li class="feedback__item">
                    <custom-select v-model="selectedOption" :options="options"></custom-select>
                </li>
            </ul>
            <p class="feedback__accept">
                Оставляя заявку, вы принимаете условия соглашения об обработке персональных данных
            </p>
            <button class="feedback__btn btn" type="submit">Отправить заявку</button>
        </form>
        <div class="feedback__success" :class="{ 'feedback__success--active': !isFormVisible }">
            <p>Информация принята. Спасибо за обратную заявку, ожидайте ответа в ближайшее время!</p>
        </div>
    </section>
</template>
<script>
import CustomSelect from "@/components/CustomSelect/CustomSelect.vue";

export default {
    components: {
        CustomSelect,
    },
    data() {
        return {
            selectedOption: '',
            options: [
                {text: 'С свободным учителем', value: 'С свободным учителем'},
                {text: 'Смольняков А.В.', value: 'Смольняков А.В.'},
                {text: 'Сурин А.Ю.', value: 'Сурин А.Ю.'},
                {text: 'Машков Н.В.', value: 'Машков Н.В.'},
                {text: 'Мартыненко В.А.', value: 'Мартыненко В.А.'},
            ],
            formData: {
                name: '',
                surname: '',
                email: '',
                phone: ''
            },
            isFormVisible: true,
            isErrorMessageActive: false
        }
    },
    methods: {
        submitForm() {
            if (this.validateForm()) {
                fetch('http://localhost:8082/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.formData)
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        this.isFormVisible = false;
                        localStorage.setItem('isFormVisible', false);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
        },
        validateForm() {
            const name = document.getElementById('input_name').value;
            const surname = document.getElementById('input_surname').value;
            const email = document.getElementById('input_email').value;
            const phone = document.getElementById('input_phone').value;

            if (!name || !surname || !email || !phone) {
                this.isErrorMessageActive = true;
                return false;
            }

            return true;
        }
    },
mounted() {
    const isFormVisible = localStorage.getItem('isFormVisible');
    if (isFormVisible === 'true') {
        this.isFormVisible = false;
    }
},
}
</script>

<style scoped>
.feedback__title {
    margin-bottom: 40px;
}

.feedback__form {
    max-height: 1000px;
    transition: max-height 0.7s ease-out;
}

.feedback__form--hidden {
    max-height: 0;
    overflow: hidden;
}

.feedback__success {
    background: rgba(180, 254, 26, 0.7);
    padding: 30px;
    border-radius: 10px;
    font-size: 20px;
    opacity: 0;
    transition: opacity 0.7s ease-in;
}

.feedback__success--active {
    opacity: 1;
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

.feedback__accept,
.feedback__error-message {
    font-size: 16px;
}

.feedback__accept {
    color: #C2C2C2;
    margin-bottom: 40px;
}

.feedback__error-message {
    color: #ff4242;
    margin-bottom: 25px;
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

    .feedback__success {
        padding: 20px;
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

    .feedback__success {
        font-size: 16px;
    }
}

@media (max-width: 468px) {
    .feedback__input,
    .feedback__input::placeholder {
        font-size: 14px;
    }
}
</style>