<template>
    <section class="contacts indent">
        <div class="container">
            <div class="contacts__wrapper">
                <h2 class="contacts__title section-title">Определим цели и подберем оптимальный курс</h2>
                <img src="../../public/images/decor-for-contacts.png" alt="decor">
            </div>
            <form class="contacts-form">
                <div class="contacts__action">
                    <input class="contacts__action-name" type="text" placeholder="Имя" required>
                    <input class="contacts__action-tel"
                           pattern="^\+?(?:7|8)\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$"
                           type="number" name="tel" placeholder="Номер телефона" inputmode="numeric" required>
                    <input class="contacts__action-email" type="email" placeholder="Email" required>
                    <button class="contacts__action-btn btn">Оставить заявку</button>
                </div>
                <div class="line"></div>
                <p class="contacts__info">Оставляя заявку, вы соглашаетесь с политикой конфиденциальности</p>
            </form>
        </div>
    </section>
</template>


<script>

</script>


<style>

.contacts {
    background: #EFFFCE !important;
    border-radius: 25px;
    padding: 60px 45px;
}

input {
    padding: 18px;
    color: #CBCBCB;
    background: #F5F5F5;
    border-radius: 10px;
    border: 1px solid transparent;
    transition: all .4s;
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

.contacts__wrapper img{
    object-fit: contain;
}


.contacts__title {
    max-width: 634px;
    font-weight: 600;
}

.contacts-form {
    background: #FFF;
    border-radius: 25px;
    padding: 30px;
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

.contacts__action {
    flex-wrap: wrap;
    display: flex;
    gap: 10px;
}

@media (max-width: 1104px) {
    input {
        max-width: unset;
    }

    .contacts__action {
        gap: 20px;
        justify-content: right;
    }
}

@media (max-width: 860px) {
    .contacts__wrapper img {
        display: none;
    }

    .contacts__title {
        font-size: 36px;
    }
}

@media (max-width: 670px) {
    .contacts {
        padding: 40px 30px;
    }
}

@media (max-width: 480px) {
    .contacts__info {
        font-size: 14px;
    }

    .contacts__action {
        justify-content: center;
    }

    .contacts__action-btn {
        width: 100%;
    }

    .contacts__title {
        font-size: 24px;
    }
}

@media (max-width: 390px) {
    .contacts__title {
        font-size: 29px;
    }

    .contacts {
        padding: 20px;
    }
}



</style>