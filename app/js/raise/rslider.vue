<template>
  <Panel title="金融头条" :class="$style.panel">
    <section :class="$style.content">
      <swiper :options="swiperOption">
        <swiper-slide>百万白条券免费送，速来领取！！ <em>></em> </swiper-slide>
        <swiper-slide>签到领流量，1元500M！<em>></em> </swiper-slide>
      </swiper>
    </section>
  </Panel>
</template>
<script>
import Panel from '../core/panel';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'Rsilder',
  components: {
    Panel,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        loop: true,
        autoplay: true
      }
    }
  }
}
</script>
<style lang="scss">
  .swiper-container {
    height: 72px;
    .swiper-slide {
      font-family: PingFangSC-Medium;
      font-size: 28px;
      color: #333;
      overflow: hidden;
      width: 380px;
      padding-right: 30px;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: relative;
      em {
        position: absolute;
        display: inline-block;
        margin-left: 30px;
        left: 350px;
        top: 0px;
        color: #ddd;
      }
    }
  }
</style>
<style lang="scss" module>
  @import '../../css/element.scss';
  .panel {
   @include panel;
   & > h4 {
     display: none;
   }
   margin-top: 120px !important;
   .content {
     height: 72px;
     width:420px;
     line-height: 72px;
     overflow: hidden;
     padding-left: 178px;
     background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
   }
  }
</style>
