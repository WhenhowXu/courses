<template>
    <a-dropdown>
        <a-icon type="skin" />
        <a-menu :theme="menuThemeKey" slot="overlay" @click="toggleTheme">
            <a-menu-item v-for="item in themes" :key="item.value">{{ item.label }}</a-menu-item>
        </a-menu>
    </a-dropdown>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
    name: 'ThemeChanger',
    computed:{
    ...mapState('settings', ['themes']),
    ...mapGetters('settings', ['menuThemeKey'])
    },
    methods: {
        ...mapMutations('settings', ['setTemeKey']),
        toggleTheme({ key }) {
            this.setTemeKey(key)
            document.documentElement.setAttribute('theme-mode', key);
        }
    }
}
</script>