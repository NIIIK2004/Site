<template>
    <form class="FAQForms">
        <div class="FAQForms__center-block">
            <div class="FAQForms__left-block">
                <input type="name" placeholder="Ваше имя" required>
                <input type="number" name="tel" placeholder="Номер телефона" inputmode="numeric" required>
                <input type="email" placeholder="Email" required>
            </div>
            <div class="FAQForms__right-block">
                <textarea class="FAQForms__textarea" placeholder="Ваше сообщение" required></textarea>
            </div>
        </div>
        <button class="FAQForms__btn btn">Отправить</button>
        <div class="line"></div>
        <p class="contacts__info">Оставляя заявку, вы соглашаетесь с политикой конфиденциальности</p>
    </form>
</template>

<script setup>

</script>

<style scoped>

.FAQForms {
}

.FAQForms__center-block {
    display: flex;
    align-items: stretch;
    margin-bottom: 30px;
}

.FAQForms__left-block {
    max-width: 534px;
    width: 100%;
    margin-right: 25px;
}

.FAQForms__right-block {
    width: 100%;
}

.FAQForms__textarea {
    width: 100%;
    height: 100%;
    background: #F5F5F5;
    border-radius: 10px;
    resize: none;

    padding: 18px 16px;
    font-family: 'Stolzl';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #000;
}

input {
    max-width: 534px;
}

input:not(:last-child) {
    margin-bottom: 25px;
}

textarea::placeholder {
    font-family: 'Stolzl';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #CBCBCB;

}

.FAQForms__btn {
    border-radius: 10px;
    padding: 15px;
    width: 100%;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 30px;
}

@media(max-width: 520px) {
    .FAQForms__center-block {
        flex-direction: column;
    }
    .FAQForms__left-block {
        margin-right: 0;
    }
    .FAQForms__right-block {
        margin-top: 25px;
    }
    .FAQForms__textarea {
        min-height: 200px;
    }
}

</style>