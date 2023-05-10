<template>
  <div class="profile">
    <p>Привет,</p>
    <button class="btn logout" @click="logout">Выйти</button>

  </div>
</template>


<script>
 import axios from 'axios';
import router from '@/router/router'
export default {
  name: "ProfilePage",
  mounted() {
    // Проверяем наличие пользователя в LocalStorage
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    if (!user) {
      // Пользователь не найден, редирект на страницу авторизации
      router.push("/auth");
    }
  },
  methods: {
    logout() {
      // Отправляем запрос на сервер для выхода из системы
      axios.post("http://localhost:8080/api/auth/logout")
        .then(() => {
          // Удаляем данные пользователя из LocalStorage
          localStorage.removeItem("user");
          // Редирект на страницу авторизации
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>


<style scoped>

</style>