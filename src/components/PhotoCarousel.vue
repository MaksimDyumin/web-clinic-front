<template>
  <Carousel :breakpoints="breakpoints">

    <Slide v-for="imgc in imgsSrcs" :key="imgc" @click="$router.push({ name: 'doctor', params: { id: imgc.id } })">
      <div class="d-flex flex-column w-100 ">
        <v-card elevation="4">
          <div class="d-flex flex-column slide-content">
            <v-img class="picture" aspect-ratio="1" cover :src="`/imgs/${imgc.src}`"></v-img>
          </div>
        </v-card>
        <span class="doctor-name mt-4">Генрих Абович Хацкевич</span>
        <span class="doctor-dolj">Челюстно-лицевой хирург</span>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>

  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'BasicWrap',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
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
      imgsSrcs: [
        { src: 'v1.jpg', alt: 'Изображение 1', id: 1 },
        { src: 'v2.jpg', alt: 'Изображение 1', id: 2 },
        { src: 'v3.jpg', alt: 'Изображение 1', id: 3 },
        { src: 'v4.jpg', alt: 'Изображение 1', id: 4 },
        { src: 'v5.jpg', alt: 'Изображение 1', id: 5 },
      ]
    }
  },
  methods: {
    getImg(name) {
      // const imageUrl = `file://wsl.localhost/Ubuntu/home/maxim/business_card_website/frontend/web-clinic-front/src/assets/imgs/${name}`
      // return imageUrl
      return ''
    },
    publicPath() {
      return process.env.BASE_URL;
    }
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
  cursor: pointer;
  transition: all .5;
}

.carousel__slide:hover {
  filter: brightness(40%);
  transition: all 0.3s ease;
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