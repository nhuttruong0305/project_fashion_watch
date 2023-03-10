<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  }
}

</script>

<template> 
  <!-- <Header></Header> -->
  <router-view name="header"></router-view>
  <main>
    <router-view></router-view>
  </main>
  <!-- <Footer></Footer> -->
  <router-view name="footer"></router-view>
</template>

<style scoped>

</style>
