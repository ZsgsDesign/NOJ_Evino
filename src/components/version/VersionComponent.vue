<template>
    <p class="text-grey font-poppins evino__version_badge">
        <q-icon name="mdi-google-downasaur" /> <span class="text-grey-5">v1.0.0.19</span>-<span class="text-grey-5">dev</span> <span class="text-grey-6 text-italic text-bold text-underline">Alwalkeria</span> <span class="text-grey-7 text-italic">Three Year Anniversary Build Pack</span>
    </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'VersionComponent',
});
</script>

<style lang="scss" scoped>
.evino {
    &__version_badge {
        span {
            word-break: keep-all;
            white-space: nowrap;
        }
    }
}
</style>
