<template>
  <Panel title="白条福利" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item" v-for="item in items" :key="item.title">
        <img :src="item.src" alt="">
        <div>
          <h4>{{item.title}}</h4>
          <p>{{item.rate}}</p>
        </div>
        <em>{{item.sub}}</em>
      </div>
    </section>
  </Panel>
</template>
<script>
import Panel from '../core/panel';
export default {
  name: 'Finance',
  components: {
    Panel,
  },
  data() {
    return {
      items: [
        {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120',
          title: '开通白条',
          rate: '送188元礼包',
          sub: '立即开通'
        },
        {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120',
          title: '白条闪付',
          rate: '新手享158元礼包',
          sub: '随机立减'
        },
        {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120',
          title: '白条提额',
          rate: '金融app专享提额礼包',
          sub: '去提额'
        },
      ]
    }
  }
}
</script>
<style lang="scss" module>
  @import '../../css/element.scss';
  @import '../../css/variable.scss';
  .panel {
    @include panel;
    & > h4 {
      font-size: 40px;
      font-weight: 700;
      border-bottom: 1px solid #ddd;
    }
    .content {
      @include list;
      box-sizing: border-box;
      .item {
        @include list(row);
        width: 100%;
        height: 140px;
        align-items: center;
        &::after {
          content: '';
          height: 0;
          width: 100%;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          margin-left: 150px;
        }
        &:last-child {
          &::after {
            border-color: #fff;
          }
        }
        img {
          width: 88px;
          height: 88px;
          display: inline-block;
          margin: 0 32px;
        }
        > div {
          font-size: 32px;
          line-height: 1.8;
          color: #333;
          width: 324px;
          text-align: left;
          h4 {
            font-weight: 700;
          }
          p {
            color: #ff3232;
            font-size: 24px;
            line-height: 1.1;
            @include ellipsis;
          }
        }
        em {
          width: 120px;
          display: inline-block;
          text-align: right;
          color: #ff801a;
          font-size: 28px;
          position: relative;
          &::before {
            content: '';
            display: block;
            background: #ddd;
            width: 4px;
            height: 60%;
            position: absolute;
            left: 136px;
            top: 13px;
            transform: rotate(45deg);
          }
          &::after {
            content: '';
            display: block;
            width: 4px;
            height: 60%;
            background: #ddd;
            position: absolute;
            right: -20px;
            top: 2px;
            transform: rotate(-45deg)
          }
        }
      }
    }
  }
</style>
