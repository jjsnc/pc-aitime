<template>
  <div class="home-page">
    <myHead></myHead>
    <section class="time-section">
      <img class="img" src="../../public/images/AITIME@2x (2).png" />
      <h3 class="title3">运用大数据和人工智能技术，助力信用生活</h3>
      <a href="javaScript:;" class="more-btn btn">查看更多</a>
      <div class="more-icon"></div>
    </section>
    <section class="product-section">
      <h3 class="title-3">我们的产品</h3>
      <h6 class="title-6">专业/高效/智能化</h6>
      <ul class="list clearfix">
        <li class="item">
          <div class="iconfont iconfont-item iconshujuzhongxin"></div>
          <h3 class="title-3">AITIME数据</h3>
          <p class="text">海量数据,实时处理,秒级决策,驱 动大数据智能化的信用风险决策</p>
        </li>
        <li class="item">
          <div class="iconfont iconfont-item icon1huojian"></div>
          <h3 class="title-3">AITIME引擎</h3>
          <p class="text">海量数据,实时处理,秒级决策,驱 动大数据智能化的信用风险决策。</p>
        </li>
        <li class="item">
          <div class="iconfont iconfont-item iconwufengxian"></div>
          <h3 class="title-3">AITIME风控</h3>
          <p class="text">风控决策贯穿用户借贷的整个周期, 深入贷前、贷中、贷后，构建全...</p>
        </li>
        <li class="item">
          <div class="iconfont iconfont-item iconxingzhuang"></div>
          <h3 class="title-3">AITIME卫士</h3>
          <p class="text">为客户提供反欺诈服务，通过三重 检测以验证申请人数据中的不匹...</p>
        </li>
      </ul>
    </section>
    <section class="contact-section">
      <h3 class="title-3">联系我们</h3>
    </section>
    <section class="footer-section">
      <ul class="list">
        <li class="item">
          <div class="left-area">
            <div class="iconfont iconfont-item iconmianxinggouwuche"></div>
          </div>
          <div class="right-area">
            <h3 class="title-5">市场合作</h3>
            <p class="text">媒体采访、品牌合作、市场合作,想了解AITIME,欢迎联系我们。</p>
            <address class="address">邮箱：xxxxxxx 电话：xxxxxx</address>
          </div>
        </li>
        <li class="item">
          <div class="left-area">
            <div class="iconfont iconfont-item iconbangongshenling"></div>
          </div>
          <div class="right-area">
            <h3 class="title-5">市场合作</h3>
            <p class="text">媒体采访、品牌合作、市场合作,想了解AITIME,欢迎联系我们。</p>
            <address class="address">邮箱：xxxxxxx 电话：xxxxxx</address>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import myHead from "@/components/header/header";
export default {
  components: {
    myHead
  }
};
</script>

<style lang="scss" scoped>
.home-page {
  position: relative;
  .time-section {
    position: relative;
    .img {
      display: block;
      max-width: 100%;
      border: none;
      outline: none;
    }
    .title3 {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 10px;
      color: #fff;
    }
    .more-btn {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: 92px;
      height: 24px;
      line-height: 24px;
      background: rgba(0, 182, 203, 0);
      border: 1px solid rgba(255, 255, 255, 1);
      font-size: 7px;
      text-align: center;
      color: #fff;
      border-radius: 15px;
      text-decoration: none;
    }
    .more-icon {
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 16px;
      background: url("../../public/images/形状 9@2x.png");
      background-size: 20px 16px;
      cursor: pointer;
    }
  }

  .product-section {
    padding-bottom: 220px;
    > .title-3 {
      position: relative;
      font-size: 24px;
      color: #576671;
      text-align: center;
      text-align: center;
      padding-top: 130px;
      padding-bottom: 36px;
      &::before {
        content: " ";
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 15px;
        height: 1px;
        background: #17daa3;
      }
    }
    .title-6 {
      padding-top: 30px;
      font-size: 9px;
      color: #87949e;
      text-align: center;
      padding-bottom: 150px;
    }
    .list {
      display: flex;
      .item {
        flex: 1;
        width: 25px;
        box-sizing: border-box;
        .iconfont-item {
          display: block;
          transition: all 0.3s ease;
          width: 62px;
          height: 62px;
          margin: 0 auto;
          line-height: 62px;
          border-radius: 50%;
          color: #87949e;
          background: rgba(135, 145, 158, 0.15);
          text-align: center;
          &:hover {
            color: #fff;
            background: #17daa3;
          }
        }
        .title-3 {
          font-size: 11px;
          color: #000000;
          padding: 65px 0 36px;
          text-align: center;
        }
        .text {
          font-size: 8px;
          color: #87949e;
          width: 180px;
          margin: 0 auto;
          line-height: 22px;
        }
      }
    }
  }
  .contact-section {
    border: 1px solid #dedede;
    padding-bottom: 70px;
    > .title-3 {
      position: relative;
      font-size: 24px;
      color: #576671;
      text-align: center;
      text-align: center;
      padding-bottom: 36px;
      &::before {
        content: " ";
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 15px;
        height: 1px;
        background: #17daa3;
      }
    }
  }
  .footer-section {
    height: 260px;
    background: #edeff1;
    .list {
      padding-top: 120px;
      display: flex;
      justify-content: center;
      align-items: middle;
      .item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: middle;
        .iconfont-item{
          width: 48px;
          height: 48px;
          text-align: center;
          line-height: 48px;
        } 
      }
    }
  }
}
</style>
