<template>
  <v-sheet max-width="300" class="mx-auto">
    <v-form validate-on="submit lazy" @submit.prevent="submit">
      <v-text-field v-model="userName" :rules="rules" label="Имя"></v-text-field>

      <v-text-field v-mask="'(+7) ###-###-##-##'" v-model="phone" :rules="rules" label="Номер"></v-text-field>

      <v-btn :loading="loading" type="submit" block class="mt-2" text="Подтвердить"></v-btn>
    </v-form>
  </v-sheet>
</template>


<script>
import {mask} from 'vue-the-mask'

export default {
  directives: {mask},
  data() {
    return {
      loading: false,
      rules: [value => this.checkApi(value)],
      timeout: null,
      userName: '',
      phone: '+7 '
    }
  },
  methods: {
    async submit(event) {
      this.loading = true

      const results = await event

      this.loading = false

      alert(JSON.stringify(results, null, 2))
    },
    async checkApi(userName) {
        return new Promise(resolve => {
          clearTimeout(this.timeout)

          this.timeout = setTimeout(() => {
            if (!userName) return resolve('Please enter a user name.')
            if (userName === 'johnleider')
              return resolve('User name already taken. Please try another one.')

            return resolve(true)
          }, 500)
        })
      }
  },
}
</script>


<style lang="scss">
</style>