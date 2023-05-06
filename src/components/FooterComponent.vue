<template>
    <footer>
        <div class="container">
            <img src="../../public/images/logoFoote.svg" alt="tutLOGO">
            <div class="footer__links">
                <ul class="footer__links-lists">
                    <p>Все курсы</p>
                    <li><a href="#">Популярные</a> курсы</li>
                    <li><a href="#">Бесплатные</a> курсы</li>
                    <li><a href="#">Платные</a> курсы</li>
                </ul>
                <ul class="footer__links-lists">
                    <p>Английский по уровню</p>
                    <li><a href="#">Начинающий</a></li>
                    <li><a href="#">Учеба</a></li>
                    <li><a href="#">Помощь</a></li>
                </ul>
                <ul class="footer__links-lists">
                    <p>Английский по целям</p>
                    <li><a href="#">Средний</a></li>
                    <li><a href="#">Работа</a></li>
                    <li><a href="#">Бесплатно</a></li>
                </ul>
                <ul class="footer__links-lists">
                    <p>Дополнительно</p>
                    <li><a href="#">Высокий</a></li>
                    <li><a href="#">Путешествия</a></li>
                    <li><a href="#">Статьи</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>


<script setup>

</script>


<style>
footer {
    background: #111111;
    padding-top: 50px;
    padding-bottom: 160px;
}

.footer__links {
    display: flex;
    gap: 80px;
    flex-wrap: wrap;

}

.footer__links-lists {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
}

.footer__links-lists p {
    font-family: 'Stolzl';
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
}

.footer__links-lists li {
    margin-top: 21px;
    font-family: 'Stolzl';
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #BEBEBE;
}
@media (max-width: 558px) {
    gap: 10px;
}

@media (max-width: 390px) {
    .footer__links {
        gap: 0;
    }
}
</style>