<template>
  <div class="d-flex">
    <ServiceLine 
      class="mt-4 d-flex flex-column" 
      v-for="item in services" :key="item"
      :services="item">
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
      ]
    }
  }
}
</script>


<style lang="scss">
  
</style>