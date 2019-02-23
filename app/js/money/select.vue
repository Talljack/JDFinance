<template>
  <Panel title="精选推荐" :class="$style.panel">
    <section :class="$style.content">
      <dl :class="$style.item" v-for="item in items" :key="item.title">
        <dt>{{item.title}}<span>{{item.sub}}</span></dt>
        <dd>{{item.rate}}</dd>
        <dd>{{item.text}}</dd>
      </dl>
    </section>
  </Panel>
</template>
<script>
import Panel from '../core/panel';
export default {
  name: 'Select',
  components: {
    Panel,
  },
  data() {
    return {
      items: [{
                title: "定期理财",
                sub: "90天可质押",
                rate: "5.60%",
                text: "历史年化回报率",
            }, {
                title: "小白理财",
                sub: "理财首选",
                rate: "4.22%",
                text: "7日年化收益率",
            }, {
                title: "月月盈",
                sub: "养老保障",
                rate: "5%",
                text: "七日年化收益率",
            }, {
                title: "小白基金",
                sub: "天天赚钱",
                rate: "4.27%",
                text: "7日年化收益率",
            }],
    }
  }
}
</script>
<style lang="scss" module>
  @import '../../css/element.scss';
  @import '../../css/variable.scss';
  .panel {
    @include panel;
    &>h4 {
      font-size: 40px;
      font-weight: 700;
    }
    .content {
      @include list(row);
      box-sizing: border-box;
      &::after {
        content: '';
        display: blcok;
        height: 0;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #eee;
        position: relative;
        top: -208px;
      }
      .item {
        width: 50%;
        padding: 34px 16px;
        text-align: center;
        box-sizing: border-box;
        position: relative;
        &::after {
          position: absolute;
          content: '';
          width: 1px;
          height: 136px;
          display: block;
          right: 0;
          top: 50%;
          margin-top: -68px;
          border-right: 1px solid #eee;
        }
        &:nth-child(2n) {
          &::after {
            display: none;
          }
        }
        dt {
          font-size: 30px;
          line-height: 42px;
          color: #333;
          font-weight: 700;
          span {
            border: 1px solid #ff5155;
            color: #ff5155;
            font-size: 22px;
            padding: 4px 8px;
            margin-left: 8px;
            vertical-align: 1px;
          }
        }
        dd {
          &:first-of-type {
            font-size: 44px;
            font-weight: 700;
            height: 58px;
            line-height: 58px;
            color: #ff5155;
            margin-top: 10px;
            @include ellipsis;
          }
          &:last-of-type {
            font-size: 24px;
            height: 34px;
            line-height: 34px;
            color: #999;
            @include ellipsis;
          }
        }
      }
    }
  }
</style>
