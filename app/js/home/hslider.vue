<template>
  <article>
    <Slider :items="items" :cname="$style.slider"></Slider>
    <section :class="$style.list">
      <div :class="$style.item" v-for="item in enters" :key="item.img">
        <router-link :to="{name: item.href}">
          <img :src="item.img" :alt="item.title">
          <h4>{{item.title}}</h4>
        </router-link>
      </div>
    </section>
  </article>
</template>
<script>
import Slider from '../core/slider';
export default {
  components: {
    Slider,
  },
  data() {
    return {
      items: [
        {
          href: 'home',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/29274/25/5216/37518/5c3bf4f7E1a6c67cc/7a4bc2851b53fece.jpg?width=750&height=320'
        },
        {
          href: 'home',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/15510/10/5298/69592/5c3bf522E820edd64/de08228d007fbd92.jpg?width=750&height=320'
        },
        {
          href: 'home',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/30243/9/410/139307/5c3bf5a0E4c711dc5/2580ffc99ae33977.jpg?width=750&height=320'
        },
        {
          href: 'home',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t1/16138/26/5377/46685/5c3bf546E28efb5ca/905f97ab4cb47ea5.jpg?width=750&height=320'
        },
      ],
      enters: [
        {
          href: 'download',
          img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
          title: '优惠券'
        },
        {
          href: 'home',
          img: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
          title: '领福利'
        },
        {
          href: 'home',
          img: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
          title: '抢钢镚'
        },
        {
          href: 'home',
          img: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
          title: '白条提额'
        },
        {
          href: 'home',
          img: '//img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
          title: '工资理财'
        },
      ],
    }
  }
}
</script>
<style lang="scss" module>
  @import '../../css/element.scss';
  .slider {
    margin-top: 120px;
    img {
      width: 100%;
    }
  }
  .list {
    @include list(row);
    background: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    a {
      text-decoration: none;
    }
    .item {
      text-align: center;
      img {
        display: inline-block;
        width: 90px;
        height: 90px;
      }
      h4 {
        font-size: 26px;
        margin-top: 12px;
        color:#666;
      }
    }
  }
</style>
