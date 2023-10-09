import 'vuetify/styles'
// import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import { , fa } from 'vuetify/iconsets/fa'
import { aliases, mdi } from "vuetify/lib/iconsets/mdi"; 

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      // fa,
    },
  },
})

export default vuetify