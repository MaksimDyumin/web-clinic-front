<template>
  <v-card class="service-list-card mt-16" elevation="2">
    <transition name="fade" mode="out-in">
      <h2 class="mb-8 ">{{ servicesStore?.activeCategory?.name }}</h2>
    </transition>
    
    
      <div  class="items-container">
        <transition name="fade" mode="out-in">
          <div v-if="!servicesStore.loading" class="w-100">
            <div v-for="(service, index) in getCategoryServices(servicesStore?.activeCategory?.name)" :key="index" class="card-item">
              <h3> {{ 5000 }}р</h3>
              <span>{{ service }}</span>
            </div>
          </div>
          
          <div v-else>
            <v-progress-circular indeterminate></v-progress-circular>
          </div>
        </transition>
    </div>
    
    
   

  </v-card>
</template>


<script>
import { useServicesStore } from "@/stores/services";

export default {
  setup() {
    const servicesStore = useServicesStore()
    return { servicesStore }
  },
  methods: {
    getCategoryServices(CategoryServicesName){
      return this.services.map((value) => {
        return value.replace('Service', CategoryServicesName)
      })
    }
  },
  data() {
    return {
      services: [
        'Service такая хорошая услуга!',
        'Service такая хорошая услуга!',
        'Service такая хорошая услуга!',
        'Service такая хорошая услуга!',
        'Service такая хорошая услуга!',
        'Service такая хорошая услуга!',
        'Service такая хорошая услуга!',
        'Service такая хорошая услуга!',
        'Service такая хорошая услуга!',
      ]
    }
  },
}
</script>


<style lang="scss">
.service-list-card {
  display: flex;
  flex-direction: column;
  padding: 20px;

  h2{
    min-height: 36px;
    transition: all ease-in-out 0.5;
  }
}

.items-container {
  max-height: 500px;
  height: 500px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-item {
  padding: 20px 0;
  border-bottom: 1px solid rgb(165, 165, 165);
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    margin-left: 50px;
  }
}
</style>