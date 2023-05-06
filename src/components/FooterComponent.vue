<template>
    <footer>
        <div class="container">
            <img src="../../public/images/logoFooter.png" alt="tutLOGO">
            <div class="footer__links">
                <ul class="footer__links-lists">
                    <p>Все курсы</p>
                    <li>Популярные курсы</li>
                    <li>Бесплатные курсы</li>
                    <li>Платные курсы</li>
                </ul>
                <ul class="footer__links-lists">
                    <p>Английский по уровню</p>
                    <li>Начинающий</li>
                    <li>Учеба</li>
                    <li>Помощь</li>
                </ul>
                <ul class="footer__links-lists">
                    <p>Английский по целям</p>
                    <li>Средний</li>
                    <li>Работа</li>
                    <li>Бесплатно</li>
                </ul>
                <ul class="footer__links-lists">
                    <p>Дополнительно</p>
                    <li>Высокий</li>
                    <li>Путешествия</li>
                    <li>Статьи</li>
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
</style>