<template>
    <div class="navigation">
        <div class="navigation--inner">

            <a class="logo">
                <img :src="logo" alt="Logo" width="32" height="32">
            </a>
            <nav class="nav">
                <ul v-for="link in links" :key="link.id">
                    <li><a href="">{{ link.name }}</a></li>
                </ul>
            </nav>
            <button class="navigation__btn btn">Записаться на урок</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavigationComponent",
    data() {
        return {
            links: [
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
            logo: '../images/logo.png'
        }
    }
}
</script>

<style scoped>
.navigation {
    max-width: 740px;
    position: fixed;
    z-index: 300;
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
    gap: 24px;
    align-items: center;
}

.nav {
    display: flex;
    gap: 24px;
}

.navigation__btn:hover {
    color: #fff;
}
</style>