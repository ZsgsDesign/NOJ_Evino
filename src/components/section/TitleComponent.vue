<template>
    <p class="text-bold text-grey-7"><q-icon :name="icon"></q-icon> {{title}}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'SectionTitle',
    props: {
        icon: {
            default: () => 'format-section',
        },
        title: {
            default: () => '',
        },
    },
    setup() {
        return {
            slide: ref(1),
        }
    },
});
</script>
