<template>
  <div class="home-page">
    <myHead></myHead>
    <section class="time-section">
      <img class="img" src="../../public/images/soluMultiply@2x.png" />
      <h3 class="title3">E-KYC解决方案</h3>
      <p
        class="text-1 text"
      >AITIME e-KYC解决方案通过证件识别、活体检测、人脸对比、风险人脸等多种人工智 能技术，有效核验用户身份的真实性。身份核验适用于多场景、多业务，降低人工审核 成本和人为出错概率，大幅提升业务效率。</p>
      <div class="more-icon"></div>
    </section>
    <section class="product-section">
      <h3 class="title-3">支持产品</h3>
      <ul class="list clearfix">
        <li class="item">
          <div class="iconfont iconfont-item iconfont-item-1"></div>
          <h3 class="title-3">OCR</h3>
        </li>
        <li class="item">
          <div class="iconfont iconfont-item iconfont-item-2"></div>
          <h3 class="title-3">身份验证</h3>
        </li>
        <li class="item">
          <div class="iconfont iconfont-item iconfont-item-3"></div>
          <h3 class="title-3">活体检测</h3>
        </li>
        <li class="item">
          <div class="iconfont iconfont-item iconfont-item-4"></div>
          <h3 class="title-3">人脸对比</h3>
        </li>
        <li class="item">
          <div class="iconfont iconfont-item iconfont-item-5"></div>
          <h3 class="title-3">风险人脸</h3>
        </li>
      </ul>
    </section>
    <!-- 业务流程 -->
    <section class="process-section">
      <h3 class="title-3">业务流程</h3>
      <img class="img" src="../../public/images/process@2x.png" />
    </section>
    <!--  产品优势 -->
    <section class="advantage-section">
      <h3 class="title-3">产品优势</h3>
      <img class="img" src="../../public/images/programme@2x.png" />
      <p class="info">
        EKYC解决方案可最大限度地减少欺诈行为，服务包括身份证件OCR、活体检测、人脸对比和风险人脸等，它对
        于验证过程中的各种欺诈行为能进行有效识别和阻拦，并且极大程度的节省人力成本。
      </p>
      <ul class="list clearfix">
        <li class="item">
          <div class="iconfont iconfont-item iconfont-item-1"></div>
          <h3 class="title-3">模型更新频率高</h3>
          <p class="text">拥有大规模研发团队，持续收集数据优化模型，不断提升 产品精度。</p>
        </li>
        <li class="item">
          <div class="iconfont iconfont-item iconfont-item-2"></div>
          <h3 class="title-3">精确率高</h3>
          <p class="text">
            每个产品的模型均针对 e-KYC 场景设计。模型采用大量
            本地数据进行训练，持续迭代，确保精准度满足业务需求。
          </p>
        </li>
        <li class="item">
          <div class="iconfont iconfont-item iconfont-item-3"></div>
          <h3 class="title-3">功能全面</h3>
          <p class="text">风控决策贯穿用户借贷的整个周期, 深入贷前、贷中、贷后，构建全...</p>
        </li>
        <li class="item">
          <div class="iconfont iconfont-item iconfont-item-4"></div>
          <h3 class="title-3">AITIME卫士</h3>
          <p class="text">提供包括OCR、活体检测、人脸比对、人脸搜索、风险人 脸等e-KYC所需功能。</p>
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
            <div class="iconfont iconfont-item left iconmianxinggouwuche"></div>
          </div>
          <div class="right-area">
            <h3 class="title-5">市场合作</h3>
            <p class="text">媒体采访、品牌合作、市场合作,想了解AITIME,欢迎联系我们。</p>
            <address class="address">邮箱：xxxxxxx 电话：xxxxxx</address>
          </div>
        </li>
        <li class="item">
          <div class="left-area">
            <div class="iconfont iconfont-item right iconbangongshenling"></div>
          </div>
          <div class="right-area">
            <h3 class="title-5">商务合作</h3>
            <p class="text">商务合作,我们渴望创新,期盼合作,想了解AITIME，欢迎联系我们</p>
            <address class="address">邮箱：xxxxxxx 电话：xxxxxx</address>
          </div>
        </li>
      </ul>
      <div class="company-info">有关 AITIME 的服务，请参阅服务条款、隐私和安全声明</div>
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
      left: 10%;
      top: 35%;
      width: 740px;
      font-size: 40px;
      color: #fff;
    }
    .text {
      width: 700px;
      position: absolute;
      left: 10%;
      top: 50%;
      color: #fff;
      font-size: 16px;
      line-height: 35px;
    }
    .more-icon {
      position: absolute;
      top: 80%;
      left: 50%;
      margin-left: -20px;
      width: 40px;
      height: 32px;
      background: url("../../public/images/形状 9@2x.png");
      background-size: 40px 32px;
      cursor: pointer;
      animation: bounce-down 1s linear infinite;
    }
  }

  .product-section {
    > .title-3 {
      position: relative;
      font-size: 48px;
      color: #576671;
      text-align: center;
      text-align: center;
      padding-top: 130px;
      padding-bottom: 36px;
      font-weight: 100;
      &::before {
        content: " ";
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 1px;
        background: #17daa3;
      }
    }
    .list {
      display: flex;
      padding-top: 125px;
      .item {
        flex: 1;
        box-sizing: border-box;
        .iconfont-item {
          display: block;
          transition: all 0.3s ease;
          width: 80px;
          height: 80px;
          margin: 0 auto;
          line-height: 62px;
          color: #87949e;
          text-align: center;
        }
        .iconfont-item-1 {
          background: url("../../public/images/OCR@2x.png");
          background-size: 82px 63px;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .iconfont-item-2 {
          background: url("../../public/images/identity@2x.png");
          background-size: 62px 62px;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .iconfont-item-3 {
          background: url("../../public/images/Living@2x.png");
          background-size: 60px 65px;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .iconfont-item-4 {
          background: url("../../public/images/Face@2x.png");
          background-size: 62px 63px;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .iconfont-item-5 {
          background: url("../../public/images/risk@2x.png");
          background-size: 55px 64px;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .title-3 {
          font-size: 22px;
          color: #000000;
          padding: 35px 0 36px;
          text-align: center;
        }
      }
    }
  }

  .process-section {
    padding-top: 350px;
    position: relative;
    > .title-3 {
      position: absolute;
      left: 50%;
      top: 150px;
      font-size: 48px;
      transform: translateX(-50%);
      color: #576671;
      text-align: center;
      text-align: center;
      font-weight: 100;
      &::before {
        content: " ";
        display: inline-block;
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 1px;
        background: #17daa3;
      }
    }
    .img {
      display: block;
      max-width: 100%;
      border: none;
      outline: none;
    }
  }

  .advantage-section {
    padding-top: 350px;
    position: relative;
    > .title-3 {
      position: absolute;
      left: 50%;
      top: 150px;
      font-size: 48px;
      transform: translateX(-50%);
      color: #576671;
      text-align: center;
      text-align: center;
      font-weight: 100;
      &::before {
        content: " ";
        display: inline-block;
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 1px;
        background: #17daa3;
      }
    }
    .img {
      display: block;
      max-width: 100%;
      border: none;
      outline: none;
    }
    .info {
      position: absolute;
      left: 50%;
      top: 50%;
      font-size: 18px;
      transform: translateX(-50%);
      color: #fff;
      line-height: 35px;
      font-weight: 100;
    }
    .list {
      width: 100%;
      height: auto;
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      padding-top: 128px;
      .item {
        width: 50%;
        box-sizing: border-box;
        .iconfont-item {
          display: block;
          transition: all 0.3s ease;
          width: 124px;
          height: 124px;
          margin: 0 auto;
          line-height: 124px;
          border-radius: 50%;
          color: #87949e;
          background: rgba(135, 145, 158, 0.15);
          text-align: center;
          font-size: 36px;
        }
        .iconfont-item-1 {
          background: url("../../public/images/time@2x.png");
          background-size: 89px 89px;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .iconfont-item-2 {
          background: url("../../public/images/accurate@2x.png");
          background-size: 110px 107px;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .iconfont-item-3 {
          background: url("../../public/images/function@2x.png");
          background-size: 83px 84px;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .iconfont-item-4 {
          background: url("../../public/images/Integrate@2x.png");
          background-size: 85px 79px;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .title-3 {
          font-size: 22px;
          color: #000000;
          padding: 65px 0 36px;
          text-align: center;
        }
        .text {
          font-size: 16px;
          color: #87949e;
          width: 240px;
          margin: 0 auto;
          line-height: 22px;
        }
      }
    }
  }

  .contact-section {
    padding-bottom: 70px;
    > .title-3 {
      position: relative;
      font-size: 48px;
      color: #576671;
      text-align: center;
      padding-bottom: 36px;
      &::before {
        content: " ";
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 1px;
        background: #17daa3;
      }
    }
  }
  .footer-section {
    background: #edeff1;
    .list {
      padding-top: 140px;
      padding-bottom: 220px;
      display: flex;
      justify-content: center;
      align-items: middle;
      .item {
        flex: 1;
        display: flex;
        justify-content: center;
        .iconfont-item {
          width: 96px;
          height: 96px;
          line-height: 96px;
          text-align: center;
          font-size: 40px;
          border: 1px solid #17daa3;
          color: #17daa3;
          background: #fff;
          border-radius: 50%;
        }
        .left-area {
          padding-top: 70px;
          .iconfont-item.left {
            box-sizing: border-box;
            padding-right: 6px;
          }
          .iconfont-item.right {
            box-sizing: border-box;
            padding-left: 10px;
          }
        }
        .right-area {
          padding-left: 60px;
          .title-5 {
            font-size: 40px;
            color: #576671;
            text-align: center;
            padding-bottom: 60px;
          }
          .text {
            font-size: 20px;
            width: 500px;
            color: #87949e;
            line-height: 30px;
            padding-bottom: 50px;
          }
          .address {
            font-size: 20px;
            color: #87949e;
            line-height: 25px;
            font-style: inherit;
          }
        }
      }
    }
    .company-info {
      height: 60px;
      line-height: 60px;
      background: #15c492;
      color: #fff;
      font-size: 7px;
      text-align: center;
    }
  }
}

@keyframes bounce-down {
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
