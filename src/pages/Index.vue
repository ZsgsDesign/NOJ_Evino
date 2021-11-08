<template>
    <q-page class="container-lg row">
        <carousel-component class="col-12" title="Home" active :carousels="carousels"></carousel-component>
    </q-page>
</template>

<script lang="ts">
import { Carousel } from 'components/models';
import CarouselComponent from 'components/home/CarouselComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'HomePage',
    components: { CarouselComponent },
    setup() {
        const carousels = ref<Carousel[]>([
            {
                order: 1,
                url: 'https://acm.njupt.edu.cn/static/img/carousel/aphyocharacinae_compilers.png',
            },
            {
                order: 2,
                url: 'https://acm.njupt.edu.cn/static/img/carousel/pick_your_style.png',
            },
            {
                order: 3,
                url: 'https://acm.njupt.edu.cn/static/img/carousel/babel.png',
            },
        ]);
        console.log(carousels);
        return { carousels };
    },
});
</script>
