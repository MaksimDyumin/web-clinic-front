<template>
  <v-footer
    class="custom-colour text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
      Администрация клиники принимает все меры по своевременному обновлению размещенного на сайте прайс-листа, однако во избежание возможных недоразумений, советуем уточнять стоимость услуг в регистратуре. Размещенный прайс не является офертой.
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Петродент</strong>
    </div>
  </v-footer>
</template>


<script>
export default {
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  },
}
</script>


<style lang="scss">
  .custom-colour {
    -v-theme-overlay-multiplier: 1;
    background-color:#007fa0!important;
    color: #ffffff !important;
  }
</style>