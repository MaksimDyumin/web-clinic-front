<template>
  <div class="doctors-team-container d-flex flex-column mar-t">
    <div class="doctors-team-content d-flex flex-column">
      <div>
        <span class="title">Врачи клиники Петродент </span>
      </div>
      <div class="carousel-container mt-12">
        <PhotoCarousel></PhotoCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoCarousel from '@/components/PhotoCarousel.vue'

export default {
  components: {
    PhotoCarousel
  }
}
</script>

<style scoped>
.doctors-team-container {
  /* max-width: 1168px; */
  align-items: center;
  margin-bottom: 120px;
}
.doctors-team-content{
  max-width: 1470px;
  width: 100%;
}

.title {
  font-size: 30px;
  line-height: 30px;
  text-align: center;
  border-bottom: 1px solid black;
  display: inline !important;
  font-weight: 600;
}

.text {
  text-align: start;
  font-size: 12px;
  width: 75%;
  margin-top: 20px;
}

@media (min-width: 1279px) {
  .text {
    font-size: 14px;
  }
}

@media (max-width: 600px) {
  .text {
    width: 100%;
  }
}
</style>