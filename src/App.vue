<template>
  <v-app>
    <WebHeader></WebHeader>
    <VueHero></VueHero>

    <v-container class="main-container">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>

    </v-container>

    <WebFooter></WebFooter>
  </v-app>
</template>

<script>
import WebHeader from '@/components/WebHeader.vue'
import VueHero from '@/components/VueHero.vue'
import WebFooter from '@/components/WebFooter.vue'

export default {
  components: {
    WebHeader, VueHero, WebFooter
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active до версии 2.1.8 */
  {
  opacity: 0;
}

.logo-container {
  height: 50px;
  width: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.main-container {
  min-height: 100vh;
}</style>
