<template>

    <button class="accordion">Section 1</button>
    <div class="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.</p>
    </div>

    <button class="accordion">Section 2</button>
    <div class="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.</p>
    </div>

    <button class="accordion">Section 3</button>
    <div class="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.</p>
    </div>


  <!--    <div class="accordion sidebar_menu_list" >-->
  <!--        <div v-for="question in questions" :key="question.id">-->
  <!--            <input id="sb_ml-1" name="sidebar_menu-1" type="checkbox"/>-->
  <!--            <label for="sb_ml-1">{{question.question}}</label>-->

  <!--            <article class="sb_ml submenu-1">-->
  <!--                <ul>-->
  <!--                    <li id="sub_menu_1-1">{{question.answer}}</li>-->
  <!--                </ul>-->

  <!--            </article>-->
  <!--        </div>-->
  <!--    </div>-->
</template>

<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });

}
export default {
    name: "AccordionsForFAQ",

    data() {
        return {
            questions: [
                {
                    id: 1,
                    question: "Что нужно, чтобы начать обучение?",
                    answer: "Абсолютно ничего, кроме устройства, у которого есть микрофон, камера и доступ к сайту Astyx.",
                },
                {
                    id: 2,
                    question: "Не могу прийти на урок, что делать? ",
                    answer: "Абслютно ничего, вот просто ничего и все, вы не получите знаний и все",
                },
                {
                    id: 3,
                    question: "Мало времени, боюсь не буду успевать",
                    answer: "Не надо тогда покупать курс че к чему надо сразу рассчитывать на то что время будет хватать",
                },
                {
                    id: 4,
                    question: "Хочу работать у вас, как начать?",
                    answer: "каво? работать? надо сначала выучить 12 языков мира и потом уже можно со смелостью придти и заявить о себе пока ты просто ученник",
                },
            ]
        }
    }
}


</script>

<style scoped>
.accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
}

.active, .accordion:hover {
    background-color: #ccc;
}

.panel {
    padding: 0 18px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
}
</style>