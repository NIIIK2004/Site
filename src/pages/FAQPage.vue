<template>
    <div class="container">

        <h1 class="faq-title page-title">Ответы на часто задаваемые вопросы</h1>
        <p class="faq-description">Не нашли ответа на свой вопрос? Напишите нам используя форму обратной связи или
            соц.сети</p>

        <div class="faq-links">
            <a href=""><img src="../../public/images/icons/telegram.svg" alt=""></a>
            <a href=""><img src="../../public/images/icons/VK.svg" alt=""></a>
        </div>
        <AccordionComponent/>
        <ContactsFormComponent/>
    </div>
    <FooterComponent/>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import AccordionComponent from "@/components/AccordionComponent.vue";

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        accordionItem.classList.toggle('active');
    });
});

export default {
    components: {
        AccordionComponent,
        FooterComponent,
    },
}
</script>

<style scoped>

</style>