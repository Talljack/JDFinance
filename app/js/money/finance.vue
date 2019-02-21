<template>
  <Panel title="理财精选" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item" v-for="item in items" :key="item.title">
        <img :src="item.src" alt="">
        <div>
          <h4>{{item.title}}</h4>
          <p>{{item.rate}}</p>
        </div>
        <em>{{item.sub}}&nbsp;</em>
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
          src: '//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76',
          title: '月度理财',
          rate: '预期年化收益率4.50%',
          sub: '去赚钱'
        },
        {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76',
          title: '季度理财',
          rate: '史年化回报率5.50%',
          sub: '去赚钱'
        },
        {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76',
          title: '一年理财',
          rate: '历史年化回报率5.80%',
          sub: '去赚钱'
        },
      ]
    }
  }
}
</script>
<style lang="scss" module>
  @import '../../css/element.scss';
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
          width: 344px;
          text-align: left;
          h4 {
            font-weight: 700;
          }
          p {
            color: #ff3232;
            font-size: 24px;
            line-height: 1.1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        em {
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
            left: 110px;
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
