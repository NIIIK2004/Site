<template>
    <NavigationComponent/>
    <NewsArticleStart/>
    <div class="container-article">
        <p>
            Работа в команде составляет важную часть жизни большинства людей, поэтому в английском языке существует
            множество идиом и выражений, отражающих этот момент. Мы предоставим вам 7 своих любимых английских
            выражений о работы в команде
        </p>
        <ul>
            <li>
                <h3>#1 To build a team</h3>
                <p>
                    Это словосочетание относится к отбору членов команды и организации их совместной плодотворной
                    работы. Выражение ‘team building’ может использоваться в качестве прилагательного или глагола
                    для описания процесса культивирования хороших рабочих отношений в команде.
                </p>
                <blockquote>
                    “The accounts manager has built a strong team in his department. They go on team building
                    activities every three months.”
                </blockquote>
            </li>
            <li>
                <h3>#2 To be a team player</h3>
                <p>Означает умение работать в команде.</p>
                <blockquote>
                    “I love working with Dan. He’s a real team player.”
                </blockquote>
            </li>
            <li>
                <h3>#3 To gel</h3>
                <p>
                    Этот глагол употребляется для описания ситуации, когда между членами команды устанавливаются
                    прочные рабочие взаимоотношения, т.е. когда люди срабатываются.
                </p>
                <blockquote>
                    “We’ve been working together for a month and the team is starting to gel.”
                </blockquote>
            </li>
            <li>
                <h3>#4 To touch base with someone</h3>
                <p>
                    Это выражение означает связаться или встретиться с кем-либо, как правило, чтобы обсудить
                    дальнейшие планы.
                </p>
                <blockquote>
                    “I’d like you to complete this task then we’ll touch base on Monday to discuss the next steps.”
                </blockquote>
            </li>
            <li>
                <h3>#5 To catch up with someone</h3>
                <p>
                    Означает встретиться с кем-нибудь и обсудить, чем человек занимался или над чем работал в
                    последнее время.
                </p>
                <blockquote>
                    “Sorry I haven’t been around much recently. Can we meet on Monday? I’d like to catch up with you
                    about what you’ve been doing for the last month.”
                </blockquote>
            </li>
            <li>
                <h3>
                    #6 To step on someone’s toes
                </h3>
                <p>
                    Имеет значение делать что-то такое, что может помешать другому человеку выполнять задание.
                </p>
                <blockquote>
                    “I would love to help you by coding the website but Darren is our web designer and I don’t want
                    to step on his toes.”
                </blockquote>
            </li>
            <li>
                <h3>
                    #7 To bounce ideas off someone
                </h3>
                <p>
                    Значит поделиться мыслью с кем-либо и спросить мнение этого человека или людей насчет вашей
                    идеи.
                </p>
                <blockquote>
                    “I’ve thought about what the poster should look like but can’t make up my mind. Can we meet up
                    so I can bounce some ideas off you?”
                </blockquote>
            </li>
        </ul>
        <p>
            Задание на один абзац: смогли бы вы использовать все эти выражения в одном небольшом рассказе?
            Попробуйте сделать это в текстовом документе или же на листочке
        </p>
    </div>
    <FooterComponent/>
</template>

<script setup>

import FooterComponent from "@/components/FooterComponent.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import NewsArticleStart from "@/components/NewsArticleStart.vue";
</script>

<style scoped>
h3 {
    font-size: 20px;
    color: #6BBE00;
    line-height: 1.2;
    margin-bottom: 20px;
    font-weight: 600;
}

p {
    margin-bottom: 30px;
}

ul {
    margin: 40px 0;
}

li:not(:last-child) {
    margin-bottom: 60px;
}

li p {
    margin-bottom: 40px;
}

blockquote {
    position: relative;
    padding-left: 25px;
}

blockquote::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #6BBE00;
    width: 5px;
    height: 140%;
}

@media (max-width: 992px) {
    p {
        margin-bottom: 20px;
    }
}

@media (max-width: 600px) {
    h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    ul {
        margin: 30px 0;
    }

    li:not(:last-child) {
        margin-bottom: 45px;
    }

    li p {
        margin-bottom: 35px;
    }

    blockquote {
        padding-left: 15px;
    }

    blockquote::before {
        width: 3px;
    }
}

@media (max-width: 468px) {
    h3 {
        font-size: 16px;
    }
}
</style>