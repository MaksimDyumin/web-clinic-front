<template>
  <div class="doctor-card-container mar-t">
      
      <div class="about-doctor">
        <div class="text-container">
          <h3>ФИО {{ $route?.params?.id }}</h3>
          <p class="mt-8"> Врач-стоматолог хирург имплантолог, стаж работы по специальности 9 лет.</p>
        </div>
        <div class="img-container">
          <img :src="require('@/assets/imgs/photo.jpg')" alt="">
        </div>
      </div>
    
  </div>
</template>


<script>
export default {
  
}
</script>


<style scoped lang="scss">
  .about-doctor{
    display: flex;
    .text-container{
      width: 66%;
    }
  }

  .doctor-card-container{
    // background-image: url("https://gas-kvas.com/uploads/posts/2023-02/1675484251_gas-kvas-com-p-kartinki-dlya-fonovogo-risunka-raboch-stol-43.jpg");
  }
  
  .img-container{
    width: 300px;
    height: 450px;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 960px){
    .about-doctor{
      flex-direction: column;
      align-items: center;
    }
    .img-container{
      margin-top: 16px;
    }
  }
</style>