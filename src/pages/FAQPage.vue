<template>
    <NavigationComponent/>
    <div class="container">

        <h1 class="faq-title page-title">Ответы на часто задаваемые вопросы</h1>
        <p class="faq-description">Не нашли ответа на свой вопрос? Напишите нам используя форму обратной связи или
            соц.сети</p>

        <div class="faq-links">
            <a href=""><img src="../../public/images/icons/telegram.svg" alt=""></a>
            <a href=""><img src="../../public/images/icons/VK.svg" alt=""></a>
        </div>
        <AccordionComponent/>

        <section class="FormsForFAQ indent">
            <h1 class="section-title">Форма обратной связи</h1>
            <FormsForFAQ/>
        </section>
        <ContactsFormComponent/>
    </div>
    <FooterComponent/>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import AccordionComponent from "@/components/AccordionComponent.vue";
import ContactsFormComponent from "@/components/ContactsFormComponent.vue";
import FormsForFAQ from "@/components/FormsForFAQ.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";

export default {
    components: {
        NavigationComponent,
        AccordionComponent,
        FooterComponent,
        ContactsFormComponent,
        FormsForFAQ,
    },
}
</script>

<style scoped>

.faq-title,
.faq-description,
.faq-links {
    margin-top: 50px;
}

.faq-description {
    font-family: 'Stolzl';
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #8E8E8E;
}

.faq-links {
    display: flex;
    gap: 15px;
}

@media (max-width: 768px) {
    .faq-title, .faq-description, .faq-links {
        margin-top: 35px;
    }

    .faq-description {
        font-size: 18px;
        line-height: 23px;
    }
}

@media (max-width: 380px) {
    .faq-description {
        font-size: 15px;
        line-height: 19px;
    }

    .faq-title, .faq-description, .faq-links {
        margin-top: 18px;
    }
}
</style>