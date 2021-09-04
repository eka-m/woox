<template>
    <div class="app-bar">
        <div>
            <div class="logo">
                WOOX
            </div>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .app-bar {
        @apply bg-white px-3 md:px-7 py-5 shadow flex justify-between items-center;
    }
</style>