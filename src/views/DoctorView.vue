<template>
  <div class="doctor-view-container">
    <DoctorCard />
    <DoctorSkills class="mar-t" />
  </div>
</template>


<script>
import DoctorCard from "@/components/DoctorCard";
import DoctorSkills from "@/components/DoctorSkills.vue";

export default {
  components:{
    DoctorCard,
    DoctorSkills
  }
}
</script>


<style lang="scss">
  
</style>