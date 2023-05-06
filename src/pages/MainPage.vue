<template>
    <NavigationComponent/>
    <SectionStart/>
    <InterestingTests/>
    <PopularCourses/>
    <ContactsFormComponent/>
    <ReviewsComponent/>
    <FooterComponent/>
</template>
<script>
import NavigationComponent from "@/components/NavigationComponent.vue";
import SectionStart from "@/components/SectionStart.vue";
import InterestingTests from "@/components/InterestingTests.vue";
import PopularCourses from "@/components/PopularCourses/PopularCourses.vue";
import ReviewsComponent from "@/components/Reviews/ReviewsComponent.vue";
import ContactsFormComponent from "@/components/ContactsFormComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    components: {
        ReviewsComponent,
        PopularCourses,
        InterestingTests,
        SectionStart,
        NavigationComponent,
        ContactsFormComponent,
        FooterComponent
    },
    NavigationComponent,
    name: "MainPage",
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
router-link {
    color: white;
    display: inline-block;
    background-color: #3498db;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
}

router-link:hover {
    background-color: #2980b9;
}
</style>