<template>
  <div class="services-container mar-t mb-5">
    <!-- <h2 class="text-center decorated-title">Услуги</h2> -->
    <div class="services-header">
      <h2 class="text-center decorated-title">Услуги</h2>
      <span @click="$router.push({name: 'services'})">Остальные услуги</span>
    </div>
    <div class="item-container mt-6">
      <v-card
        @click="goToService(index)"
        v-for="item, index in items"
        :key="item"
        elevation="4"
      >
        <div class="item">
          <h3>{{item}}</h3>
          <v-img :src="'/imgs/services.jpg'" aspect-ratio="1/1"></v-img>
        </div>
      </v-card>
      
    </div>

  </div>
</template>


<script>
import { useServicesStore } from '@/stores/services';

export default {
  setup() {
    const servicesStore = useServicesStore()
    return {servicesStore}
  },
  data() {
    return {
      items: [
      "Рентген - диагностика",
      "Терапевтическое  лечение зубов",
      "Эстетическая стоматология",
      "Профессиональная гигиена",
      "Пародонтология",
      "Ортопедическая стоматология",
      "Ортодонтия",
      "Отбеливание",
      // "Имплантация",
      ],
    }
  },
  methods: {
    goToService(index){
      const newValue = {
          index: index,
          name: this.items[index]
        }
      this.servicesStore.setActiveCategory(newValue)
      this.$router.push({name: 'services'})
    }
  },
}
</script>


<style lang="scss">
.services-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .services-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    span{
      cursor: pointer;
    }
    span:hover{
      text-decoration: underline;
    }
  }

  .item-container{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px 20px;
    

    .item {
      width: 100%;
      height: 100%;
      // border: 1px solid #000;
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      cursor: pointer;

      h3{
        height: 56px;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 2;
        width: 100%;
      }
    }
  }
  
  @media (max-width: 1279px) {
    .item-container{
      width: 100%;
    }
  }
  @media (max-width: 960px) {
    .item-container{
      width: 100%;
      gap: 10px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 800px) {
    .item-container{
      width: 100%;
      gap: 10px;
    }
  }
  @media (max-width: 600px) {
    .item-container{
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      gap: 20px;
    }
  }
  @media (max-width: 460px) {
    .item-container{
      grid-template-columns: repeat(1, 1fr);
      width: 70%;
    }
  }
  @media (max-width: 320px) {
    .item-container{
      width: 100%;
    }
  }
}
</style>

