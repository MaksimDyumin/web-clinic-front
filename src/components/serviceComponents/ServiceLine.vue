<template>
  <div>
    <v-card class="service-line-container">
      {{ services.serviceName }}
    </v-card>
    <div class=" sub-services-container active">
      <div v-for="subService in services.subServices" :key="subService" class="text-container">
        <h3>{{ subService.serviceName }}</h3>
        <v-divider></v-divider>
        <p>{{ subService.servicePrice }}Р</p>
      </div>
    </div>

  </div>

</template>


<script>
export default {
  props: {
    services: {
      // type: Object,
      default: () => []
    }
  },
}
</script>


<style scoped lang="scss">

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

.sub-services-container{
  background-color: #f2eeee;
  height: 0;
  overflow: hidden;
  transition: all 0.5s;
}
.active {
  height: 100%;
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