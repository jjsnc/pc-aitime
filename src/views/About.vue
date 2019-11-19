<template>
  <div class="home-page">
    <myHead></myHead>
    <section class="time">
          <h3> 我们的团队</h3>
          <p class="info">AITIME 打造下一代智能大数据平台，运用业内认可的模型算法和技术帮助泛亚洲区域客户实现传统业务 的智能化转型，极大提升数据</p>
          <p class="info"></p>
    </section>
    <section class="mission">使命</section>
    <section class="contact">联系我们</section>
    <section class="footer">footer</section>
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
  .time {
    position: relative;
    height: 986px;
    background: url("../../public/images/Multiply@2x.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>
