<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
        <q-header elevated class="bg-blue-9 text-white q-py-xs" height-hint="58">
            <q-toolbar>
                <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" />

                <q-btn flat no-caps no-wrap class="q-ml-xs">
                    <q-img src="/icons/icon-white.png" loading="eager" no-spinner no-native-menu no-transition width="30px" height="30px" />
                    <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="text-weight-bold">{{ defaultNOJConfig.app.displayName }}</q-toolbar-title>
                    <q-toolbar-title v-if="$q.screen.lt.sm" shrink class="text-weight-bold">{{ defaultNOJConfig.app.name }}</q-toolbar-title>
                </q-btn>

                <q-space />

                <q-space />

                <div class="q-gutter-sm row items-center no-wrap">
                    <q-btn round dense flat color="white" icon="mdi-magnify">
                        <q-tooltip>{{ $t('navigation.header.onmiSearch') }}</q-tooltip>
                    </q-btn>
                    <q-btn round dense flat color="white" icon="mdi-console" v-if="$q.screen.gt.sm">
                        <q-tooltip>{{ $t('navigation.header.webIDE') }}</q-tooltip>
                    </q-btn>
                    <q-btn round dense flat color="white" icon="apps" v-if="$q.screen.gt.sm">
                        <q-tooltip>{{ $t('navigation.header.apps') }}</q-tooltip>
                    </q-btn>
                    <q-btn round dense flat color="white" icon="notifications">
                        <q-badge color="red" text-color="white" floating>2</q-badge>
                        <q-tooltip>{{ $t('navigation.header.notifications') }}</q-tooltip>
                    </q-btn>
                    <q-btn round flat>
                        <q-avatar size="26px">
                            <img src="https://acm.njupt.edu.cn/static/img/avatar/noj.png" />
                        </q-avatar>
                        <q-tooltip>{{ $t('navigation.header.account') }}</q-tooltip>
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
                            <q-item-label>{{ $t(link.text) }}</q-item-label>
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

                    <q-item-label header class="text-weight-bold text-uppercase"> {{ $t('navigation.sidebar.servicesApps') }} </q-item-label>

                    <q-item v-for="link in serviceLink" :key="link.text" v-ripple clickable>
                        <q-item-section avatar>
                            <q-icon color="grey" :name="link.icon" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{ $t(link.text) }}</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-separator class="q-my-md" />

                    <q-item v-for="link in systemLink" :key="link.text" v-ripple clickable>
                        <q-item-section avatar>
                            <q-icon color="grey" :name="link.icon" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{ $t(link.text) }}</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-separator class="q-mt-md q-mb-lg" />

                    <div class="q-px-md text-grey-9 q-mb-lg">
                        <q-select outlined v-model="locale" @update:model-value="changeLocale" transition-show="flip-up" transition-hide="flip-down" :options="localeOptions" :label="$t('languages.label')" dense borderless emit-value map-options options-dense style="min-width: 150px" />
                    </div>

                    <div class="q-px-md text-grey-9">
                        <p class="text-caption">
                            &copy; 2018-{{ defaultNOJConfig.version.year }}, <span class="text-bold">{{ defaultNOJConfig.app.name }}</span> v{{ defaultNOJConfig.version.number }}
                        </p>
                        <p class="text-caption">
                            {{ $t('navigation.sidebar.copyright.noj', { siteName: defaultNOJConfig.app.name }) }}
                        </p>
                        <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
                            <a v-for="button in NOJCopyrightLink" :key="button.text" class="evino__drawer-footer-link" target="__blank" :href="button.href"> <q-icon :name="button.icon" /> {{ $t(button.text) }} </a>
                        </div>
                        <q-separator class="q-mt-lg q-mb-lg" />
                        <p class="text-caption">
                            &copy; 2021-{{ defaultNOJConfig.version.year }}, <span class="text-bold">EVINO</span> v0.0.4
                        </p>
                        <p class="text-caption">
                            {{ $t('navigation.sidebar.copyright.evino') }}
                        </p>
                        <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
                            <a v-for="button in EvinoCopyrightLink" :key="button.text" class="evino__drawer-footer-link" target="__blank" :href="button.href"> <q-icon :name="button.icon" /> {{ $t(button.text) }} </a>
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
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
    name: 'NOJLayout',
    setup() {
        const { locale } = useI18n({
            useScope: 'global',
        });

        locale.value = localStorage.getItem('lang') || defaultNOJConfig.app.locale;

        const leftDrawerOpen = ref(false);

        function toggleLeftDrawer() {
            leftDrawerOpen.value = !leftDrawerOpen.value;
        }

        function changeLocale(value) {
            localStorage.setItem('lang', value);
        }

        return {
            leftDrawerOpen,
            toggleLeftDrawer,
            locale,
            changeLocale,
            defaultLink: [
                { icon: 'home', text: 'navigation.sidebar.home' },
                { icon: 'mdi-book-multiple', text: 'navigation.sidebar.problems' },
                { icon: 'mdi-coffee', text: 'navigation.sidebar.dojo' },
                { icon: 'mdi-layers-triple', text: 'navigation.sidebar.status' },
                { icon: 'mdi-certificate', text: 'navigation.sidebar.rank' },
                { icon: 'mdi-trophy-variant', text: 'navigation.sidebar.contests' },
                { icon: 'mdi-account-multiple', text: 'navigation.sidebar.groups' },
            ],
            customLink: [],
            serviceLink: [
                { icon: 'mdi-content-paste', text: 'navigation.sidebar.pasteBin' },
                { icon: 'mdi-image-multiple-outline', text: 'navigation.sidebar.imageHosting' },
                { icon: 'mdi-console', text: 'navigation.sidebar.webIDE' },
            ],
            systemLink: [
                { icon: 'settings', text: 'navigation.sidebar.settings' },
                { icon: 'mdi-information', text: 'navigation.sidebar.systemInfo' },
                { icon: 'mdi-github', text: 'navigation.sidebar.openSource' },
                { icon: 'mdi-message-alert', text: 'navigation.sidebar.feedback' },
            ],
            NOJCopyrightLink: [
                {
                    icon: 'mdi-open-in-new',
                    text: 'navigation.sidebar.openSource',
                    href: 'https://github.com/ZsgsDesign/NOJ',
                },
                {
                    icon: 'mdi-open-in-new',
                    text: 'navigation.sidebar.whatsNew',
                    href: 'https://github.com/ZsgsDesign/NOJ/releases/tag/1.0.0',
                },
            ],
            EvinoCopyrightLink: [
                {
                    icon: 'mdi-open-in-new',
                    text: 'navigation.sidebar.openSource',
                    href: 'https://github.com/ZsgsDesign/NOJ_Evino',
                },
            ],
        };
    },
    computed: {
        localeOptions() {
            return [
                { value: 'en-US', label: this.$t('languages.enUS') },
                { value: 'zh-CN', label: this.$t('languages.zhCN') },
            ];
        },
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
