<template>
  <div class="">
    <ServiceLine 
      class="mt-4"
      id="list"
      v-for="item in services" :key="item"
      :service="item">
    </ServiceLine>
  </div>
</template>


<script>
import ServiceLine from "@/components/serviceComponents/ServiceLine.vue";

export default {
  components: {
    ServiceLine
  },
  data() {
    return {
      services: [
        {
          serviceName: "Консультации",
          subServices: [
            {
              serviceName: 'Прием (осмотр, консультация) врача стоматолога-ортодонта первичный',
              servicePrice: 2000,
            },
            {
              serviceName: 'Прием (осмотр, консультация) врача стоматолога-ортодонта первичный',
              servicePrice: 2000,
            },
            {
              serviceName: 'Прием (осмотр, консультация) врача стоматолога-ортодонта первичный',
              servicePrice: 2000,
            },
          ]
        },
        {
          serviceName: "Рентген",
          subServices: [
            {
              serviceName: 'Прием (осмотр, консультация) врача стоматолога-ортодонта первичный',
              servicePrice: 2000,
            },
            {
              serviceName: 'Прием (осмотр, консультация) врача стоматолога-ортодонта первичный',
              servicePrice: 2000,
            },
            {
              serviceName: 'Прием (осмотр, консультация) врача стоматолога-ортодонта первичный',
              servicePrice: 2000,
              
            },
            {
              serviceName: 'Прием (осмотр, консультация) врача стоматолога-ортодонта первичный',
              servicePrice: 2000,
            },
            {
              serviceName: 'Прием (осмотр, консультация) врача стоматолога-ортодонта первичный',
              servicePrice: 2000,
            },
            {
              serviceName: 'Прием (осмотр, консультация) врача стоматолога-ортодонта первичный',
              servicePrice: 2000,
            },
          ]
        },
      ]
    }
  }
}
</script>


<style lang="scss">
  
</style>