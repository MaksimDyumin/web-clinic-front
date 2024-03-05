<template>
  <div class="doctors-list-container mar-t">
    <v-card 
      @click="$router.push({name: 'doctor', params:{id: doctor.id}})"
      v-for="doctor in doctorsStore.doctors" :key="doctor.id"
      class="doctor-card"
    >
      <div class="img-container">
        <img :src="`/imgs/${doctor.imgSrc}`" alt="">
      </div>
      <h4>Фамилия Имя Отчество</h4>
      <h5>Должность Направление</h5>
    </v-card>
    
  </div>
</template>


<script>
import { useDoctorsStore } from "@/stores/doctors";

export default {
  setup() {
    const doctorsStore = useDoctorsStore()

    return {
      doctorsStore
    }
  },
}
</script>


<style lang="scss">
.doctors-list-container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 20px;
}

.doctor-card{
  height: 100%;
  width: 100%;
  cursor: pointer;
  position: relative;
  border: none;
  height: 450px;

  .img-container{
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: flex ;
    }
  } 
  
  color: #fff;
  h4{
    position: absolute;
    z-index: 1;
    bottom: 25px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
  h5{
    position: absolute;
    z-index: 1;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
}

@media (max-width: 1280px) {
  .doctors-list-container{
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 700px) {
  .doctors-list-container{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 460px) {
  .doctors-list-container{
    grid-template-columns: repeat(1, 1fr);
    width: 80%;
    margin: auto;
  }
}
</style>