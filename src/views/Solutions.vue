<template>
  <div class="home-page">
    <myHead @changeLanguage="changeLanguage"></myHead>
    <section class="time-section">
      <img class="img" src="../../public/images/soluMultiply@2x.png" />
      <h3 class="title3">{{currentData[language].timeTitle}}</h3>
      <p class="text-1 text">{{currentData[language].timeContent}}</p>
      <div class="more-icon"></div>
    </section>
    <section class="product-section">
      <h3 class="title-3">{{currentData[language].productTitle1}}</h3>
      <ul class="list clearfix">
        <li class="item">
          <div class="iconfont iconfont-item iconfont-item-1"></div>
          <h3 class="title-3">{{currentData[language].productList[0].title}}</h3>
        </li>
        <li class="item">
          <div class="iconfont iconfont-item iconfont-item-2"></div>
          <h3 class="title-3">{{currentData[language].productList[1].title}}</h3>
        </li>
        <li class="item">
          <div class="iconfont iconfont-item iconfont-item-3"></div>
          <h3 class="title-3">{{currentData[language].productList[2].title}}</h3>
        </li>
        <li class="item">
          <div class="iconfont iconfont-item iconfont-item-4"></div>
          <h3 class="title-3">{{currentData[language].productList[3].title}}</h3>
        </li>
        <li class="item">
          <div class="iconfont iconfont-item iconfont-item-5"></div>
          <h3 class="title-3">{{currentData[language].productList[4].title}}</h3>
        </li>
      </ul>
    </section>
    <!-- 业务流程 -->
    <section class="process-section">
      <h3 class="title-3">{{currentData[language].processTitle}}</h3>
      <img class="img" v-if="language=='zh'" src="../../public/images/process-zh@2x.png" />
      <img class="img" v-else src="../../public/images/process@2x.png" />
    </section>
    <!--  产品优势 -->
    <section class="advantage-section">
      <h3 class="title-3">{{currentData[language].advantageTitle}}</h3>
      <img class="img" src="../../public/images/programme@2x.png" />
      <p class="info">{{currentData[language].advantageContnet}}</p>
      <ul class="list clearfix">
        <li class="item" :key="index" v-for="(item, index) in  currentData[language].advantageList">
          <div class="iconfont iconfont-item" :class="item.icon"></div>
          <h3 class="title-3">{{item.title}}</h3>
          <p class="text">{{item.content}}</p>
        </li>
      </ul>
    </section>
    <section class="contact-section">
      <h3 class="title-3">{{currentData[language].contactTitle}}</h3>
    </section>
    <section class="footer-section">
      <ul class="list">
        <li class="item" :key="index" v-for="(child, index) in currentData[language].contactList">
          <div class="left-area">
            <div class="iconfont iconfont-item left" :class="child.icon"></div>
          </div>
          <div class="right-area">
            <h3 class="title-5">{{child.title}}</h3>
            <p class="text">{{child.content}}</p>
            <address class="address">{{child.mail}}</address>
            <address class="address">{{child.phone}}</address>
          </div>
        </li>
      </ul>
      <div class="company-info">{{currentData[language].foootInfo}}</div>
    </section>
  </div>
</template>

<script>
import myHead from "@/components/header/header";
import minxinLocalStorage from "../common/minxinLocalStorage.js";
export default {
  mixins: [minxinLocalStorage],
  data() {
    return {
      currentData: {
        zh: {
          timeTitle: "E-KYC解决方案",
          timeContent:
            "AITIME e-KYC解决方案通过证件识别、活体检测、人脸对比、风险人脸等多种人工智 能技术，有效核验用户身份的真实性。身份核验适用于多场景、多业务，降低人工审核 成本和人为出错概率，大幅提升业务效率。",
          productTitle1: "支持产品",
          productList: [
            {
              title: "OCR"
            },
            {
              title: "身份验证"
            },
            {
              title: "活体检测"
            },
            {
              title: "人脸对比"
            },
            {
              title: "风险人脸"
            }
          ],
          processTitle: "业务流程",
          processImg: "../../public/images/process@2x.png",
          advantageTitle: "产品优势",
          advantageContnet:
            "EKYC解决方案可最大限度地减少欺诈行为，服务包括身份证件OCR、活体检测、人脸对比和风险人脸等，它对 于验证过程中的各种欺诈行为能进行有效识别和阻拦，并且极大程度的节省人力成本。",
          advantageList: [
            {
              title: "模型更新频率高",
              icon: "iconfont-item-1",
              content:
                "拥有大规模研发团队，持续收集数据优化模型，不断提升 产品精度。"
            },
            {
              title: "精确率高",
              icon: "iconfont-item-2",
              content:
                "每个产品的模型均针对 e-KYC 场景设计。模型采用大量 本地数据进行训练，持续迭代，确保精准度满足业务需求。"
            },
            {
              title: "功能全面",
              icon: "iconfont-item-3",
              content:
                "提供包括OCR、活体检测、人脸比对、人脸搜索、风险人 脸等e-KYC所需功能。"
            },
            {
              title: "易于集成",
              icon: "iconfont-item-4",
              content:
                "提供简单易于集成的端侧SDK以及API调用，轻松集成形 成定制化的e-KYC解决方案。"
            }
          ],
          contactTitle: "联系我们",
          contactList: [
            {
              title: "市场合作",
              icon: "iconmianxinggouwuche left",
              content: "媒体采访、品牌合作、市场合作,想了解AITIME,欢迎联系我们",
              mail: "邮箱：chenfang@aitime.credit",
              phone: "电话：+86 17155944982"
            },
            {
              title: "商务合作",
              icon: "iconbangongshenling right",
              content:
                "商务合作，我们渴望创新，期盼合作。",
              mail: "邮箱：chenfang@aitime.credit",
              phone: "电话：+86 17155944982"
            }
          ],
          foootInfo: "有关 AITIME 的服务，请参阅服务条款、隐私和安全声明"
        },
        le: {
          timeTitle: "E-EKYC SOLUTIONS",
          timeContent:
            "AITIME e-KYC (Electronic-Know Your Customer) solution effectively verifies the user identities through technologies including ID Recognition, Liveness Detection, Face C omparison, Risky Face Search, etc. Identity verification products are applicable to mu ltiple settings and businesses, lowering manual verification costs and errors, increasi ng the business efficiency.",
          productTitle1: "RELEVANT PRODUCTS",
          productList: [
            {
              title: "OCR"
            },
            {
              title: "ID Check "
            },
            {
              title: " Liveness Detection"
            },
            {
              title: "Face Comparison"
            },
            {
              title: "Risky Faces"
            }
          ],
          processTitle: "SUGGESTED EKYC WORKFLOW",
          processImg: "../../public/images/process@2x.png",
          advantageTitle: "ADVANTAGES AND BENIFITS",
          advantageContnet:
            "AITIME's EKYC grants companies the ability to greatly minimize fraud. EKYC’s features include Face Detec tion,Face Comparison, OCR and Liveness Detection. EKYC is the gatekeeper that prevents fraudsters from disrupting business cycles and expedites validation process and reduces human labor.",
          advantageList: [
            {
              title: "Frequent Model Updates",
              icon: "iconfont-item-1",
              content:
                "In house Computer Vision R&D team with leading global talents, consistently improving model performance by a ccumulating data for model optimization."
            },
            {
              title: "High Accuracy",
              icon: "iconfont-item-2",
              content:
                "The core algorithms of each product along the e-KYC process are specially designed for e-KYC scenarios, with large amount of training data collected locally, constantly iterating, ensuring the accuracy sufficiently meets customer needs."
            },
            {
              title: "Full Functions",
              icon: "iconfont-item-3",
              content:
                "Product and services include OCR, Liveness Detection, Face Comparison, Face Search, Face Blacklist, etc. essential functions for e-KYC."
            },
            {
              title: "Easy of Integrate",
              icon: "iconfont-item-4",
              content:
                "SDK and API are provided for an effortless integration. Simply integrate the products to form customised e-KYC solution."
            }
          ],
          contactTitle: "CONTACT US",
          contactList: [
            {
              title: "Market Cooperation",
              icon: "iconmianxinggouwuche",
              content:
                "Media interviews,brand cooperation, market cooperation, want to know about AITIME, welcome to contact us. ",
              mail: "mailbox：chenfang@aitime.credit ",
              phone: "Tel：+86 17155944982"
            },
            {
              title: "Business Cooperation",
              icon: "iconbangongshenling right",
              content:
                "Business cooperation, we are eager to innovate and look forward to cooperate.",
              mail: "mailbox：chenfang@aitime.credit ",
              phone: "Tel：+86 17155944982"
            }
          ],
          foootInfo:
            "© AITIME Please find the Terms of Service and Privacy and Security Statement regarding AITIME's service"
        }
      }
    };
  },
  methods: {
    changeLanguage(lang) {
      this.language = lang;
    }
  },
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
      background: url("../../public/images/logo@2x.png");
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
          font-weight: 100;
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
      margin: 0 auto;
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
      top: 35%;
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
        margin-bottom: 100px;
        .iconfont-item {
          display: block;
          transition: all 0.3s ease;
          width: 100%;
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
          background-position: 30% center;
          background-repeat: no-repeat;
        }
        .iconfont-item-2 {
          background: url("../../public/images/accurate@2x.png");
          background-size: 110px 107px;
          background-position: 30% center;
          background-repeat: no-repeat;
        }
        .iconfont-item-3 {
          background: url("../../public/images/function@2x.png");
          background-size: 83px 84px;
          background-position: 30% center;
          background-repeat: no-repeat;
        }
        .iconfont-item-4 {
          background: url("../../public/images/Integrate@2x.png");
          background-size: 85px 79px;
          background-position: 30% center;
          background-repeat: no-repeat;
        }
        .title-3 {
          font-size: 22px;
          color: #000000;
          padding: 30px 0 30px;
          padding-left: 26%;
          font-weight: 100;
        }
        .text {
          font-size: 16px;
          color: #87949e;
          width: 50%;
          padding-left: 26%;
          line-height: 28px;
        }
      }
    }
  }

  .contact-section {
    padding-top: 20px;
    padding-bottom: 70px;

    > .title-3 {
      position: relative;
      font-size: 48px;
      color: #576671;
      text-align: center;
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
  }
  .footer-section {
    background: #edeff1;
    .list {
      padding-top: 140px;
      padding-bottom: 220px;
      padding-left: 60px;
      padding-right: 60px;
      display: flex;
      justify-content: center;
      align-items: middle;
      .item {
        flex: 1;
        display: flex;
        justify-content: center;
        max-width: 600px;
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
          padding-left: 45px;
          .title-5 {
            font-size: 40px;
            color: #576671;
            text-align: center;
            padding-bottom: 60px;
            font-weight: 100;
             text-align: left;
          }
          .text {
            font-size: 20px;
            color: #87949e;
            line-height: 30px;
            padding-bottom: 50px;
            font-weight: 100;
            height: 60px;
            padding-right: 20px;
          }
          .address {
            font-size: 20px;
            color: #87949e;
            line-height: 25px;
            font-style: inherit;
            font-weight: 100;
            margin-bottom: 15px;
          }
        }
      }
      .item:last-child {
        margin-left: 60px;
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
