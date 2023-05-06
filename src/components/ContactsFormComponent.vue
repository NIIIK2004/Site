<template>
    <div class="contacts__wrapper">
        <h2 class="contacts__title section-title">Определим цели и подберем оптимальный курс</h2>
        <img src="../../public/images/decor-for-contacts.png" alt="decor">
    </div>
    <form class="contacts-form">
        <div class="contacts__action">
            <input class="contacts__action-name" type="text" placeholder="Имя" required>
            <input class="contacts__action-tel" pattern="^\+?(?:7|8)\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$"
                   type="number" name="tel" placeholder="Номер телефона" inputmode="numeric" required>
            <input class="contacts__action-email" type="email" placeholder="Email" required>
            <button class="contacts__action-btn btn">Оставить заявку</button>
        </div>
        <div class="line"></div>
        <p class="contacts__info">Оставляя заявку, вы соглашаетесь с политикой конфиденциальности</p>
    </form>
</template>


<script>

</script>


<style>
input {
    padding: 18px;
    color: #CBCBCB;
    background: #F5F5F5;
    border-radius: 10px;
    border: transparent;
    transition: all .4s;
    margin-right: 24px;
    max-width: 232px;
    width: 100%;
}
input:focus {
    border: #DDDDDD 1.5px solid;
    color: #2D2924;
}
input:focus::placeholder {
    font-size: 16px;
}

input::placeholder {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #CBCBCB;
    transition: all .4s;
}


.contacts__wrapper {
    display: flex;
    margin-bottom: 50px;
    justify-content: space-between;
}

.contacts__title {
    max-width: 634px;
    font-weight: 600;
}

.section-title {
}

.contacts-form {
    background: #FFF;
    border-radius: 25px;
    padding: 30px;
}

.contacts__action {
}

.contacts__action-name {
}

.contacts__action-tel {
}

.contacts__action-email {
}

.contacts__action-btn {
    border-radius: 10px;
    font-size: 20px;
}


.line {
    border: 1px #F1F1F1 solid;
    margin-top: 23px;
    margin-bottom: 18px;
    width: 100%;
}

.contacts__info {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #CBCBCB;
    text-align: center;
}
</style>