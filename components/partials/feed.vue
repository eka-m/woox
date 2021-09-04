<template>
  <div class="feed grid grid-cols-3 gap-3">
    <div class="feed-person" v-for="index in 15" :key="index">
      <div class="feed-person-rating"></div>
      <div class="feed-person-photo aspect-w-1 aspect-h-1 bg-cover bg-no-repeat bg-center rounded-full"
        :style="getImage(index)"></div>
      <div class="mt-2 text-center">
        <h3>Alex Chzen</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Feed",
    methods: {
      getImage(index) {
        return `background-image:url(https://i.pravatar.cc/100?img=${index})`;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .feed-person {
    @apply bg-w-white shadow p-3;

    h3 {
      @apply text-xxs;
    }
  }

</style>