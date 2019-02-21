<template>
  <Panel title="新手特权" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <h4>下载APP<span :class="$style.red">送888元礼包</span></h4>
        <p :class="$style.gray">新手专享</p>
        <img src="//img3.imgtn.bdimg.com/it/u=4174862662,1936348767&fm=26&gp=0.jpg" alt="">
      </div>
      <div :class="$style.item">
        <ul>
          <li>
            <img src="//img3.imgtn.bdimg.com/it/u=2108708318,3050486543&fm=26&gp=0.jpg" alt="">
            <h4><span :class="$style.red">领128元新手礼包</span></h4>
            <p :class="$style.gray">立即开通</p>
          </li>
          <li>
            <img src="//img1.imgtn.bdimg.com/it/u=3691712003,2688229284&fm=26&gp=0.jpg" alt="">
            <h4>打白条<span :class="$style.red">享免息</span></h4>
            <p :class="$style.gray">立即开通享好礼</p>
          </li>
        </ul>
      </div>
    </section>
  </Panel>
</template>
<script>
import Panel from '../core/panel';
export default {
  name: 'Novice',
  components: {
    Panel,
  }
}
</script>
<style lang="scss" module>
  @import '../../css/element.scss';
  @import '../../css/variable.scss';
  .panel {
    @include panel;
    >h4 {
      border-bottom: 1px solid #ddd;
    }
    .content {
      @include list(row);
      .item {
        width: 50%;
        box-sizing: border-box;
        &:first-child {
          padding: 32px 20px;
          text-align: center;
          border-right: 1px solid #ddd;
          img {
            width:132px;
            height: 132px;
            margin: 20px auto 0;
          }
        }
        h4 {
          font-size: 26px;
          line-height: 40px;
        }
        .red {
          color: #f00;
        }
        .gray {
          font-size: 24px;
          color: #999;
        }
        p {
          margin-top: 6px; 
        }
        ul {
          width: 100%;
          li {
            width: 100%;
            padding: 32px 28px;
            box-sizing: border-box;
            &:first-child {
              border-bottom: 1px solid #ddd;
            }
            h4 {
              text-align: left;
              @include ellipsis;
            }
            img {
              float: right;
              width: 80px;
              height: 80px;
            }
          }
        }
      }
    }
    
  }
</style>
