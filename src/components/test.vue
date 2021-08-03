<template>
  <div style="height:100%;">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
var Swiper = require('../../static/swiper-bundle.min.js');
export default {
  name:'test',
  components:{
    height(){
      return document.documentElement.clientHeight;
    }
  },
  mounted(){
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });  
    // var swiper = new Swiper('.swiper-container', {
    //   direction: 'vertical',
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    // });     
  }
}
</script>
<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width:80%;
  background:url('../assets/product_background_active.png') 0 0 no-repeat;
  background-size: 100% 100%;
}
</style>