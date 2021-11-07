<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
        <q-header elevated class="bg-blue-9 text-white q-py-xs" height-hint="58">
            <q-toolbar>
                <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" />

                <q-btn flat no-caps no-wrap class="q-ml-xs">
                    <q-img src="/icons/icon-white.png" loading="eager" no-spinner no-native-menu no-transition width="30px" height="30px" />
                    <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="text-weight-bold">NJUPT Online Judge</q-toolbar-title>
                    <q-toolbar-title v-if="$q.screen.lt.sm" shrink class="text-weight-bold">NOJ</q-toolbar-title>
                </q-btn>

                <q-space />

                <q-space />

                <div class="q-gutter-sm row items-center no-wrap">
                    <q-btn round dense flat color="white" icon="mdi-magnify">
                        <q-tooltip>Search</q-tooltip>
                    </q-btn>
                    <q-btn round dense flat color="white" icon="mdi-console" v-if="$q.screen.gt.sm">
                        <q-tooltip>Web IDE</q-tooltip>
                    </q-btn>
                    <q-btn round dense flat color="white" icon="apps" v-if="$q.screen.gt.sm">
                        <q-tooltip>Apps</q-tooltip>
                    </q-btn>
                    <q-btn round dense flat color="white" icon="notifications">
                        <q-badge color="red" text-color="white" floating>2</q-badge>
                        <q-tooltip>Notifications</q-tooltip>
                    </q-btn>
                    <q-btn round flat>
                        <q-avatar size="26px">
                            <img src="https://acm.njupt.edu.cn/static/img/avatar/noj.png" />
                        </q-avatar>
                        <q-tooltip>Account</q-tooltip>
                    </q-btn>
                </div>
            </q-toolbar>
        </q-header>

        <q-ajax-bar ref="bar" position="top" color="accent" size="10px" skip-hijack />

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2" :width="240">
            <q-scroll-area class="fit">
                <q-list padding>
                    <q-item v-for="link in defaultLink" :key="link.text" v-ripple clickable>
                        <q-item-section avatar>
                            <q-icon color="grey" :name="link.icon" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{ link.text }}</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-separator v-if="customLink.length" class="q-my-md" />

                    <q-item v-for="link in customLink" :key="link['text']" v-ripple clickable>
                        <q-item-section avatar>
                            <q-icon color="grey" :name="link['icon']" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{ link['text'] }}</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-separator class="q-mt-md q-mb-xs" />

                    <q-item-label header class="text-weight-bold text-uppercase"> Services and Apps </q-item-label>

                    <q-item v-for="link in serviceLink" :key="link.text" v-ripple clickable>
                        <q-item-section avatar>
                            <q-icon color="grey" :name="link.icon" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{ link.text }}</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-separator class="q-my-md" />

                    <q-item v-for="link in systemLink" :key="link.text" v-ripple clickable>
                        <q-item-section avatar>
                            <q-icon color="grey" :name="link.icon" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{ link.text }}</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-separator class="q-mt-md q-mb-lg" />

                    <div class="q-px-md text-grey-9">
                        <p class="text-caption">&copy; 2018-2021, NOJ</p>
                        <p class="text-caption"><span class="text-bold">NOJ</span> is an online judge developed by Fangtang Zhixing Network Technology together with the ICPC Team of NJUPT.</p>
                        <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
                            <a v-for="button in bottomLink" :key="button.text" class="evino__drawer-footer-link" target="__blank" :href="button.href"> <q-icon :name="button.icon" /> {{ button.text }} </a>
                        </div>
                    </div>
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'MyLayout',
    setup() {
        const leftDrawerOpen = ref(false);
        function toggleLeftDrawer() {
            leftDrawerOpen.value = !leftDrawerOpen.value;
        }
        return {
            leftDrawerOpen,
            toggleLeftDrawer,
            defaultLink: [
                { icon: 'home', text: 'Home' },
                { icon: 'mdi-book-multiple', text: 'Problems' },
                { icon: 'mdi-coffee', text: 'Dojo' },
                { icon: 'mdi-buffer', text: 'Status' },
                { icon: 'mdi-certificate', text: 'Rank' },
                { icon: 'mdi-trophy-variant', text: 'Contests' },
                { icon: 'mdi-account-multiple', text: 'Groups' },
            ],
            customLink: [],
            serviceLink: [
                { icon: 'mdi-content-paste', text: 'Paste Bin' },
                { icon: 'mdi-image-multiple-outline', text: 'Image Hosting' },
                { icon: 'mdi-console', text: 'Web IDE' },
            ],
            systemLink: [
                { icon: 'settings', text: 'Settings' },
                { icon: 'mdi-information', text: 'System Info' },
                { icon: 'mdi-github', text: 'Open Source' },
                { icon: 'mdi-message-alert', text: 'Send Feedback' },
            ],
            bottomLink: [
                {
                    icon: 'mdi-open-in-new',
                    text: 'Open Source',
                    href: 'https://github.com/ZsgsDesign/NOJ',
                },
                {
                    icon: 'mdi-open-in-new',
                    text: "What's New",
                    href: 'https://github.com/ZsgsDesign/NOJ/releases/tag/1.0.0',
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.evino {
    &__neon {
        background: linear-gradient(to right, #4568dc, #b06ab3);
    }
    &__drawer-footer-link {
        color: inherit;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.75rem;
        &:hover {
            color: #000;
        }
    }
}
</style>
