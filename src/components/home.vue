<template>
  <div style="height:100%;" id="homepage">
    <div class="swiper-container-big">
      <div class="swiper-wrapper">
        <div class="swiper-slide main-background">
          <div class="main-ball">
            <img src="../assets/main_ball.png">
          </div>
          <div class="main-xr">
            <img src="../assets/main_xr.png">
          </div>
          <h1 class="main-title">{{$t('message.solgan1')}}</h1>
          <h1 class="main-title main-title-2">{{$t('message.solgan2')}}</h1>
          <!-- <p class="main-p">CREATE A FANTASY EXPERIENCE SPACE</p>
          <p class="main-p">WITH THE COMBINATION OF</p>
          <p class="main-p main-p-3">VIRTUAL AND REAL</p> -->
          <div class="main-line"></div>
        </div>
        <div class="swiper-slide main-background">
          <div class="main2-ball">
            <img src="../assets/main2_ball.png">
          </div>
          <h1 class="main2-title">{{$t('message.home1')}}</h1>
          <div class="main2-title2">{{$t('message.home2')}}</div>
          <div class="main2-title2 main2-title3">{{$t('message.home3')}}</div>
          <div class="main-line main2-line"></div>
          <div class="swiper-container-small1">
            <div class="main2-box swiper-wrapper">
              <div class="main2-banner swiper-slide" v-for="(item,i) in dataList" :key="i">
                <div class="main2-imgTitle">
                  <span class="main2-imgTitle-img"></span>
                  <span class="main2-imgTitle-text">{{item.title}}</span>
                </div>
                <p class="main2-p">{{item.text}}</p>
              </div>
            </div>
            <div class="swiper-pagination-small1"></div>
          </div>
        </div>
        <div class="swiper-slide main-background">
          <div class="main3-ball">
            <img src="../assets/main3_ball.png">
          </div>
          <h1 class="main3-title">{{$t('message.home4')}}</h1>
          <div class="main-line main3-line"></div>
          <div class="swiper-container-small2">
            <div class="main3-box swiper-wrapper"> 
              <!-- :class="{'main3-banner-hide':page2!=i}"  :style="{'background-color':page2!=i?'#b2b2b2':''}"  -->
              <div v-for="(item,i) in dataList2" class="main3-banner clearfix swiper-slide" :key="i">
                <div class="main3-img fl">
                  <img :src="item.img">
                </div>
                <div class="main3-word fl">
                  <h2 class="main3-title-small">{{item.title}}</h2>
                  <p class="main3-text main3-text1">{{item.text1}}</p>
                  <p class="main3-text">{{item.text2}}</p>
                  <div class="main3-button" id="main3-button">
                    <img id="main3-button-img" src="../assets/main_button.png">
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination-small2"></div>
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
import downButton from './downButton';
import Xfooter from './Xfooter';
export default {
  name:'home',
  components:{
    downButton,
    Xfooter
  },
  data(){
    return{
      up:'secondpage',
      showButton:true,
      dataList:[
        {
          text:'LocusAR是一个算法云平台，是连接场景与人之间的桥梁，是通过图像识别、空间定位、深度学习等技术融合的新一代技术平台。',
          img:require('../assets/main2_icon.png'),
          title:'云平台'
        },
        {
          text:'在商场、娱乐、文旅等空间里，AR可以让场景变得更生动，为室内空间创造场景、衍生内容，进而网罗不同社群的人们，激发人们在此社交互动。',
          img:require('../assets/main2_icon.png'),
          title:'打造虚实结合社交空间'
        },
        {
          text:'UtopaXR通过自研的LocusAR算法技术平台，根据室内场景进行现实空间和虚拟融合计算，根据运营场景提供完善的增强现实解决方案，包括AR营销、AR娱乐、AR艺术、AR游戏、AR购物等。打造“AR+云平台”的完整增强现实互动解决方案。',
          img:require('../assets/main2_icon.png'),
          title:'增强现实互动解决方案'
        },
      ],
      page:0,
      page2:1,
      dataList2:[
        {
          title:'AR营销',
          img:require("../assets/yx.jpg"),
          text1:'在空间内任意地点设置1:1商品模型，让用户能够直接的体验到商品效果，促进营销体验。',
          text2:'将商业空间放置体验的商品，能够让消费者更加精准的体验各类商品效果，通过AR技术，提高用户体验，促进营销效果。',
          parent:'AR营销'
        },
        {
          title:'AR艺术',
          img:require("../assets/ys.jpg"),
          text1:'让科技融入艺术，搭建AR艺术创意空间，增强商业空间品味与用户高品质享受。',
          text2:'将商业空间通过AR技术，快速搭建成为拥有三维世界名画的艺术空间，体验AR艺术带来的震撼效果；能够在艺术空间快速放置AR艺术内容，快速打造成AR艺术空间。',
          parent:'AR艺术',
        },
        {
          title:'AR娱乐',
          img:require("../assets/yl.jpg"),
          text1:'在商场任意地点设计种种AR虚拟场景，活动，使商品信息更加高效触达用户。',
          text2:'在将商业空间通过AR技术增加AR内容，让传统商业空间立刻变得拥有互动与动态效果的互动空间，用户能够通过拍照和录像分享所见。',
          parent:'AR娱乐',
        },
        {
          title:'AR游戏',
          img:require("../assets/yx2.jpg"),
          text1:'让用户身边随时发生互动游戏与体验，多人进行游戏互动，增强人与人之间交流，加强空间社交属性，增强用户惊喜感。',
          text2:'通过AR技术，能够在闲置的空间内打造出一个多人互动游戏区，让客户或者游客能够进行AR竞技游戏，游戏后能够按照游戏规则获得奖励。',
          parent:'AR游戏',
        },
        {
          title:'AR购物',
          img:require("../assets/gw.jpg"),
          text1:'让科技融入购物，搭建AR购物空间，增强购物体验与用户进行更多互动。',
          text2:'在商场内，通过APP或者AR眼镜能够快速识别物体并显示物体特性、价格、评价、被购买数量等商品相关资讯，同时提供同类产品推荐，快速购买链接，让用户能够快速购买商品。',
          parent:'AR购物',
        },
      ],
      swiperBig:null
    }
  },
  methods:{
    down(){
      this.swiperBig.slideNext();
    },
    openProduct(item){
      this.$router.push({path:'/productscase',query:{typeName:item.title}});
    },
    changeWord(){
      this.dataList=[
        {
          text:'LocusAR is an algorithmic cloud platform, which is a bridge between scenes and people. It is a new generation technology platform integrating image recognition, spatial positioning, deep learning and other technologies.',
          img:require('../assets/main2_icon.png'),
          title:'Cloud Platform'
        },
        {
          text:'Based on the self-developed LocusAR algorithm technology platform, UtopaXR performs fusion calculations of physical scence and virtual content according to indoor scenes, and provides complete augmented reality solutions for operating scenarios, including AR marketing, AR entertainment, AR arts, AR games, AR shopping, etc.  Create a complete interactive solution  of augmented reality by "AR + Cloud Platform" .',
          img:require('../assets/main2_icon.png'),
          title:'Interactive Solutions for AR'
        },
        {
          text:'AR is able to make physical scenes more vivid in shopping malls, entertainment venues, cultural tourism scenes and other spaces. By creating virtual content and scenes for indoor spaces, AR can attract people from different communities, and inspire people to make social interaction within the spaces.AR is able to make physical scenes more vivid in shopping malls, entertainment venues, cultural tourism scenes and other spaces. By creating virtual content and scenes for indoor spaces, AR can attract people from different communities, and inspire people to make social interaction within the spaces.',
          img:require('../assets/main2_icon.png'),
          title:'Create social space combines with virtuality and reality'
        },
      ];
      this.dataList2=[
       {
          title:'AR Marketing',
          img:require("../assets/yx.jpg"),
          text1:'Placing 1:1 3D model of products in the spaces, enable users to experience the products effect directly, which can promote marketing experience.',
          text2:'Placing experiential goods in commercial space can enable consumers to experience the effects of various goods more accurately. By using AR technology, it is great to improve user experience and promote marketing effects.',
          parent:'AR营销'
        },
        {
          title:'AR Arts',
          img:require("../assets/ys.jpg"),
          text1:'Integrating science and technology into arts that builds artistic and creative space. Enhancing the taste of commercial space and consumers enjoyment.',
          text2:'By using AR technology, commercial spaces can be built into art spaces quickly with lots of 3D famous paintings from all over the world, which brings incredible experience of the shock effect from AR ARTS.',
          parent:'AR艺术',
        },
        {
          title:'AR Entertainment',
          img:require("../assets/yl.jpg"),
          text1:'Design various AR scenes and activities in any location of shopping malls, makes product information can reach users more efficiently.',
          text2:'By using AR technology to add AR contents in comercial space, traditional commercial space can immediately become a interactive space which has interactive and dynamic effect, and users can take pictures and video to share what they see.',
          parent:'AR娱乐',
        },
        {
          title:'AR Games',
          img:require("../assets/yx2.jpg"),
          text1:'Enable Interactive games and experiences to occur around users at any time. Multiplayer game interaction can enhance interpersonal communication, enhance social attributes of space and enhance users sense of surprise.',
          text2:'By using AR technology, a multiplayer interactive game area can be created in a idle space, then customers or tourists can can play AR games without a specific venues. In addtion, they are able to get rewards after the game according to the rules of the game.',
          parent:'AR游戏',
        },
        {
          title:'AR Shopping',
          img:require("../assets/gw.jpg"),
          text1:'By integrating technology into shopping, build AR shopping spaces, which can enhance experience of shopping and create more interaction with users.',
          text2:'In the shopping mall, using APP or AR glasses which can identify objects quickly and shows commodity information such as object characteristics, price, evaluation, purchased quantity, etc. At the same time, recommendation services of similar products and quick purchase links can be provided, enable users to purchase goods quickly.',
          parent:'AR购物',
        }, 
      ]
    },
    changeWord2(){
      this.dataList=[
        {
          text:'LocusAR是一个算法云平台，是连接场景与人之间的桥梁，是通过图像识别、空间定位、深度学习等技术融合的新一代技术平台。',
          img:require('../assets/main2_icon.png'),
          title:'云平台'
        },
        {
          text:'在商场、娱乐、文旅等空间里，AR可以让场景变得更生动，为室内空间创造场景、衍生内容，进而网罗不同社群的人们，激发人们在此社交互动。',
          img:require('../assets/main2_icon.png'),
          title:'打造虚实结合社交空间'
        },
        {
          text:'UtopaXR通过自研的LocusAR算法技术平台，根据室内场景进行现实空间和虚拟融合计算，根据运营场景提供完善的增强现实解决方案，包括AR营销、AR娱乐、AR艺术、AR游戏、AR购物等。打造“AR+云平台”的完整增强现实互动解决方案。',
          img:require('../assets/main2_icon.png'),
          title:'增强现实互动解决方案'
        },
      ];
      this.dataList2=[
        {
          title:'AR营销',
          img:require("../assets/yx.jpg"),
          text1:'在空间内任意地点设置1:1商品模型，让用户能够直接的体验到商品效果，促进营销体验。',
          text2:'将商业空间放置体验的商品，能够让消费者更加精准的体验各类商品效果，通过AR技术，提高用户体验，促进营销效果。',
          parent:'AR营销'
        },
        {
          title:'AR艺术',
          img:require("../assets/ys.jpg"),
          text1:'让科技融入艺术，搭建AR艺术创意空间，增强商业空间品味与用户高品质享受。',
          text2:'将商业空间通过AR技术，快速搭建成为拥有三维世界名画的艺术空间，体验AR艺术带来的震撼效果；能够在艺术空间快速放置AR艺术内容，快速打造成AR艺术空间。',
          parent:'AR艺术',
        },
        {
          title:'AR娱乐',
          img:require("../assets/yl.jpg"),
          text1:'在商场任意地点设计种种AR虚拟场景，活动，使商品信息更加高效触达用户。',
          text2:'在将商业空间通过AR技术增加AR内容，让传统商业空间立刻变得拥有互动与动态效果的互动空间，用户能够通过拍照和录像分享所见。',
          parent:'AR娱乐',
        },
        {
          title:'AR游戏',
          img:require("../assets/yx2.jpg"),
          text1:'让用户身边随时发生互动游戏与体验，多人进行游戏互动，增强人与人之间交流，加强空间社交属性，增强用户惊喜感。',
          text2:'通过AR技术，能够在闲置的空间内打造出一个多人互动游戏区，让客户或者游客能够进行AR竞技游戏，游戏后能够按照游戏规则获得奖励。',
          parent:'AR游戏',
        },
        {
          title:'AR购物',
          img:require("../assets/gw.jpg"),
          text1:'让科技融入购物，搭建AR购物空间，增强购物体验与用户进行更多互动。',
          text2:'在商场内，通过APP或者AR眼镜能够快速识别物体并显示物体特性、价格、评价、被购买数量等商品相关资讯，同时提供同类产品推荐，快速购买链接，让用户能够快速购买商品。',
          parent:'AR购物',
        },
      ]
    }
  },
  computed:{
    lang(){
      return this.$store.state.lang.lang
    }
  },
  watch:{
    lang(){
      console.log(this.lang);
      if(this.lang=='en'){
        this. changeWord();
      }else{
        this. changeWord2();
      }
    }
  },
  mounted(){
    if(this.lang=='en'){
        this. changeWord();
      }else{
        this. changeWord2();
      }
    let self = this;
    this.swiperBig = new Swiper('.swiper-container-big', {
      direction: 'vertical',
      mousewheel: true,
      on:{
        slideChangeTransitionStart:(params)=>{
          this.showButton=!params.isEnd
        }
      }
    });
    // this.swiperBig.on('', );
    var swipersmall1 = new Swiper('.swiper-container-small1', {
      slidesPerView: 'auto',
      centeredSlides: true,
      loop:(this.dataList.length>=3),
      initialSlide :Math.floor(this.dataList.length/2),//默认第二个
      // spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination-small1',
        clickable: true,
      },
    });
    var swipersmall1 = new Swiper('.swiper-container-small2', {
      slidesPerView: 'auto',
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      loop:(this.dataList2.length>=3),
      // initialSlide :Math.floor(this.dataList2.length/2),//默认第二个
      // spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination-small2',
        clickable: true,
      },
      on:{
        click:function(swiper, event){
          let targetId =event.target.id;
          if(targetId=='main3-button'||targetId=='main3-button-img'){
            self.openProduct(self.dataList2[this.realIndex]);
          } 
        }
      }
    }); 
  }
}
</script>
<style>
#homepage .swiper-pagination-bullet {
  width: 0.5rem  !important;
  height: 0.5rem  !important;
  display: inline-block  !important;
  border-radius: 100%  !important;
  background: url('../assets/dot.png') center center no-repeat;
  opacity:1;
}
#homepage .swiper-pagination-bullet-active {
  background: url('../assets/dot_active.png') center center no-repeat;
}
#homepage .swiper-container-big {
  width: 100%;
  height: 100%;
}
#homepage .swiper-container-small1 .swiper-slide{
  opacity: 0.5;
}
#homepage .swiper-container-small1 .swiper-slide-active{
  opacity: 1;
}
#homepage .swiper-container-small2 .swiper-slide{
  /* opacity: 0.5; */
  /* width: 21.5625rem;
  height: 11.8125rem;
  margin: 1.0625rem 0;
  padding: 0.9375rem;
  background-color: #B2B2B2; */
  width: 21.5625rem;
  height: 13.9375rem;
  padding: 2rem 1.875rem;
  margin: 0 0 0.625rem;
  background: url('../assets/main_background_active.png') center center no-repeat;
  background-size: 100% 100%;
}
/* #homepage .swiper-container-small2 .swiper-slide-active{
  width: 21.5625rem;
  height: 13.9375rem;
  padding: 2rem 1.875rem;
  margin: 0 0 0.625rem;
  background: url('../assets/main_background_active.png') center center no-repeat;
  background-size: 100% 100%;
} */
</style>
<style scoped>
.downButton{
  width: 1.9375rem;
  height: 1.125rem;
  position: fixed;
  bottom: 2.125rem;
  left: 50%;
  transform: translate(-50%,0);
  -ms-transform:translate(-50%,0); /* IE 9 */
  -moz-transform:translate(-50%,0); /* Firefox */
  -webkit-transform:translate(-50%,0); /* Safari 和 Chrome */
  -o-transform:translate(-50%,0); /* Opera */
}
.downButton img{
  width: 100%;
  height: 100%;
}
.main-background{
  background: url('../assets/main_background.png') center bottom no-repeat;
  background-size: 100% auto;
  padding-top: 4.9375rem;
  overflow-x: hidden;
}
.main-ball{
  width: 6.5625rem;
  height: 6.5625rem;
  margin: 0 auto 2.1875rem;
}
img{
  width: 100%;
  height:100%;
}
.main-xr{
  width: 8.9375rem;
  height: 1.9375rem;
  margin: 0 auto 1.25rem;
}
.main-title{
  font-size: 2.0625rem;
  color: #333333;
  line-height: 2.5625rem;
  font-family: 'moshou';
  font-weight: normal;
}
.main-title-2{
  margin-bottom: 1.5625rem;
}
.main-p{
  font-size: 0.625rem;
  color: #999999;
  line-height: 0.9375rem;
  font-family: 'PingFang-Regular';
}
.main-p-3{
  margin-bottom: 1.5rem;
}
.main-line{
  height: 0.375rem;
  background: url('../assets/middle_line.png') center center no-repeat;
  background-size: auto 100%;
}
#secondpage{
  position: relative;
}
.main2-ball{
  width: 4.625rem;
  height: 4.625rem;
  margin: 0 auto 1.5625rem;
}
.main2-title{
  font-size: 1.5625rem;
  color: #333333;
  margin-bottom: 0.6875rem;
  font-weight: normal;
  font-family: 'PingFang-Heavy';
}
.main2-title2{
  font-size: 0.8125rem;
  color: #666666;
  line-height: 1.4375rem;
  font-family: 'PingFang-Medium';
  width: 15.625rem;
  margin: 0 auto;
}
.main2-title3{
  margin: 0 auto 1.375rem;
}
.main2-imgTitle{
  /* width: 12.5rem; */
  height: 1.375rem;
  margin-bottom: 1.25rem;
  text-align: center;
}
.main2-imgTitle-img{
  display: inline-block;
  width: 1.0625rem;
  height: 1.0625rem;
  line-height: 1.375rem;
  vertical-align: middle;
  background: url('../assets/main2_icon.png') center center no-repeat;
  background-size: 100%;
}
.main2-imgTitle-text{
  display: inline-block;
  font-size: 1rem;
  line-height: 1.375rem;
  height: 1.375rem;
  color: #333333;
  vertical-align: middle;
  padding-left: 0.3125rem;
  font-family: 'PingFang-Heavy';
}
.main2-img1 img{
  width:auto;
}
.main2-line{
  margin-bottom: 1.375rem;
}
.main2-box{
  margin-bottom: 1.5625rem;
}
.main2-banner{
  width: 15.625rem;
  /* display: inline-block; */
  margin: 0 1.0938rem;
}
.main2-banner-hide{
  opacity: 0.5;
}
.main2-p{
  font-size: 0.75rem;
  color: #666666;
  line-height: 1.125rem;
  font-family: 'PingFang-Medium';
  text-align: justify;
  text-align-last: center;
}
.main2_dots{
  position:absolute;
  bottom: 17.125rem;
  left: 50%;
  transform: translate(-50%,0);
  -webkit-transform: translate(-50%,0);
  -moz-transform: translate(-50%,0);
  -ms-transform: translate(-50%,0);
  -o-transform: translate(-50%,0);
}
.main2_dot{
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
.main2_dot_active{
  background: url('../assets/dot_active.png') center center no-repeat;
}
#thirdpage{
  position: relative;
}
.main3-ball{
  width: 4.375rem;
  height: 4.375rem;
  margin: 0 auto 1.5rem;
}
.main3-title{
  font-size: 1.5625rem;
  color: #333333;
  margin-bottom: 1.1875rem;
  font-weight: normal;
  font-family: 'PingFang-Heavy';
}
.main3-line{
  margin-bottom: 1.0625rem;
}
.main3-banner{
  /* width: 21.5625rem;
  height: 13.9375rem;
  padding: 2rem 1.875rem; */
  display: inline-block;
  /* margin-bottom: 0.625rem; */
}
.main3-banner-hide{
  opacity: 0.5;
}
.main3-img{
  width: 7.8125rem;
  height: 9.9375rem;
  margin-right: 0.875rem;
}
.main3-word{
  width: 9.125rem;
  height: 9.9375rem;
  position: relative;
}
.main3-title-small{
  font-size: 0.9375rem;
  color: #333333;
  font-weight: normal;
  font-family: 'PingFang-Bold';
  text-align: left;
  margin-bottom: 0.8125rem;
}
.main3-text{
  font-size: 0.625rem;
  color: #666666;
  font-family: 'PingFang-Medium';
  line-height: 0.875rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.main3-text1{
  margin-bottom: 0.9375rem;
}
.main3-button{
  position: absolute;
  bottom: 0;
  width: 3.625rem;
  height: 1.125rem;
}
</style>