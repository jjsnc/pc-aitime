<template>
  <div class="home-page">
    <myHead @changeLanguage="changeLanguage"></myHead>
    <section class="time-section">
      <img class="img" src="../../public/images/AITIME@2x (2).png" />
      <h3 class="title3">{{currentData[language].timeTitle}}</h3>
      <a href="#two" class="more-btn btn">{{currentData[language].timeBtnText}}</a>
      <div class="more-icon"></div>
    </section>
    <section class="product-section" id="two">
      <h3 class="title-3">{{currentData[language].productTitle1}}</h3>
      <h6 class="title-6">{{currentData[language].productTitle3}}</h6>
      <ul class="list clearfix">
        <li class="item" :key="index" v-for="(item, index) in currentData[language].productList">
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
            <address class="address">{{child.mail}}{{child.phone}}</address>
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
          timeTitle: "运用大数据和人工智能技术，助力信用生活",
          timeBtnText: "查看更多",
          productTitle1: "我们的产品",
          productTitle3: "专业/高效/智能化的产品",
          productList: [
            {
              title: "AITIME数据",
              icon: "iconshujuzhongxin",
              content: "打通线上、线下高质量数据,数万 维度刻画信用风险画像。"
            },
            {
              title: "AITIME引擎",
              icon: "icon1huojian",
              content:
                "海量数据,实时处理,秒级决策,驱 动大数据智能化的信用风险决策。"
            },
            {
              title: "AITIME风控",
              icon: "iconwufengxian",
              content:
                "风控决策贯穿用户借贷的整个周期, 深入贷前、贷中、贷后，构建全..."
            },
            {
              title: "AITIME卫士",
              icon: "iconxingzhuang",
              content:
                "为客户提供反欺诈服务，通过三重 检测以验证申请人数据中的不匹..."
            }
          ],
          contactTitle: "联系我们",
          contactList: [
            {
              title: "市场合作",
              icon: "iconmianxinggouwuche left",
              content: "媒体采访、品牌合作、市场合作,想了解AITIME,欢迎联系我们",
              mail: "邮箱：xxxxxxx ",
              phone: "电话：xxxxxx"
            },
            {
              title: "商务合作",
              icon: "iconbangongshenling right",
              content:
                "商务合作,我们渴望创新,期盼合作,想了解AITIME，欢迎联系我们",
              mail: "邮箱：xxxxxxx ",
              phone: "电话：xxxxxx"
            }
          ],
          foootInfo: "有关 AITIME 的服务，请参阅服务条款、隐私和安全声明"
        },
        le: {
          timeTitle:
            "Next-generation big data and artificial intelligence technology to empower and transform your lifestyle",
          timeBtnText: "Learn more",
          productTitle1: "PRODUCTS",
          productTitle3:
            "Deep domain expertise | Speed for execution | Commitment to intelligence",
          productList: [
            {
              title: "AITIME DATA",
              icon: "iconshujuzhongxin",
              content:
                "Through online,offline high-value data,thousands of dimensions to poytray credit risk portraits."
            },
            {
              title: "AITIME ENGINE",
              icon: "icon1huojian",
              content:
                "Credit Decision Engine.Massive d ata,real-time processing,second-l evel decision-making;driving cr..."
            },
            {
              title: "AITIME RISK CONTROL",
              icon: "iconwufengxian",
              content:
                "The risk control decision runs thr ough the entire cycle of user lend ing.building a comprehensive a..."
            },
            {
              title: "AITIME GUARDIAN",
              icon: "iconxingzhuang",
              content:
                "Guardian provides anti-fraud det ection services to be used . The t rifecta of identity verification, e..."
            }
          ],
          contactTitle: "CONTACT US",
          contactList: [
            {
              title: "Market Cooperation left",
              icon: "iconmianxinggouwuche",
              content:
                "Media interviews,brand cooperation, market coo perat cooperation, want to know about AITIME, welcome to contact us. ",
              mail: "mailbox：xxxxxxx ",
              phone: "Tel：xxxxxx"
            },
            {
              title: "Business Cooperation",
              icon: "iconbangongshenling right",
              content:
                "Business cooperation, we are eager to innovate and lo ok forward to cooperate.want to know about AITIME, welcome to contact us.",
              mail: "mailbox：xxxxxxx ",
              phone: "Tel：xxxxxx"
            }
          ],
          foootInfo:
            "© AITIME Please find the Terms of Service and Privacy and Security Statement regarding AITIME's service"
        }
      }
    };
  },
  created() {
    console.log(this.language);
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
      line-height: 35px;
      font-weight: 100;
      font-size: 20px;
      color: #fff;
    }
    .more-btn {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: 184px;
      height: 48px;
      line-height: 48px;
      background: rgba(0, 182, 203, 0);
      border: 1px solid rgba(255, 255, 255, 1);
      font-size: 17px;
      text-align: center;
      color: #fff;
      border-radius: 30px;
      text-decoration: none;
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
    padding-bottom: 220px;
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
    .title-6 {
      padding-top: 30px;
      font-size: 18px;
      color: #87949e;
      text-align: center;
      padding-bottom: 150px;
    }
    .list {
      display: flex;
      .item {
        flex: 1;
        box-sizing: border-box;
        padding: 0 40px;
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
          &:hover {
            color: #fff;
            background: #17daa3;
          }
        }
        .title-3 {
          font-size: 22px;
          color: #000000;
          padding: 65px 0 36px;
          text-align: center;
          font-weight: 100;
        }
        .text {
          font-size: 16px;
          color: #87949e;
          padding: 0 15px;
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
    padding: 0 30px;
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
            font-weight: 100;
             text-align: left;
          }
          .text {
            font-size: 20px;
            color: #87949e;
            line-height: 30px;
            padding-bottom: 50px;
            font-weight: 100;
          }
          .address {
            font-size: 20px;
            color: #87949e;
            line-height: 25px;
            font-style: inherit;
            font-weight: 100;
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
</style>
