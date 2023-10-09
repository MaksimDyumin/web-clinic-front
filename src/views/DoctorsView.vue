<template>
  <div class="doctors">
    <h1>Доктора клиники Петродент</h1>
    <DoctorsList></DoctorsList>
  </div>
</template>

<script>
import DoctorsList from "@/components/DoctorsList";

export default {
  components:{
    DoctorsList
  }
}
</script>