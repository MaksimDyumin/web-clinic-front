<template>
  <div class="contact-numbers-container mt-16">
    <h2><b>Адрес:</b> Санкт-Петербург, Проспект Тореза, д.118</h2>
    <h2><b>Номер телефона:</b> +7(911)011-12-25</h2>
    <h2><b>Номер телефона:</b> +7(911)201-08-88</h2>
  </div>
  <div class="map-container mt-8">
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A792815670436bb5f13785d0c5fc521cbe704c3dc3ec6484687cf11c45d0e716c&amp;source=constructor" width="100%" height="537" frameborder="0"></iframe>
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
    h2 {
        font-weight: normal;
    }
    
}

@media (max-width: 1279px) {
    h2{
      font-size: 17px;
      margin: 0 10px;
    }
}
@media (max-width: 660px) {
    .contact-numbers-container{
      flex-direction: column;
    }
    h2{
        text-align: left;
        margin-top: 10px
    }
}
</style>