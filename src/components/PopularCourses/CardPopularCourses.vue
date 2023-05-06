<template>
    <ul class="card-popular">
        <li class="card-popular__item" v-for="course in courses" :key="course.id">
            <img class="card-popular__img image-cover" :src="course.src" alt="курсы по английскому" width="68"
                 height="68">
            <h3 class="card-popular__name">{{ course.title }}</h3>
            <p class="card-popular__description">{{ course.description }}</p>
            <div class="card-popular__bottom">
                <span class="card-popular__price">{{ course.price }}</span>
                <button class="card-popular__btn btn">Записаться</button>
                <span class="card-popular__quantity">{{ course.quantity }}</span>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        courses: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style>
.card-popular {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
}

.card-popular__item {
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    background-color: #F1F1F1;
    padding: 35px 30px 20px;
}

.card-popular__bottom {
    margin-top: auto;
}

.card-popular__img {
    margin: 0 auto 35px;
}

.card-popular__name {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 15px;
}

.card-popular__description {
    margin-bottom: 30px;
}

.card-popular__price {
    display: block;
    font-size: 22px;
    text-align: center;
    margin-bottom: 15px;
    font-weight: 600;
}

.card-popular__btn {
    padding: 15px 50px;
    display: block;
    font-size: 24px;
    margin: 0 auto 15px;
}

.card-popular__btn:hover {
    color: #fff;
}

.card-popular__quantity {
    margin-top: auto;
    display: block;
    text-align: center;
    font-size: 16px;
}

@media (max-width: 1200px) {
    .card-popular__img {
        width: 56px;
        height: 56px;
    }

    .card-popular__name {
        font-size: 22px;
    }

    .card-popular__description {
        font-size: 16px;
    }

    .card-popular__price {
        font-size: 20px;
    }

    .card-popular__btn {
        font-size: 22px;
    }
}

@media (max-width: 992px) {
    .card-popular {
        text-align: center;
        grid-template-columns: repeat(2, 1fr);
    }

    .card-popular__item {
        padding: 25px;
    }
}

@media (max-width: 768px) {
    .card-popular__img {
        width: 44px;
        height: 44px;
        margin-bottom: 25px;
    }

    .card-popular__name {
        font-size: 20px;
    }
}

@media (max-width: 600px) {
    .card-popular {
        grid-template-columns: repeat(1, 1fr);
    }

    .card-popular__price {
        font-size: 18px;
    }

    .card-popular__btn {
        font-size: 20px;
    }
}

</style>