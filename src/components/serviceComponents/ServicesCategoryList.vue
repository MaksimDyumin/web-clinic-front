<template>
  <div class="service-list">

    <v-card @click="changeActiveCategory(index, skill)"
      :class="`skill-card ${servicesStore?.activeCategory?.index === index ? 'background-active' : ''}`"
      v-for="skill, index in professionalSkills" :key="skill"
      :elevation="servicesStore?.activeCategory?.index === index ? 7 : 1">
      <div>
        <h3>{{ skill }}</h3>
      </div>
    </v-card>


  </div>
</template>


<script>
import { useServicesStore } from "@/stores/services";

export default {
  setup() {
    const servicesStore = useServicesStore()
    return { servicesStore }
  },
  data() {
    return {
      professionalSkills: [
        // 'Консультации',
        // 'Исследования и Диагностика',
        // 'Анестезия, Инъекции',
        // 'Профилактика',
        // 'Отбеливание',
        // 'Восстановление зуба пломбой',
        // 'Лечение осложнений кариеса',
        // 'Шинирование',
        // 'Пародонтология терапевтическая',
        // 'Хирургические услуги',
        // 'Имплантация (хирургическая часть)',
        // 'Оттиски',
        // 'Модели, прикус',
        // 'Несъемное протезирование',
        // 'Съемные протезы',
        // 'Протезирование с опорой на имплантаты',
        // 'Съемное протезирование с опорой на имплантаты',
        // 'Прочие ортопедические услуги',
        // 'Лабораторные конструкции',
        // 'Рентгенология',
        // 'Ортодонтия',
        "Рентген - диагностика",
        "Терапевтическое  лечение зубов",
        "Эстетическая стоматология",
        "Профессиональная гигиена",
        "Пародонтология",
        "Ортопедическая стоматология",
        "Ортодонтия",
        "Отбеливание",
        "Имплантация",
      ],
    }
  },
  methods: {
    changeActiveCategory(index, nameSkill) {
      let newValue
      newValue = {
        index: index,
        name: nameSkill
      }
      
      this.servicesStore.setActiveCategory(newValue)
    }
  },
}
</script>


<style scoped lang="scss">
.service-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.skill-card {
  // width: 195px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 5px;
}

.background-active {
  background-color: #007fa0;
}

@media (max-width: 960px) {
  .service-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 600px) {
  .service-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 460px) {
  .service-list {
    grid-template-columns: repeat(1, 1fr);
  }

  .skill-card {
    height: 75px;
  }
}
</style>