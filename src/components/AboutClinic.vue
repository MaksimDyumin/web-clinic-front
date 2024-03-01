<template>
  <div class="mt-16">
    <h2 class="text-center decorated-title">О клинике</h2>
    <v-card class="mt-12" elevation="0">
      <div class="about-clinic">
        <div class="text-container">

          <span class="name-title">Шторина Галина Борисовна</span>

          <p class="mt-8">Для меня стоматология – это смысл всей моей жизни. Пародонтологией я занимаюсь почти 50 лет,
            закончив в 1971 году Первый Ленинградский Медицинский институт, отработав 3 года по распределению в
            Новгородской области, поступила в 1974 году в ординатуру, в 1978 году – в аспирантуру, в 1987 году защитила
            кандидатскую диссертацию по пародонтологии.</p>

          <p class="mt-2">С 1989 года я работала на 1 кафедре терапевтической стоматологии ЛЕНГИДУВА, в 1996 года перешла
            на кафедру ортопедической стоматологии, возглавив доцентуру по пародонтологии для ортопедов. Была членом
            конфликтной комиссии, + занималась обучением врачей и работала в клинике. </p>
          <p class="mt-2">НИ сейчас продолжаю совмещать обучение врачей с клиническим приемом. Мои дочери стоматологи и
            мои ученики составили нашу дружную команду.</p>
        </div>
        <div class="img-container">
          <img src="imgs/glv.jpg" alt="">
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
.decorated-title {
  display: inline;
  border-bottom: 1px solid black;
}

.name-title{
  width: 100%;
  text-align: center;
  font-weight: bold; 
}

.about-clinic {
  display: flex;
  text-align: start;
}

.text-container {
  width: 50%;
  padding: 0 20px;
  text-align: justify;
  display: flex;
  flex-direction: column;
  
  p {
    font-size: 15px;
  }
}

.img-container {
  // height: 470px;
  width: 50%;
  overflow: hidden;
  border-radius: 5px;
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
}
</style>