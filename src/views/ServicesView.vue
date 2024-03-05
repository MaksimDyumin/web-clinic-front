<template>
  <div class="services">
    <h1>Услуги клиники</h1>
    <!-- <ServicesCategoryList class="mt-16" />
    <ServicesList /> -->
    <ServicesList1></ServicesList1>
  </div>
</template>

<script>
import ServicesCategoryList from "@/components/serviceComponents/ServicesCategoryList.vue";
import ServicesList from "@/components/serviceComponents/ServicesList.vue";

import ServicesList1 from "@/components/serviceComponents/ServicesList1.vue";

export default {
  components:{
    ServicesCategoryList,
    ServicesList,

    ServicesList1
  }
}
</script>