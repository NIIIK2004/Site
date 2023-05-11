<template>
    <div class="auth">
        <h1>Авторизация в Astyx <img :src="logo" alt="logo"></h1>
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="username" placeholder="Логин">
            <div class="password-field">
                <input type="password" v-model="password" placeholder="Пароль" id="password-field">
                <p class="password-hidden" id="password-toggle" @click="togglePassword">
                    {{ passwordVisible ? 'Скрыть пароль' : 'Посмотреть пароль' }}</p>
            </div>
            <button class="btn" type="submit">Войти</button>
            <p v-if="showSuccessMessage" class="success-message">Вы успешно авторизовались😘</p>
            <p class="to__registration-page">
                Вы ещё не зарегистрированы?
                <router-link class="to__registration-page-link" to="/reg" @click.prevent="animateTransition">Тогда
                    давайте сделаем это
                </router-link>
            </p>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
import router from '@/router/router'

export default {
    name: "AuthPage",
    data() {
        return {
            logo: '../images/logo.png',
            passwordVisible: false,
            username: '',
            password: '',
            showSuccessMessage: false,
        }
    },
    methods: {
        onSubmit() {
            axios.post('http://localhost:8080/api/auth/login', {
                username: this.username,
                password: this.password
            }).then(response => {
                console.log(response);
                // сохранение данных пользователя в localStorage или Vuex Store
                if (response.data.success) {
                    this.showSuccessMessage = true;
                    // сохраняем данные пользователя в localStorage
                    localStorage.setItem('user', JSON.stringify({
                        username: this.username
                    }));
                    console.log(this.username)
                    setTimeout(() => {
                        router.push('/');
                    }, 3000); // через 5 секунд произойдет редирект на главную страницу
                }
            }).catch(error => {
                console.log(error);
                // вывод сообщения об ошибке
            });
        },
        togglePassword() {
            const passwordField = document.getElementById("password-field");
            const passwordToggle = document.getElementById("password-toggle");
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
    }
}
</script>
<style scoped>
.auth {
    display: flex;
    flex-direction: column;
    gap: 125px;
    align-items: center;
    justify-content: center;
    padding-top: 70px;
    padding-right: 50px;
    padding-left: 50px;
}

.auth h1 {
    display: flex;
    flex-direction: row;
    gap: 35px;
    align-items: center;
    justify-content: center;
}

.auth h1 img {
    width: 32px;
    height: 32px;
}

.auth form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
    max-width: 450px;
}

.auth form input {
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
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 auto;
    width: 100%;
}

.btn {
    border-radius: 10px;
    margin-bottom: 10px;
}

@media screen and (max-width: 565px) {

    .auth h1 {
        text-align: center;
        font-size: 30px;
        flex-direction: column;
        gap: 20px;
    }
}
</style>