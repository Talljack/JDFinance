<template>
  <article :class="$style.content">
    <Slider :items="items" :cname="$style.slider"></Slider>
  </article>
</template>
<script>
import Slider from "../core/slider";
export default {
  name: "Mslider",
  components: {
    Slider
  },
  data() {
    return {
      items: [
        {
          href: "Money",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400"
        },
        {
          href: "Money",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400"
        },
        {
          href: 'Money',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/26590/6/7266/149007/5c6a7ab7E5a201499/3949ded503668475.png?width=750&height=400'
        }
      ]
    };
  }
};
</script>
<style lang="scss" module>
  .content {
    padding-top: 120px;
    background: #fff;
    .slider {
      .swiper-slide {
        height: 300px;
      }
    }
  }
  
</style>
