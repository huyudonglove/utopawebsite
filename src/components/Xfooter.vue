<template>
  <div class="footer-bottom">
    <p class="footer-email"><a class="footer-icon" href="javascript:void(0);"><img src="../assets/bottom_icon_email.png"></a><span>邮箱：info@utopa.com.cn</span></p>
    <div class="clearfix footer-box">
      <span class="footer-address"><a class="footer-icon" href="javascript:void(0);"><img src="../assets/bottom_icon_address.png"></a><span>地址：广东省广州市黄埔区科学大道193号</span></span>
      <a class="footer-icp fr" href="https://beian.miit.gov.cn">粤ICP备12081883号-4</a>
    </div>
  </div>
</template>
<script>
export default {
  name:'Xfooter'
}
</script>
<style scoped>
.footer-bottom{
  position: fixed;
  bottom: 0.625rem;
  width: 100%;
  z-index: 50;
  font-family: 'SourceHanSansCN-Regular';
}
.footer-email{
  text-align: left;
  font-size: 0.5rem;
  color: #333333;
  width: 100%;
  padding-left: 0.9375rem;
  margin-bottom: 0.25rem;
}
.footer-box{
  font-size: 0.5rem;
  color: #333333;
  padding: 0 0.9375rem;
  text-align: left;
}
.footer-icon{
  display: inline-block;
  margin:0;
  margin-right: 0.5625rem;
  width: 0.875rem;
  height: 0.875rem;
}
.footer-icon img{
  width: 100%;
  height: 100%;
}
</style>