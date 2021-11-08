<template>
    <div class="q-pa-md">
        <q-responsive :ratio="16 / 9" class="evino__carousel">
            <q-carousel autoplay thumbnails infinite arrows animated v-model="slide" height="400px">
                <q-carousel-slide v-for="carousel in carousels" :key="carousel.order" :name="carousel.order" :img-src="carousel.url" />
            </q-carousel>
        </q-responsive>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Carousel } from 'components/models';

export default defineComponent({
    name: 'HomeComponent',
    props: {
        carousels: {
            type: Array as PropType<Carousel[]>,
            default: () => [],
        },
    },
    setup() {
        return {
            slide: ref(1),
        }
    },
});
</script>

<style lang="scss" scoped>
.custom-caption {
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
}
.evino {
    &__carousel {
        width: 100%;
        border-radius: 4px;
        overflow: hidden;
        // box-shadow: rgb(0 0 0 / 35%) 0px 0px 30px;
    }
}
</style>
