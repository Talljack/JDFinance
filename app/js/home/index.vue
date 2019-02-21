<template lang="html">
    <div>
      <Header></Header>
      <Slider></Slider>
      <Novice></Novice>
      <Borrow></Borrow>
      <Money></Money>
      <Product></Product>
      <Life></Life>
      <Footer></Footer>
      <Navbar></Navbar>
    </div>
</template>

<script>
import Header from '../public/header';
import Slider from './hslider';
import Novice from './novice';
import Borrow from './borrow';
import Money from './money';
import Product from './product';
import Life from './life';
import Footer from '../public/footer';
import Navbar from '../public/navbar';
export default {
  components: {
    Header,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Footer,
    Navbar,
  },
}
</script>

<style lang="scss" module>

</style>
