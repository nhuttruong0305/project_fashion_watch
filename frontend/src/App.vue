<script>
import HomePage from './views/HomePage.vue';
import About from './views/About.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Product from './views/Product.vue';
import News from './views/News.vue';

export default {
  components: {
    HomePage,
    About,
    Header,
    Footer,
    Product,
    News,
  }
}

</script>

<template> 
  <Header></Header>
  <main>
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<style scoped>

</style>
