<template>
  <div>
    <Header></Header>
    <Islider></Islider>
    <Welfare></Welfare>
    <Service></Service>
    <Footer :show="show"></Footer>
    <Navbar></Navbar>
  </div>
</template>
<script>
import Header from '../public/header';
import Islider from './islider';
import Welfare from './welfare';
import Service from './service';
import Footer from '../public/footer';
import Navbar from '../public/navbar';
export default {
  name: 'Ious',
  components: {
    Header,
    Islider,
    Welfare,
    Service,
    Footer,
    Navbar,
  },
  data() {
    return {
      show: true,
    }
  }
}
</script>
<style lans="scss">

</style>
