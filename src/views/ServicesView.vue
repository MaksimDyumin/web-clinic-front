<template>
  <div class="services">
    <h1>Услуги клиники</h1>
    <ServicesCategoryList class="mt-16" />
    <ServicesList />
  </div>
</template>

<script>
import ServicesCategoryList from "@/components/serviceComponents/ServicesCategoryList.vue";
import ServicesList from "@/components/serviceComponents/ServicesList.vue";

export default {
  components:{
    ServicesCategoryList,
    ServicesList
  }
}
</script>