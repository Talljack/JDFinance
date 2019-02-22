<template>
  <div>
    <Header></Header>
    <Rslider></Rslider>
    <Daily></Daily>
    <In></In>
    <More></More>
    <Footer></Footer>
    <Navbar></Navbar>
  </div>
</template>
<script>
import Header from '../public/header';
import Rslider from './rslider';
import Daily from './daily';
import In from './in';
import More from './more';
import Footer from '../public/footer';
import Navbar from '../public/navbar';
export default {
  name: 'Raise',
  components: {
    Header,
    Rslider,
    Daily,
    In,
    More,
    Footer,
    Navbar,
  }
}
</script>
<style lang="scss">
  
</style>
