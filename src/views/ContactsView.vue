<template>
  <div class="contacts">
    <h1>Контакты клиники</h1>
    <contact-form class="mt-4" />
  </div>
</template>

<script>
import ContactForm from "@/components/contacts/ContactForm.vue";

export default {
  components:{
    ContactForm
  }
}
</script>