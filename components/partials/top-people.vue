<template>
  <div class="top-people">
    <client-only>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="index in 10" :key="index" class="py-2">
          <div class="top-person">
            <div class="top-person-rating"></div>
            <div class="top-person-photo aspect-w-1 aspect-h-1 bg-cover bg-no-repeat bg-center rounded-full"
              :style="getImage(index)"></div>
            <div class="mt-2 text-center">
              <h3>Alex Chzen</h3>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
  export default {
    name: "TopPeople",
    data: () => ({
      swiperOptions: {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 5,
        autoplay: {
          delay: 1500,
        },
        freeMode: {
          enabled: true,
          sticky: true,
        },
      }
    }),
    methods: {
      getImage(index) {
        return `background-image:url(https://i.pravatar.cc/100?img=${index})`;
      }
    }
  }

</script>

<style lang="scss" scoped>
  .top-person {
    @apply bg-w-white shadow p-3;

    h3 {
      @apply text-xxs;
    }
  }

</style>
