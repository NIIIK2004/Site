<template>
  <div class="navigation">
    <div class="navigation--inner">

      <a class="logo">
        <img :src="logo" alt="Logo">
      </a>
      <nav class="nav">
        <ul v-for="link in links" :key ="link.id">
          <li><a href="">{{link.name}}</a></li>
        </ul>
      </nav>
      <button class="navigation--startBtn">Записаться на урок</button>

    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationComponent",
  data() {
    return {
      links : [
        {
          id: 1,
          name: "Онлайн-тесты",
          path: ""
        },
        {
          id: 2,
          name: "Курсы",
          path: ""
        },
        {
          id: 3,
          name: "Помощь",
          path: ""
        },
        {
          id: 4,
          name: "Войти",
          path: ""
        }
      ],
      logo: ''
    }
  }
}
</script>

<style scoped>
    .navigation {
      position: fixed;
      bottom: 20px;
      left: 0;
      right: 0;

      margin: 0 auto;

      background: rgba(248, 251, 255, 0.33);
      backdrop-filter: blur(25px);
      border-radius: 50px;

      padding: 15px 19px;
    }
    .navigation--inner {
      display: flex;
      flex-direction: row;
      gap: 24px;
      justify-content: center;
      align-items: center;
    }
    .nav {
      display: flex;
      flex-direction: row;
      gap: 24px;
    }
    .nav ul{
      padding: 0;
    }
    .nav ul li{
      list-style: none;
    }
    .nav ul li a{
      text-decoration: none;
      font-size: 18px;
      color: #2D2924
    }
    .navigation--startBtn {
      background-color: #B4FE1A;
      border-width: 0;
      border-radius: 35px;
      padding: 10px 27px;
      font-size: 18px;
      color: #2D2924
    }
</style>