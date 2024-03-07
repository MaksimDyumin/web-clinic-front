<template>
  <div class="mt-16">
    <Carousel :breakpoints="breakpoints" :wrap-around="true">
    <Slide v-for="license in licensesStore.licensesList" :key="license">
      <div class="d-flex flex-column w-100">
        <v-card elevation="4">
          <div class="d-flex flex-column slide-content">
            <v-img class="picture" aspect-ratio="1" cover :src="`/imgs/prod/${license.imgSrc}`"></v-img>
          </div>
        </v-card>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>

  </Carousel>
  </div>
</template>


<script>
import { useLicensesStore } from "@/stores/license";
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'


export default {
  setup() {
    const licensesStore = useLicensesStore()
    return {
      licensesStore
    }
  },
  components: {
    Carousel, Pagination, Slide, Navigation
  },
  data() {
    return {
      breakpoints: {
        0: {
          itemsToShow: 1,
          snapAlign: 'center',
        },
        700: {
          itemsToShow: 3,
          snapAlign: 'center',
        },
        1024: {
          itemsToShow: 4,
          snapAlign: 'start',
        },
        // 1279: {
        //   itemsToShow: 5,
        //   snapAlign: 'start',
        // },
      },
    }  
  }
}
</script>


<style scoped lang="scss">
.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-content {
  height: 400px;
}

.carousel__next {
  position: absolute;
  top: -37px;
  right: 30%;
}
.carousel__prev {
  position: absolute;
  top: -37px;
  left: 30%;
}



.carousel__slide {
  padding: 10px;
  
  transition: all .5;
}

.picture {
  // border-radius: 50%;
  border-radius: 5px;
  height: 300px;
  object-fit: cover;
  position: relative;
  z-index: 10;
  cursor: pointer;
}
</style>