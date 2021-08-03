<template>
  <div style="height:100%;" id="locusarpage">
    <div class="swiper-container-big">
      <div class="swiper-wrapper">
        <div class="swiper-slide locus-firstpage">
          <h1 class="title">{{$t('message.locus1')}}</h1>
          <p class="text">{{$t('message.locus2')}}</p>
          <p class="text text2">{{$t('message.locus3')}}</p>
          <div class="line"></div>
          <div class="bigBox1 clearfix">
            <div class="box boxl fl">
              <div class="box-img"><img src="../assets/locusar_img1.png"></div>
              <h2 class="boxTitle">{{$t('message.locus4')}}</h2>
              <p class="text bigBox1-text">{{$t('message.locus5')}}</p>
            </div>
            <div class="box boxr fr">
              <div class="box-img"><img src="../assets/locusar_img2.png"></div>
              <h2 class="boxTitle">{{$t('message.locus6')}}</h2>
              <p class="text bigBox1-text">{{$t('message.locus7')}}</p>
            </div>
          </div>
          <div class="box box3">
            <div class="box-img"><img src="../assets/locusar_img3.png"></div>
            <h2 class="boxTitle">{{$t('message.locus8')}}</h2>
            <p class="text bigBox1-text">{{$t('message.locus9')}}</p>
          </div>
          <div class="bigBox1 clearfix">
            <div class="box boxl fl">
              <div class="box-img"><img src="../assets/locusar_img4.png"></div>
              <h2 class="boxTitle">{{$t('message.locus10')}}</h2>
              <p class="text bigBox1-text">{{$t('message.locus11')}}</p>
            </div>
            <div class="box boxr fr">
              <div class="box-img"><img src="../assets/locusar_img5.png"></div>
              <h2 class="boxTitle">{{$t('message.locus12')}}</h2>
              <p class="text bigBox1-text">{{$t('message.locus13')}}</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide locus-secondpage">
          <h1 class="title">{{$t('message.locus14')}}</h1>
          <div class="line line1"></div>
          <div class="locusar2_bigbox swiper-container-small clearfix">
            <div class="swiper-wrapper">
              <div class="locusar2_box swiper-slide" v-for="(item,i) in dataList" :key="i"> 
                <div class="locusar2_img">
                  <img :src="item.imgurl">
                </div>
                <h2 class="locusar2_title">{{item.title}}</h2>
                <p class="text locusar2_text1">{{item.p1}}</p>
                <div class="line-small"></div>
                <p class="locusar2_p">{{item.p2}}</p>
                <p class="locusar2_p">{{item.p3}}</p>
                <p class="locusar2_p">{{item.p4}}</p>
                <p class="locusar2_p">{{item.p5}}</p>
                <p class="locusar2_p">{{item.p6}}</p>
              </div>
            </div>
            <div class="swiper-pagination-small"></div>
          </div> 
          <div class="loginbutton">
            <span @click="$router.push({path:'/locus'})"><img src="../assets/login_normal.png"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="downButton-xu" v-if="showButton" @click="down">
      <img src="../assets/down_button.png">
    </div>
    <div v-if="!showButton">
      <Xfooter></Xfooter>
    </div>
  </div>
</template>
<script>
var Swiper = require('../../static/swiper-bundle.min.js');
import Xfooter from './Xfooter';
import banner1 from "../assets/locusar2_img1.png";
import banner2 from "../assets/locusar2_img2.png";
import banner3 from "../assets/locusar2_img3.png";
export default {
  name:'LocusAR',
  data() {
    return {
      showButton:true,
      dataList: [
        {
          imgurl: banner1,
          title:'图像识别与跟踪',
          p1:'适用于百平米空间快速部署定位能力的技术',
          p2:'云端提供大容量图库支持',
          p3:'支持本地预加载模式',
          p4:'可在多张识别图间快速切换不同的内容场景',
          p5:'可使用多张识别图共同展现同一内容场景',
          p6:'自动化部署多张张贴在不同位置的识别图',
        },
        {
          imgurl: banner2,
          title:'大空间定位',
          p1:'适用于万平米级商场环境的大空间定位',
          p2:'云端完成复杂的定位计算和持久化大空间地图，轻量化终端性能要求',
          p3:'提供大空间高精度三维模型、可视化快速布置虚拟物件以及场地高度贴合、低面片的遮罩模型',
          p4:'只需提供单张RGB照片，即可计算出精、准定位信息',
          p5:'支持场中安放固定设备，监视场景的变化，对场景的地图更新',
          p6:'支持人工通过拍摄现场视频，对地图进行更新',
        },
        {
          imgurl: banner3,
          title:'深度学习',
          p1:'解决场景中人流密集场景中定位难的问题',
          p2:'使用深度学习的方式优化定位特征的提取',
          p3:'针对商场的特征训练专用数据集，提高识别的成功率和定位速度',
          p4:'',
          p5:'',
          p6:'',
        }
      ],
      swiperBig:null
    };
  },
  components:{
    Xfooter
  },
  methods:{
    down(){
      this.swiperBig.slideNext();
    },
    changeWord(){
      
    },
    changeWord2(){

    }
  },
  mounted(){
    this.swiperBig = new Swiper('.swiper-container-big', {
      direction: 'vertical',
      mousewheel: true,
      on:{
        slideChangeTransitionStart:(params)=>{
          this.showButton=!params.isEnd
        }
      }
    }); 
    var swiper = new Swiper('.swiper-container-small', {
      slidesPerView: 'auto',
      centeredSlides: true,
      loop:(this.dataList.length>=3),
      // initialSlide :Math.floor(this.dataList.length/2),//默认第二个
      // spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination-small',
        clickable: true,
      },
    });       
  }
}
</script>
<style>
#locusarpage .swiper-pagination-bullet {
  width: 0.5rem  !important;
  height: 0.5rem  !important;
  display: inline-block  !important;
  border-radius: 100%  !important;
  background: url('../assets/dot.png') center center no-repeat;
  opacity:1;
}
#locusarpage .swiper-pagination-bullet-active {
  background: url('../assets/dot_active.png') center center no-repeat;
}
#locusarpage .swiper-container-big {
  width: 100%;
  height: 100%;
}
#locusarpage .swiper-container-small .swiper-slide{
  opacity: 0.5;
}
#locusarpage .swiper-container-small .swiper-slide-active{
  opacity: 1;
}
</style>
<style scoped>
.locus-firstpage{
  padding-top: 4.9375rem;
}
.locus-secondpage{
  background: url('../assets/locusar_background.png') center bottom no-repeat;
  background-size: 100% auto;
  padding-top: 4.9375rem;
  overflow-x: hidden;
}
.title{
  font-size: 1.5625rem;
  color: #333333;
  margin-bottom: 0.75rem;
  font-family: 'PingFang-Heavy';
  font-weight: normal;
}
.text{
  font-size: 0.75rem;
  line-height: 0.9375rem;
  color:#666666;
  text-align: center;
  font-family: 'PingFang-Medium';
}
.bigBox1-text{
  text-align: justify;
  text-align-last: center;
}
.text2{
  margin-bottom: 0.75rem;
}
.line{
  height: 0.375rem;
  background: url('../assets/middle_line.png') center center no-repeat;
  background-size: auto 100%;
  margin-bottom: 1.5625rem;
}
.box{
  text-align: center;
  width: 10rem;
}
img{
  width: 100%;
  height: 100%;
}
.box-img{
  width: 2.1875rem;
  height: 2.1875rem;
  margin: 0 auto;
}
.boxTitle{
  font-size: 1.125rem;
  color: #333333;
  line-height: 2.375rem;
  font-weight: normal;
  font-family: 'PingFang-Bold';
}
/* .boxl{
  margin-left: 1.625rem;
}
.boxr{
  margin-right: 1.625rem;
} */
.bigBox1{
  margin:0 1.625rem 0.9375rem;
}
.box3{
  margin: 0 auto 0.9375rem;
}
.line1{
  margin-bottom: 0.625rem;
}
.locusar2_bigbox{
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 0.625rem;
}
.locusar2_box{
  width: 15.3125rem;
  margin: 0 1.0938rem !important;
  display: inline-block;
}
.locusar2_img{
  width: 3.125rem;
  height: 3.125rem;
  margin: 0 auto 0.625rem;
}
.locusar2_title{
  font-size: 1.125rem;
  color: #333333;
  margin-bottom: 0.625rem;
  font-family: 'PingFang-Bold';
  font-weight: normal;
}
.locusar2_text1{
  margin-bottom: 0.6875rem;
}
.line-small{
  height: 0.2813rem;
  background: url('../assets/middle_line_small.png') center center no-repeat;
  background-size: auto 100%;
  margin-bottom: 0.625rem;
}
.locusar2_p{
  font-size: 0.6875rem;
  line-height: 0.9375rem;
  margin-bottom: 0.625rem;
  color: #666666;
  white-space:normal;
  text-align: center;
  font-family: 'PingFang-Medium';
}
.locusar2_dots{
  margin-bottom: 2.125rem;
}
.locusar2_dot{
  width: 0.5rem;
  height: 0.5rem;
  background: url('../assets/dot.png') center center no-repeat;
  display: inline-block;
  border-radius: 50%;
  margin-right: 0.75rem;
}
.lastDot{
  margin-right: 0;
}
.locusar2_dot_active{
  background: url('../assets/dot_active.png') center center no-repeat;
}

.loginbutton{
  width: 7.3125rem;
  height: 1.875rem;
  margin: 0 auto;
  position: relative;
  z-index: 1000;
}

</style>