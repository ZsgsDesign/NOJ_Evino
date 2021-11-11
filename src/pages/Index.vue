<template>
    <q-page class="container q-pt-md fit">
        <div class="row">
            <div class="col-12 col-md-8 q-pa-md">
                <div class="q-mb-lg">
                    <h4 class="q-mt-none q-mb-xs">Welcome to {{ defaultNOJConfig.app.name }}!</h4>
                    <version-component />
                </div>
                <carousel-component title="Home" active :carousels="carousels" />
            </div>
            <div class="col-12 col-md-4 q-pa-md">
                <section-title icon="mdi-puzzle" title="Installed Extensions" />
            </div>
        </div>
    </q-page>
</template>

<script lang="ts">
import { Carousel } from 'components/models';
import CarouselComponent from 'components/home/CarouselComponent.vue';
import VersionComponent from 'components/version/VersionComponent.vue';
import SectionTitle from 'components/section/TitleComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'HomePage',
    components: { CarouselComponent, VersionComponent, SectionTitle },
    setup() {
        const carousels = ref<Carousel[]>([
            {
                order: 1,
                url: 'https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80',
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
