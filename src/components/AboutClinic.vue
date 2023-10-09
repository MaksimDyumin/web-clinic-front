<template>
  <div class="mt-16">
    <h2 class="text-center decorated-title">О клинике</h2>
    <v-card class="mt-12" elevation="0">
      <div class="about-clinic">
        <div class="text-container">

          <p class="mt-8">Клиника оказывает все виды стоматологических услуг для взрослых на самом современном уровне.
            Клиника семейная, работает мама и две дочери, что создает атмосферу заботы и доверия внутри коллектива. Наша
            совместная миссия - предоставлять пациентам качественную стоматологическую помощь, обеспечивая максимальный
            комфорт и уверенность в результате.</p>
          <p class="mt-2">Мы искренне заботимся о здоровье и улучшении улыбок наших пациентов. В клинике мы используем
            современное оборудование и следим за последними тенденциями в стоматологической практике. Наши специалисты
            постоянно обучаются и совершенствуют свои навыки, чтобы предоставлять нашим пациентам лучшие решения в области
            стоматологии.</p>
          <p class="mt-2">Наша цель - создать дружелюбную и профессиональную среду, где каждый пациент чувствует себя
            уверенно и в безопасности. Мы стремимся к тому, чтобы каждое посещение клиники стало приятным опытом, и мы
            гордимся тем, что наша работа позволяет людям улучшать свое здоровье и уверенность в себе.</p>
        </div>
        <div class="img-container">
          <img :src="require('@/assets/imgs/photo.jpg')" alt="">
        </div>
      </div>
    </v-card>
  </div>
</template>


<script>
export default {

}
</script>


<style scoped lang="scss">
.decorated-title{
  display: inline;
  border-bottom: 1px solid black;
}

.about-clinic {
  display: flex;
  text-align: start;
}

.text-container {
  width: 50%;
  padding: 0 20px;

  p {
    font-size: 15px;
  }
}

.img-container {
  height: 470px;
  width: 50%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 960px) {
  .about-clinic {
    flex-direction: column;
  }

  .text-container {
    width: 100%;
  }

  .img-container {
    width: 100%;
    margin-top: 40px;
  }
}</style>