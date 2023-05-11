<template>
    <div class="reg">
        <h1>Регистрация в Astyx <img :src="logo" alt="logo"></h1>
        <form @submit.prevent="onSubmit">
            <input placeholder="Email" ref="emailInput">
            <span v-if="!emailValid" class="error-alert">Введите корректную почту</span>
            <span v-if="!uniqueEmail" class="error-alert">Пользователь с такой почтой уже существует <router-link
                    to="auth" @click.prevent="animateTransition">Войти</router-link></span>
            <input type="text" placeholder="Логин">
            <div class="password-field">
                <input type="password" placeholder="Пароль" id="password-field">
                <p class="password-hidden" id="password-toggle">
                    {{ passwordVisible ? 'Скрыть пароль' : 'Посмотреть пароль' }}</p>
            </div>
            <button class="btn" type="submit">Создать аккаунт</button>
            <p v-if="showSuccessMessage" class="success-message">Регистрация почти закончена! Для того чтобы завершить
                регистрацию нужно перейти по ссылке в письме и подтвердить электронную почту. </p>
            <span v-if="allInputs" class="error-alert">Заполните все поля</span>
            <p class="to__registration-page">
                Вы уже зарегистрированы?
                <router-link class="to__registration-page-link" to="/auth" @click.prevent="animateTransition">
                    Тогда авторизуйтесь в аккаунт
                </router-link>
            </p>
        </form>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: "RegPage",
    data() {
        return {
            logo: '../images/logo.png',
            passwordVisible: false,
            emailValid: true,
            showSuccessMessage: false,
            uniqueEmail: true,
            allInputs: false
        }
    },
    methods: {
        validateEmail(email) {
            // регулярное выражение для проверки email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        onSubmit() {
            const emailField = this.$refs.emailInput;
            // проверяем валидность email
            if (!this.validateEmail(emailField.value)) {
                this.emailValid = false;
                return;
            }
            const loginField = document.querySelector('input[type="text"]');
            const passwordField = document.getElementById('password-field');

            if (!emailField.value.trim() || !loginField.value.trim() || !passwordField.value.trim()) {
                this.allInputs = true;
                return;
            }


            // проверяем уникальность email
            axios.get('http://localhost:8080/api/user/all')
                .then(response => {
                    const users = response.data;
                    console.log(users)
                    const isEmailUnique = users.data.every(user => user.email !== emailField.value);
                    if (!isEmailUnique) {
                        this.uniqueEmail = false;
                        return;
                    }
                    // отправляем данные на сервер
                    axios.post('http://localhost:8080/api/auth/registration', {
                        email: emailField.value,
                        username: document.querySelector('input[type="text"]').value,
                        password: document.getElementById('password-field').value
                    })
                        .then(response => {
                            if (response.data.success) {
                                this.showSuccessMessage = true;
                                this.emailValid = true;
                                this.uniqueEmail = true;
                                this.allInputs = false;

                            } else {
                                alert('Ошибка: ' + response.data.message);
                            }
                        })
                        .catch(error => {
                            console.error(error);
                            alert('Ошибка при отправке данных на сервер!');
                        });
                })
                .catch(error => {
                    console.error(error);
                    alert('Ошибка при загрузке данных с сервера!');
                });
        },
        animateTransition() {
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
        },
    },
    mounted() {
        const passwordField = document.getElementById("password-field");
        const passwordToggle = document.getElementById("password-toggle");
        passwordToggle.addEventListener("click", function () {
            if (passwordField.type === "password") {
                passwordField.type = "text";
                passwordToggle.classList.remove("fa-eye-slash");
                passwordToggle.classList.add("fa-eye");
                this.passwordVisible = true;
            } else {
                passwordField.type = "password";
                passwordToggle.classList.remove("fa-eye");
                passwordToggle.classList.add("fa-eye-slash");
                this.passwordVisible = false;
            }
        }.bind(this));
    }
};
</script>


<style scoped>
.reg {
    display: flex;
    flex-direction: column;
    gap: 125px;
    align-items: center;
    justify-content: center;
    padding-top: 70px;
    padding-right: 50px;
    padding-left: 50px;
}

.reg h1 {
    display: flex;
    flex-direction: row;
    gap: 35px;
    align-items: center;
    justify-content: center;
}

.reg h1 img {
    width: 32px;
    height: 32px;
}

.reg form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
    max-width: 450px;
}

.reg form input {
    width: 100%;
    max-width: 450px;
}

.password-hidden {
    margin: 8px 0 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #85c300;
    cursor: pointer;
}

.error-alert {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 10px;
    background: rgba(255, 135, 135, 0.33);
    border-radius: 5px;
}

.success-message {
    padding: 10px;
    background: rgba(180, 254, 26, 0.33);
    text-align: center;
    border-radius: 5px;
}

.to__registration-page {
    font-size: 16px;
    line-height: 1.4;
    max-width: 380px;
    margin: 0 auto;
    text-align: center;
}

.to__registration-page-link {
    color: #8acc00;
    transition: color .3s;
}

.to__registration-page-link:hover {
    color: #ffc916;
}

.btn {
    border-radius: 10px;
    margin-bottom: 10px;
}

@media screen and (max-width: 565px) {

    .reg h1 {
        text-align: center;
        font-size: 30px;
        flex-direction: column;
        gap: 20px;
    }
}
</style>
