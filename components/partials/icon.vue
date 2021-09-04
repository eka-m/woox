<template>
    <client-only><span :class="[{'pointer': pointer == ''}]"><unicon  :name="name" :fill="active ? hover : fill" :hover-fill="hover" :width="width" :height="height" :icon-style="theme"/></span></client-only>
</template>

<script>
export default {
    name: "Icon",
    props: {
        "name": {required: true},
        "fill": {required: false, default: "#403E4E"},
        "hover": {required: false, default: null},
        "width": {required: false, default: 24},
        "height": {required: false, default: 24},
        "theme": {required: false, default: "line"},
        "pointer": {required: false, default: null},
        "active": {required: false, default: false},
    }
}
</script>
<style lang="scss" scoped>
    .pointer {
        @apply cursor-pointer;
    }
</style>