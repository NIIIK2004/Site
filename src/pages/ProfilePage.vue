<template>
    <div class="profile container">
        <div class="profile__top">
            <div class="profile__top-buttons">
                <button class="profile__btn btn logout" @click="openEditModal">Редактирование</button>
                <button class="profile__btn btn logout" @click="logout">Выйти</button>
            </div>
            <div class="profile__content">
                <img class="profile__img" v-if="userProfile"
                     :src="'http://192.168.1.111:8080/uploads/' + userProfile.file" alt="" width="300" height="300">
                <div class="profile__top-info">
                    <span class="profile__status">Активирован</span>
                    <h1 class="profile__name" v-if="userProfile">{{ userProfile.name && userProfile.surname ? userProfile.name + ' ' + userProfile.surname : 'Имя и фамилия не заполнено' }}</h1>
                    <span class="profile__mail" v-if="userProfile">{{ userProfile.email ? userProfile.email : 'Пусто' }}</span>
                </div>
            </div>
        </div>
        <div class="profile__info">
            <h2 class="profile__info-title">Информация</h2>
            <div class="profile__lists">
                <ul class="profile__left">
                    <li class="profile__item">Имя пользователя:</li>
                    <li class="profile__item">Имя и Фамилия:</li>
                    <li class="profile__item">Номер телефона:</li>
                    <li class="profile__item">Email:</li>
                </ul>
                <ul class="profile__right">
                    <li class="profile__item" v-if="userProfile">{{ userProfile.username ? userProfile.username : 'Пусто' }}</li>
                    <li class="profile__item" v-if="userProfile">{{ userProfile.name && userProfile.surname ? userProfile.name + ' ' + userProfile.surname : 'Пусто' }}</li>
                    <li class="profile__item" v-if="userProfile">{{ userProfile.number ? userProfile.number : 'Пусто' }}</li>
                    <li class="profile__item" v-if="userProfile">{{ userProfile.email ? userProfile.email : 'Пусто' }}</li>
                </ul>
            </div>
        </div>
        <div class="profile__info-level">
            <h2 class="profile__info-title">Уровень английского языка:</h2>
            <span class="profile__level profile__level--middle">Средний</span>
        </div>
    </div>
    <ModalEdit :showModal="showModal" :profileData="userProfile" @close="showModal = false" />
</template>


<script>
import axios from 'axios';
import router from '@/router/router'
import ModalEdit from "@/components/EditModalProfile.vue";

export default {
    components: {
        ModalEdit
    },

    name: "ProfilePage",
    data() {
        return {
            user: null,
            userProfile: null,
            showModal: false
        }
    },
    mounted() {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            router.push("/auth");
        }

        axios.get('http://localhost:8080/api/user/all')
            .then(response => {
                const allUsers = response.data.data;
                const userProfile = allUsers.find(u => u.username === user.username);
                this.userProfile = userProfile;
                console.log(userProfile)
            })
            .catch(error => {
                console.log(error);
            });

    },
    methods: {
        logout() {
            axios.post("http://localhost:8080/api/auth/logout")
                .then(() => {
                    localStorage.removeItem("user");
                    router.push("/");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        openEditModal() {
            this.showModal = true;
            this.$nextTick(() => {
                this.$refs.editModalProfile.fillProfileData(this.userProfile);
            });
        }
    }
}
</script>

<style scoped>
.profile {
    margin-top: 55px;
    color: #242424;
    font-size: 20px;
}

.profile__top {
    margin-bottom: 85px;
    position: relative;
}

.profile__top-buttons {
    position: absolute;
    top: 0;
    right: 0;
}

.profile__btn:not(:last-child) {
    margin-right: 20px;
}

.profile__content {
    display: flex;
    align-items: center;
}

.profile__status {
    margin-bottom: 12px;
    line-height: 1;
    display: block;
}

.profile__status--active {
    color: #6EA300;
}

.profile__status--deactive {
    color: #A30000;
}

.profile__name {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 30px;
}

.profile__img {
    object-fit: cover;
    object-position: center;
    margin-right: 40px;
    border-radius: 50%;
}

.profile__info {
    padding: 45px 0;
    border-top: 1px solid #242424;
    border-bottom: 1px solid #242424;
    margin-bottom: 45px;
}

.profile__info-title {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 600;
}

.profile__lists {
    display: flex;
}

.profile__left {
    margin-right: 100px;
}

.profile__right {
    color: #808080;
}

.profile__item:not(:last-child) {
    margin-bottom: 25px;
}

.profile__level {
    font-size: 24px;
    font-weight: 600;
}

.profile__level--low {
    color: #FF3636;
}

.profile__level--middle {
    color: #FFAF36;
}

.profile__level--high {
    color: #96de00;
}

@media (max-width: 1200px) {
    .profile {
        font-size: 18px;
    }

    .profile__img {
        width: 260px;
        height: 260px;
    }

    .profile__name {
        font-size: 32px;
        margin-bottom: 20px;
    }

    .profile__mail {
        font-size: 16px;
    }

    .profile__info-title {
        font-size: 26px;
    }

    .profile__item:not(:last-child) {
        margin-bottom: 20px;
    }

    .profile__level {
        font-size: 20px;
    }
}

@media (max-width: 992px) {
    .profile__top {
        margin-bottom: 60px;
    }

    .profile__img {
        width: 220px;
        height: 220px;
    }

    .profile__status {
        font-size: 16px;
    }

    .profile__name {
        font-size: 28px;
    }

    .profile__info {
        padding: 35px 0;
    }

    .profile__info-title {
        font-size: 24px;
    }
}

@media (max-width: 768px) {
    .profile {
        font-size: 16px;
    }

    .profile__content {
        flex-direction: column;
        text-align: center;
    }

    .profile__img {
        margin-right: 0;
        margin-bottom: 30px;
        width: 190px;
        height: 190px;
    }

    .profile__lists {
        flex-direction: column;
    }
}

@media (max-width: 600px) {
    .profile {
        margin-top: 40px;
    }

    .profile__btn {
        position: static;
        background-color: transparent;
        padding: 5px;
        font-size: 18px;
        margin-bottom: 20px;
    }

    .profile__btn:hover {
        color: #4A8400;
    }

    .profile__top {
        margin-bottom: 40px;
    }

    .profile__name {
        font-size: 26px;
    }

    .profile__info-title {
        font-size: 20px;
    }

    .profile__info {
        margin-bottom: 30px;
    }

    .profile__level {
        font-size: 18px;
    }
}

@media (max-width: 468px) {
    .profile {
        font-size: 14px;
    }

    .profile__info-title {
        font-size: 18px;
    }

    .profile__level {
        font-size: 16px;
    }
}
</style>