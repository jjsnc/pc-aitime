<template>
  <div class="home-page">
    <myHead @changeLanguage="changeLanguage"></myHead>
    <section class="time-section">
      <img class="img" src="../../public/images/Multiply@2x.png" />
      <h3 class="title3">{{currentData[language].timeTitle}}</h3>
      <p class="text-1 text">{{currentData[language].timeConent1}}</p>
      <p class="text-2 text">{{currentData[language].timeConent3}}</p>
    </section>
    <section class="mission-section">
      <img class="img" src="../../public/images/Multiply3@2x.png" />
      <h3 class="title3">{{currentData[language].productTitle1}}</h3>
      <p class="text-1 text">{{currentData[language].productsubTitle1}}</p>
      <p class="text-2 text">{{currentData[language].productsubContent1}}</p>
      <p class="text-3 text">{{currentData[language].productsubTitle2}}</p>
      <p class="text-4 text">{{currentData[language].productsubContent3}}</p>
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
import minxinLocalStorage from "../common/minxinLocalStorage.js";
import myHead from "@/components/header/header";
export default {
  mixins: [minxinLocalStorage],
  data() {
    return {
      currentData: {
        zh: {
          timeTitle: "我们的团队",
          timeConent1:
            "AITIME 打造下一代智能大数据平台，运用业内认可的模型算法和技术帮助泛亚洲区域客户实现传统业务 的智能化转型，极大提升数据与信息处理能力，用智能推动产业和社会进步。",
          timeConent3:
            "团队由来自全球顶尖FinTech公司的产品专家、大数据风控专家，移动互联网领域的技术大牛和经验丰富 的客户服务专家组成。",
          productTitle1: "我们的愿景使命",
          productsubTitle1: "使命",
          productsubContent1:
            "用人工智能技术改造和重塑商业、为用户提供更好的信息、产品和服务",
          productsubTitle2: "愿景",
          productsubContent3: "创造智能AI时代",
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
          timeTitle: "OUR TEAM",
          timeConent1:
            "Combining the industry-recognized domain knowledge in big data, artificial intelligence and credit sco ring, AITIME brings the next generation data centric platforms to transform traditional and emerging i ndustries across Asia Pacific.",
          timeConent3:
            "Team is consists of product experts from the world's top FinTech, big data risk control experts, techni cal experts in the mobile Internet field and experienced customer service experts.",
          productTitle1: "OUR VISION MISSION",
          productsubTitle1: "MISSION",
          productsubContent1:
            "Use AI to disrupt and transform businesses for a better delivery of information, products and services",
          productsubTitle2: "VISION",
          productsubContent3: "Create a AI-time.",
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
      top: 20%;
      left: 10%;
      font-size: 72px;
      color: #fff;
      font-weight: 100;
    }
    .text {
      width: 740px;
      position: absolute;
      top: 40%;
      left: 10%;
      color: #fff;
      font-size: 16px;
      line-height: 25px;
    }
    .text-2 {
      top: 55%;
      left: 10%;
    }
  }

  .mission-section {
    position: relative;
    .img {
      display: block;
      max-width: 100%;
      border: none;
      outline: none;
    }
    .title3 {
      position: absolute;
      top: 20%;
      left: 10%;
      font-size: 72px;
      color: #fff;
      font-weight: 100;
    }
    .text {
      position: absolute;
      top: 40%;
      left: 10%;
      color: #fff;
      font-size: 16px;
      line-height: 25px;
    }
    .text-1 {
      top: 45%;
      font-size: 24px;
      left: 10%;
    }
    .text-2 {
      top: 52%;
      left: 10%;
    }
    .text-3 {
      top: 65%;
      font-size: 24px;
      left: 10%;
    }
    .text-4 {
      top: 72%;
      left: 10%;
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
      padding-top: 80px;
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
