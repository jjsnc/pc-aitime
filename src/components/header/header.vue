<template>
  <div class="header-com">
    <div class="wrap">
      <div class="left-area">
        <img class="img" src="../../../public/images/AITIME@2x.png" width="144px;height:28px;" />
      </div>
      <div class="middle-area"></div>
      <div class="right-area">
        <ul class="list">
          <router-link tag="li" class="item" to="/home">HOME</router-link>
          <router-link tag="li" class="item" to="/solutions">SOLUTIONS</router-link>
          <router-link tag="li" class="item" to="/about">COMPANY</router-link>
          <div class="selct-area" @click="showSelect">
            <span class="text">
              {{currentCountry}}
              <i class="icon"></i>
            </span>
            <ul class="select-list" v-show="selectFlag">
              <li class="select-item" @click.stop="toggleCountry('简体中文')">简体中文</li>
              <li class="select-item" @click.stop="toggleCountry('English')">English</li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentData: {},
      chineseData: {},
      englishData: {
        title: "AITIME"
      },
      selectFlag: false,
      currentCountry: "简体中文"
    };
  },
  methods: {
    toggleCountry(country) {
      this.currentCountry = country;
      this.selectFlag = false;
    },
    showSelect() {
      this.selectFlag = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-com {
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 999;
  .wrap {
    display: flex;
    height: 130px;
    line-height: 130px;
    .left-area {
      padding-left: 76px;
      flex: 220px;
      .img {
        vertical-align: middle;
      }
      .title {
        color: #fff;
        font-size: 12px;
        display: inline-block;
        font-weight: bold;
      }
    }
    .middle-area {
      flex: 1;
    }
    .right-area {
      width: 720px;
      text-align: right;
      .list {
        padding-right: 76px;
        .item {
          display: inline-block;
          padding-right: 76px;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          vertical-align: top;
          font-weight: bold;
          &.router-link-active {
            color: #17daa3;
          }
        }
        .selct-area {
          box-sizing: border-box;
          position: relative;
          display: inline-block;
          width: 104px;
          height: 32px;
          line-height: 32px;
          color: #fff;
          border-radius: 3px 3px;
          background: rgba(255, 255, 255, 0.3);
          font-size: 14px;
          text-align: left;
          padding-left: 6px;
          cursor: pointer;
          .text {
            display: inline-block;
            width: 100%;
            height: 100%;
            position: relative;
            padding-left: 6px;
            .icon {
              position: absolute;
              top: 12px;
              right: 16px;
              width: 0;
              height: 0;
              border-width: 6px;
              border-style: solid;
              border-color: #fff transparent transparent transparent;
            }
          }
          .select-list {
            box-sizing: border-box;
            width: 104px;
            position: absolute;
            left: 0;
            top: 32px;
            background: rgba(255, 255, 255, 0.3);
            padding-left: 6px;
            .select-item {
              box-sizing: border-box;
              font-size: 14px;
              padding-left: 6px;
            }
          }
        }
      }
    }
  }
}
</style>