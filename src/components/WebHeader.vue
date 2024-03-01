<template>
  <v-app-bar app :elevation="2">
    <v-container class="d-flex align-center justify-space-between ">
      <div @click="$router.push('/')" class="header-title">
        Петродент
      </div>

      <div class="contacts-container">
        <span>Санкт-Петербург, <br>Проспект Тореза, д.118</span>
        <span class="ml-4">+7(911)011-12-25<br>+7(911)201-08-88</span>
      </div>

      <a href="tel:+79110111225">
        <v-icon class="phone-icone d-sm-none">mdi-phone-outgoing-outline</v-icon>
      </a>

      <v-app-bar-nav-icon class="d-sm-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <nav class="nav-container">
        <v-btn @click="changeRoute(navItem)" v-for="navItem in navItems" :key="navItem.routeName" class="nav-item rounded-0">
          {{ navItem.name }}
        </v-btn>
      </nav>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="top" temporary>
    <div class="d-flex flex-column">
      <v-btn @click="changeRoute(navItem)" v-for="navItem in navItems" :key="navItem.routeName" class="mobile-nav-item rounded-0 border-0">
        {{ navItem.name }}
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>


<script>
export default {
  data() {
    return {
      drawer: false,
      navItems: [
        {
          name: 'О клинике',
          routeName: 'home'
        },
        {
          name: 'Услуги',
          routeName: 'services'
        },
        {
          name: 'Врачи',
          routeName: 'doctors'
        },
        {
          name: 'Контакты',
          routeName: 'contacts'
        }
      ]
    }
  },
  methods: {
    changeRoute(navItem){
      if (this.$route.name === navItem.routeName) {
        return
      }
      this.$router.push({name: navItem.routeName})
    }
  },
}
</script>


<style scoped lang="scss">
nav {
  padding: 0;
}

.header-title {
  min-width: 0;
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.75rem;
  text-transform: none;
  cursor: pointer;
}

.mobile-nav-item{
  font-size: 25px;
  border: none;
  box-shadow: none;
}
.mobile-nav-item + .mobile-nav-item{
  margin-top: 7px;
}

@media (max-width: 960px) {
  .v-spacer {
    display: none;
  }
}

@media (max-width: 600px) {
  .nav-container {
    display: none;
  }

  .v-spacer {
    display: none;
  }

  .phone-icone {
    // display: block!important;
  }
}

.contacts-container {
  display: flex;
}

@media (max-width: 1280px) {
  .contacts-container {
    display: none;
  }
}
</style>