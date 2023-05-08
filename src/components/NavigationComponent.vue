<template>
    <div class="navigation">
        <div class="navigation--inner">
            <a class="logo">
                <img :src="logo" alt="Logo" width="32" height="32">
            </a>
            <nav class="nav">
                <ul v-for="link in links" :key="link.id" class="menu-link">
                  <router-link :to="link.path" @click.prevent="animateTransition">
                    <li><img :src="link.icon" alt=""></li>
                    <li>{{link.name}}</li>
                  </router-link>
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
                    icon: '../images/icons/navigation__tests.svg',
                    path: "/alltests"
                },
                {
                    id: 2,
                    name: "Курсы",
                    icon: '../images/icons/navigation__courses.svg',
                    path: "/courses"
                },
                {
                    id: 3,
                    name: "Помощь",
                    icon: '../images/icons/navigation__help.svg',
                    path: "/faq"
                },
                {
                    id: 4,
                    name: "Войти",
                    icon: '../images/icons/navigation__login.svg',
                    path: "/auth"
                }
            ],
            logo: '../images/logo.png'
        }
    },
  methods: {
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
.menu-link li img {
  display: none;
}
@media screen and (max-width: 760px){
  .navigation {
    width: 100%;
    bottom: 0;
    background-color: #B4FE1A;
    border-radius: 18px 18px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}
  .menu-link li img {
  display: block;
}

  .navigation--inner {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
}
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 45px;
  }
  .menu-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .menu-link li:nth-child(2) {
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 9px;
    text-align: center;
  }
  .logo {
    display: none;
  }
  .navigation__btn {
    display: none;
  }
  a{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>