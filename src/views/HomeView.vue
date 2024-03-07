<template>
  <div class="home">
    <AboutClinic />
    <ClinicServices />
    <DoctorsTeam />
    <LicenseCarousel />
  </div>
</template>

<script>
import AboutClinic from '@/components/AboutClinic.vue'
import DoctorsTeam from '@/components/DoctorsTeam.vue'
import ClinicServices from '@/components/ClinicServices.vue'
import LicenseCarousel from "@/components/licenses/LicenseCarousel.vue";
export default {
  name: 'HomeView',
  components: {
    AboutClinic, DoctorsTeam,
    ClinicServices,
    LicenseCarousel
  }
}
</script>

<style lang="scss">

</style>