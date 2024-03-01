<template>
  <div class="contact-numbers-container mt-16">
    <h1><b>Адрес:</b> Санкт-Петербург, Проспект Тореза, д.118</h1>
    <h1><b>Номер телефона:</b> +7(911)011-12-25</h1>
    <h1><b>Номер телефона:</b> +7(911)201-08-88</h1>
    
  </div>
</template>


<script>
export default {

}
</script>


<style scoped lang="scss">
.contact-numbers-container{
    display: flex;
    justify-content: flex-start;
    h1 {
        font-weight: normal;
    }
    
}

@media (max-width: 1279px) {
    h1{
      font-size: 17px;
      margin: 0 10px;
    }
}
@media (max-width: 660px) {
    .contact-numbers-container{
      flex-direction: column;
    }
    h1{
        text-align: left;
        margin-top: 10px
    }
}
</style>