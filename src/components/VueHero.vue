<template>
  <div class="hero-block">
    <div class="title-hero text-white title-slide">
      {{ routeMapper()?.title }}
    </div>
    <div class="hero-img-container">
      <v-img height="500" aspect-ratio="16/9" cover src="https://biomg.ru/uploads/images/notes/6-4644b.jpg">
      </v-img>
    </div>


    <!-- <v-carousel :show-arrows="false" hide-delimiters >
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
        <div class="d-flex fill-height justify-center align-center">
          <div class="title-hero text-white">
            {{ item.title }}
          </div>
        </div>
      </v-carousel-item>
    </v-carousel> -->

  </div>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://topdent.ru/media/772/772558.jpg',
          title: "О клинике"
        },
        {
          src: 'https://sovcominvest.ru/uploads/photo/25398/image/2862f154ebc83243ad15e83660beaa2e.jpg',
          title: "Услуги"
        },
        {
          src: 'https://sovcominvest.ru/uploads/photo/25398/image/2862f154ebc83243ad15e83660beaa2e.jpg',
          title: "Врачи"
        },
        {
          src: 'https://sovcominvest.ru/uploads/photo/25398/image/2862f154ebc83243ad15e83660beaa2e.jpg',
          title: "Контакты"
        },
      ]
    }
  },
  methods: {
    routeMapper() {
      const routeName = this.$route.name
      const mapRout =
      {
        home: {
          src: 'https://topdent.ru/media/772/772558.jpg',
          title: "О клинике"
        },
        services: {
          src: 'https://topdent.ru/media/772/772558.jpg',
          title: "Услуги"
        },
        doctors: {
          src: 'https://topdent.ru/media/772/772558.jpg',
          title: "Врачи"
        },
        contacts: {
          src: 'https://topdent.ru/media/772/772558.jpg',
          title: "Контакты"
        },
      }
      return mapRout[routeName]
    }
  }
}
</script>


<style>
.hero-block {
  margin-top: 64px;
  position: relative;
}

.title-slide {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}

.hero-img-container {
  filter: brightness(.5);
}

.v-img__img {}

.title-hero {
  font-size: 3.75rem !important;
  font-weight: 300;
  line-height: 3.75rem;
  letter-spacing: -0.0083333333em !important;
  text-transform: none !important;
}
</style>