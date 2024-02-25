<template>
  <div class="service-list">

    <v-card class="skill-card" v-for="skill in professionalSkills" :key="skill">
      <h3>{{ skill }}</h3>
    </v-card>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      professionalSkills: [
        'Оперирующий пародонтолог',
        'консультант',
        'председатель врачебной комиссии',
      ]
    }
  },
}
</script>


<style scoped lang="scss">

.service-list{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.skill-card{
  // width: 195px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}
@media (max-width: 960px) {
.service-list{
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 600px) {
.service-list{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 460px) {
  .service-list{
    grid-template-columns: repeat(1, 1fr);
  }
  .skill-card{
    height: 75px;
  }
}
</style>