<template>
    <div class="modal" :class="{ 'modal--active': showModal }">
        <div class="modal__inner">
            <h2 class="modal__title">Редактирование профиля</h2>
            <form class="modal__form" action="">
                <ul class="modal__list">
                    <li class="modal__item">
                        <label class="label" for="username">Логин пользователя</label>
                        <input type="text" id="username" placeholder="Введите логин" v-model="username">
                    </li>
                    <li class="modal__item">
                        <label class="label" for="name_user">Имя пользователя</label>
                        <input type="text" id="name_user" placeholder="Введите имя" v-model="name_user">
                    </li>
                    <li class="modal__item">
                        <label class="label" for="surname_user">Фамилия пользователя</label>
                        <input type="text" id="surname_user" placeholder="Введите фамилию" v-model="surname_user">
                    </li>
                    <li class="modal__item">
                        <label class="label" for="surname_user">Номер телефона</label>
                        <input type="number" id="phone_number" placeholder="Введите телефон" v-model="phone_number">
                    </li>
                </ul>
                <div class="modal__buttons">
                    <button class="modal__btn btn" @click.prevent="saveProfile">Сохранить</button>
                    <button class="modal__btn btn" @click.prevent="cancelProfile">Отменить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalEdit',
    data() {
        return {
            username: '',
            name_user: '',
            surname_user: '',
            phone_number: ''
        }
    },
    methods: {
        saveProfile() {
            this.$emit('close')
        },
        cancelProfile() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.modal {
    position: fixed;
    z-index: -100;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.7);
    pointer-events: none;
    transition: all .4s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal--active {
    opacity: 1;
    z-index: 1000;
    pointer-events: auto;
    transition: all .4s;
}

.modal__inner {
    position: relative;
    margin: auto;
    max-width: 700px;
    width: 100%;
    border-radius: 8px;
    background-color: #fff;
    padding: 30px;
    border: 1px solid #242424;
}

.modal__title {
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    max-width: 450px;
    width: 100%;
    margin: 0 auto 40px;
}

.modal__list {
    margin-bottom: 70px;
}

.modal__buttons {
    display: flex;
}

.modal__btn {
    width: 50%;
    font-size: 16px;
}
</style>