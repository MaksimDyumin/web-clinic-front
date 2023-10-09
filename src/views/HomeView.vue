<template>
  <div class="home">
    <AboutClinic />
    <DoctorsTeam />
    <ClinicServices />
  </div>
</template>

<script>
import AboutClinic from '@/components/AboutClinic.vue'
import DoctorsTeam from '@/components/DoctorsTeam.vue'
import ClinicServices from '@/components/ClinicServices.vue' 
export default {
  name: 'HomeView',
  components: {
    AboutClinic, DoctorsTeam,
    ClinicServices
  }
}
</script>

<style lang="scss">

</style>