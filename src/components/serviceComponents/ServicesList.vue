<template>
  <v-card class="service-list-card mt-16" elevation="2">
    <h2 class="mb-8 ">{{ servicesStore?.activeService?.name }}</h2>
    <div class="items-container">
      <div v-for="service in services" :key="service" class="card-item">
        <h3> {{ 5000 }}р</h3>
        <span>{{ service }}</span>
      </div>
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
  data() {
    return {
      services: [
        'Service one so cool service',
        'Service one so cool service',
        'Service one so cool service',
        'Service one so cool service',
        'Service one so cool service',
        'Service one so cool service',
        'Service one so cool service',
        'Service one so cool service',
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
  overflow: auto;
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