<template>
  <div class="about-page">
    <h1 class="title">关于我们</h1>
    <div class="line"></div>
    <h3 class="title2">关于UtopaXR</h3>
    <div class="line-small"></div>
    <p class="text">UtopaXR团队拥有自研的核心AR技术，凭借AR核心技术优势和顶尖服务团队，致力于推动AR技术与实体结合的创新应用。核心理念是联结线上与实体，联结商家与顾客，联结创意与环境，联结现实与虚拟，创造具有城市地标性质的多维社交空间。</p>
    <h3 class="title2 title3">我们的业务</h3>
    <div class="line-small line-small-1"></div>
    <p class="text text2">UtopaXR致力于创造多维社交空间，帮助更多的商业空间提升商业价值。</p>
    <div class="img">
      <img src="../assets/middle_img.png">
    </div>
    <h3 class="title2 title3">联系我们</h3>
    <div class="line-small"></div>
    <div class="bottom">
      <span class="email"><a class="icon" href="javascript:void(0);"><img src="../assets/bottom_icon_email.png"></a><span>邮箱：info@utopa.com.cn</span></span>
      <span class="email"><a class="icon" href="javascript:void(0);"><img src="../assets/bottom_icon_address.png"></a><span>地址：广东省广州市黄埔区科学大道193号</span></span>
      <a class="email" href="https://beian.miit.gov.cn">粤ICP备12081883号-4</a>
    </div>
  </div>
</template>
<script>
export default {
  name:'Xaboutus',
}
</script>
<style scoped>
.about-page{
  padding-top: 4.9375rem;
}
.title{
  font-size: 1.5625rem;
  color: #333333;
  margin-bottom: 1.125rem;
  font-family: 'PingFang-Heavy';
  font-weight: normal;
}
.line{
  height: 0.375rem;
  background: url('../assets/middle_line.png') center center no-repeat;
  background-size: auto 100%;
  margin-bottom: 1.125rem;
}
.line-small{
  height: 0.2813rem;
  background: url('../assets/middle_line_small.png') center center no-repeat;
  background-size: auto 100%;
  margin-bottom: 0.6875rem;
}
.line-small-1{
  margin-bottom: 0.625rem;
}
.title2{
  font-size: 1.125rem;
  margin-bottom: 0.625rem;
  color: #333333;
  font-family: 'PingFang-Bold';
  font-weight: normal;
}
.text{
  font-size: 0.6875rem;
  line-height: 0.9375rem;
  margin: 0 1.875rem 0.9375rem;
  color:#666666;
  text-align: center;
  font-family: 'PingFang-Medium';
}
.text2{
  margin-bottom: 0.5rem;
}
.title3{
  margin-bottom: 0.75rem;
}
.img{
  box-sizing: border-box;
  /* height: 9.5938rem; */
  margin: 0 1.875rem 1.5625rem;
}
.img img{
  width: 100%;
  /* height: 100%; */
}
.bottom{
  text-align: center;
  height: 100%;
  font-family: 'PingFang-Medium';
}
.email{
  font-size: 0.6875rem;
  color: #666666;
  display: inline-block;
  width: 100%;
  margin-bottom: 0.625rem;
}
.icon{
  display: inline-block;
  margin:0;
  margin-right: 0.875rem;
  width: 0.875rem;
  height: 0.875rem;
}
.icon img{
  width: 100%;
  height: 100%;
}
</style>