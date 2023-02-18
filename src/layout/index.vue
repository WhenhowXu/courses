<template>
    <div class="app-container">
        <AppHeader title="Vue Demos" />
        <div class="app-main">
            <AppMemu />
            <div class="app-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from "./AppHeader";
import AppMemu from "./AppMemu";
export default {
    name: "AppLayout",
    components: { AppHeader, AppMemu },
    data() {
        return {
            collapsed: false,
        };
    },
};
</script>

<style scoped lang="less">
.app-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    .app-main {
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        .app-content {
            flex: 1;
        }
    }
}
</style>
