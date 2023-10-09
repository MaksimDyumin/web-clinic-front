<template>
  <Carousel :items-to-show="4" :breakpoints="breakpoints">
    <Slide v-for="slide in 10" :key="slide">
      <div class="d-flex flex-column">
        <v-card elevation="4">
          <div class="d-flex flex-column">
            <v-img class="picture"  aspect-ratio="1" cover
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
          </div>
        </v-card>
        <span class="doctor-name mt-4">Генрих Абович Хацкевич</span>
        <span class="doctor-dolj">Челюстно-лицевой хирург</span>
      </div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'BasicWrap',
  components: {
    Carousel,
    Slide,
    Pagination,
    // Navigation,
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
  },
  methods: {
  }
})
</script>

<style lang="scss">
.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
  cursor: pointer;
  transition: all .5;
}

.carousel__slide:hover {
  filter: brightness(40%);
  transition: all 0.5s;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  /* border: 5px solid white; */
}

.picture-container {
  // border-radius: 50%;
  overflow: hidden;
}

.picture {
  // border-radius: 50%;
  border-radius: 5px;
  height: 300px;
  object-fit: cover;
  position: relative;
  z-index: 10;
}

.doctor-dolj {
  font-size: 14px;
  line-height: 24px;
  color: #868686;
  text-align: center;
}
</style>