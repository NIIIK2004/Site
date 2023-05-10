<template>
  <div class="auth">
    <h1>Авторизация в Astyx <img :src="logo" alt="logo"></h1>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="username" placeholder="Логин">
      <div class="password-field">
        <input type="password" v-model="password" placeholder="Пароль" id="password-field">
        <p class="password-hidden" id="password-toggle" @click="togglePassword">{{ passwordVisible ? 'Скрыть пароль' : 'Посмотреть пароль' }}</p>
      </div>
      <button class="btn" type="submit">Войти</button>
      <p v-if="showSuccessMessage" class="success-message">Вы успешно авторизовались😘</p>
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
    }, 7000); // через 5 секунд произойдет редирект на главную страницу
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
    }
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
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #B4FE1A;
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
  position: absolute;
    top: 0px;
    left: 0;
    margin: 0 auto;
    width: 100%;
    text-align: center;
}
@media screen and (max-width: 565px){

  .auth h1 {
    text-align: center;
    font-size: 30px;
  flex-direction: column;
  gap: 20px;
}
}
</style>