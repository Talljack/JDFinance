<template>
  <div>
    <Header></Header>
    <Mslider></Mslider>
    <Ad></Ad>
    <Select></Select>
    <Adb></Adb>
    <Finance></Finance>
    <Adc></Adc>
    <Footer :show="show"></Footer>
    <Navbar></Navbar>
  </div>
</template>
<script>
import Header from '../public/header';
import Mslider from './mslider';
import Ad from './ad';
import Select from './select';
import Adb from './adb';
import Finance from './finance';
import Adc from './adc';
import Footer from '../public/footer';
import Navbar from '../public/navbar';
export default {
  name: 'Money',
  components: {
    Header,
    Mslider,
    Ad,
    Select,
    Adb,
    Finance,
    Adc,
    Footer,
    Navbar
  },
  data() {
    return {
      show: false,
    }
  }
}
</script>
<style lang="scss">
  
</style>
