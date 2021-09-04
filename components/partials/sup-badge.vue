<template>
  <div>
    <client-only>
      <div class="sup-badge">
        <div>
          <slot></slot>
        </div>
        <div :style="'width:'+width+';'" class="badge-wrapper aspect-w-1 aspect-h-1" v-if="show">
          <div :class="[`badge badge-${type}`]">{{content}}</div>
        </div>
      </div>
    </client-only>
  </div>
</template>
<script>
  export default {
    name: "SubBadge",
    props: {
      "content": {
        required: false,
        default: ''
      },
      "type": {
        required: false,
        default: 'info'
      },
      "width": {
        required: false,
        default: "80%"
      },
      "show": {
        required: true,
        default: false
      },
    }
  }

</script>
<style lang="scss" scoped>
  .sup-badge {
    @apply relative;

    .badge-wrapper {
      @apply absolute -top-4 -right-3;
      .badge {
        @apply absolute top-0 left-0 right-0 bottom-0 m-auto rounded-full flex items-center justify-center text-xs;


        &-info {
          @apply bg-w-info;
        }

        &-success {
          @apply bg-w-success;
        }

        &-warning {
          @apply bg-w-warning;
        }

        &-danger {
          @apply bg-w-danger;
        }


      }
    }
  }

</style>
