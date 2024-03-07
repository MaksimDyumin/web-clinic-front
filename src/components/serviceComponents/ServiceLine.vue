<template>
  <div>
    <v-card @click="openList(service.serviceName)" class="service-line-container">
      {{ service.serviceName }}
    </v-card>
    <div class="sub-services-container" :class="`${servicesStore.activeService == service.serviceName ? 'active' : ''}`" id="subCon">
      <div 
        v-for="subService in service.subServices" :key="subService" 
        :class="`text-container ${servicesStore.activeService == service.serviceName ? 'active' : ''}`"
      >
        <h3>{{ subService.serviceName }}</h3>
        <v-divider></v-divider>
        <p>{{ subService.price }}Р</p>
      </div>
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
  props: {
    service: {
      // type: Object,
      default: () => []
    }
  },
  methods: {
    openList(serviceName) {
      if (this.servicesStore.activeService === serviceName) {
        this.servicesStore.activeService = ''
        return
      }
      console.log('dasads')
      this.servicesStore.activeService = serviceName
    }
  }
}
</script>


<style lang="scss">

.service-line-container {
  display: flex;
  flex-direction: column;
  min-height: 60px;
  text-align: center;
  justify-content: center;
  background-color: #007fa0;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}


#list #subCon{
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s;
  overflow: auto;
}



.active {
  max-height: 530px!important;
}

.text-container {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.text-container:first-child {
  margin-top: 20px;
}
.text-container + .text-container {
  margin-top: 10px;
}

h3 {
  color: #333;
  font-size: 1.2em;
  margin-bottom: 8px;
}

p {
  color: #666;
  font-size: 1.2em;
  margin: 0;
  padding-top: 5px;
}
</style>