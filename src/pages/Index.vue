<template>
    <q-page class="container row">
        <div class="col-12 col-md-8 q-pa-md">
            <h4 class="q-mt-md">Welcome to {{defaultNOJConfig.app.name}}!</h4>
            <carousel-component title="Home" active :carousels="carousels"></carousel-component>
        </div>
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
                url: 'https://cdn.quasar.dev/img/mountains.jpg',
            },
            {
                order: 2,
                url: 'https://cdn.quasar.dev/img/parallax1.jpg',
            },
            {
                order: 3,
                url: 'https://cdn.quasar.dev/img/parallax2.jpg',
            },
        ]);
        return { carousels };
    },
});
</script>
