<template>
  <div class="">
    <ServiceLine 
      class="mt-4"
      id="list"
      v-for="item in servicesStore.services" :key="item"
      :service="item">
    </ServiceLine>
  </div>
</template>


<script>
import ServiceLine from "@/components/serviceComponents/ServiceLine.vue";

import { useServicesStore } from '@/stores/services';

export default {
  setup() {
    const servicesStore = useServicesStore()
    return {servicesStore}
  },
  components: {
    ServiceLine
  },
  data() {
    return {
    }
  }
}
</script>


<style lang="scss">
  
</style>