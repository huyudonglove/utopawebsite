<template>
  <div class="details-bakcground" style="height:100%;">
    <h1 class="details-title">{{dataObj.title}}</h1>
    <h2 class="details-title2">{{dataObj.parent}}</h2>
    <div class="details-line"></div>
    <div class="details-box">
      <div class="videoBox" :style="{'backgroundColor':isShow?'#000000':'#ffffff'}">
        <video
          id="myVideo" :class="{'videoHidden':isShow}" 
          :src="dataObj.video" 
          controls = "true"
          preload="auto" 
          autoplay="autoplay"
          
          webkit-playsinline="true"  
          playsinline="true"  
          x-webkit-airplay="true" 
          x5-video-player-type="h5"  
          x5-video-player-fullscreen="true" 
          x5-video-orientation="portraint"
          style="object-fit:fill;"
          poster="">
        </video>
        <!-- <video id="myVideo" :class="{'videoHidden':isShow}" style="object-fit:fill;"
          :src="dataObj.video"
          controls
          x5-playsinline="true"
          playsinline="true"
          webkit-playsinline="true"
          poster=""
          autoplay
          muted
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true" 
          x5-video-orientation="portraint"
          x-webkit-airplay="true"
          preload="auto">
        </video> -->
        <!-- <canvas id="myCanvas">不支持canvas</canvas> -->
        <!-- <img id="myImg" :src="dataObj.img"> -->
      </div>
      <p class="details-text">{{dataObj.detailText}}</p>
      <div id="detailsReturn" class="details-return" :class="{'details-return-move':flag}" @click="$router.go(-1)" @touchstart="down" @touchmove="move" @touchend="end"></div>
    </div>
    <div>
      <Xfooter></Xfooter>
    </div>
  </div>
</template>
<script>
import Xfooter from './Xfooter';
import img1 from "../assets/kc.jpg";
import img2 from "../assets/gjy.jpg";
import img3 from "../assets/hy.jpg";
import img4 from "../assets/hy2.jpg";
import img5 from "../assets/xyc.jpg";
import img6 from "../assets/gq.jpg";
import img7 from "../assets/dh.jpg";
import img8 from "../assets/ych.jpg";
import img9 from "../assets/bp.jpg";
import img10 from "../assets/drjs.jpg";
import img11 from "../assets/hj.jpg";
import img12 from "../assets/syfll.jpg";
import img13 from "../assets/sbsy.jpg";
import img14 from "../assets/sszs.png";
export default {
  name:'Xdetails',
  components:{
    Xfooter,
  },
  data(){
    return{
      array:[],
      tabList:[
        
            {text:'AR娱乐',
            isCheck:true,
            children:[
              {
                title:'AR歌剧院',
                img:img2,
                text:'AR带你走进恢弘意大利大剧院体会沉浸式歌剧的雄浑与厚重欣赏灵动飘逸的足尖芭蕾伴舞',
                detailText:'歌剧起源于意大利，意大利人热爱歌剧，歌剧流淌在他们的血液中。请跟随AR歌剧院的脚步，带你走进恢弘的意大利大剧院，来一场横跨400年的AR歌剧艺术之旅。你可以聆听到帕瓦罗蒂灿烂音乐生涯的6首巅峰之作，还可以欣赏到灵动飘逸的足尖芭蕾伴舞，别有一番风味。',
                parent:'AR娱乐',
                video:'yjsjgjy'
              },
              {
                title:'AR合影',
                img:img3,
                text:'通过AR技术增加AR内容，让静态网红打卡空间立刻变得拥有互动与动态效果的互动空间，用户能够通过拍照和录像分享所见。',
                detailText:'通过AR技术，让歌剧人物配合你拍照，镜头里的歌剧人物并非动态贴纸，你可以给它摆pose、换表情，让它们做出各种搞怪的pose以及表情，甚至还能配合贴纸、滤镜、文字来使用，让你打破次元壁。',
                parent:'AR娱乐',
                video:'arhy'
              },
              {
                title:'AR奇幻花园',
                img:img4,
                text:'AR呈现神秘奇幻的巴洛克典雅园林意国古典浪漫故事融入现代自然中让意大利惬意生活在现实相遇',
                detailText:'AR奇幻花园为你带来神秘奇幻的意大利巴洛克风格的园林花园。AR典雅花园景像与真实的自然绿植景观融为一体，完美的将现代自然和欧洲古典浪漫相结合，让意大利惬意生活穿透时光，在现实中相遇。花园还设计了凄美的故事情节，巧妙糅合到每一处景致中，花园主人还寄语祝福，为每一位居于此中的人带来更多的体验感与趣味性。',
                parent:'AR娱乐',
                video:'arhysjyj'
              },
               {
                title:'生命之树',
                img:img14,
                text:'这座由纯AR效果呈现的生命之树，大空间SLAM技术（即大空间即时定位与地图构建）、虚实感知互动等技术的开发与应用，其精度可以达到厘米级别，能够按照1：1比例为游客带来近乎震撼的观赏感受。',
                detailText:'用户能够通过手机或者现场佩戴AR眼镜，就能够在似真似幻的优托邦世界里游览，从璀璨星河到万里深海，从灵动植物到淘气动物，从陆地森林到浮游岛屿……三维空间之下，所到之处、所见之物，都奇幻无比。',
                parent:'AR娱乐',
                video:'smzs'
              },
              {
                title:'AR特莱维许愿池',
                img:img5,
                text:'欣赏超现实AR特莱维许愿池向潺潺喷泉许下你最诚挚的愿望在影像里为你的意大利之旅盖个戳',
                detailText:'意大利罗马的特莱维许愿池，别名幸福喷泉，是罗马最后一件巴洛克杰作，被誉为世界最著名的喷泉，在电影《罗马假日》风靡全球后闻名于全世界。罗马人有一个美丽的传说，背对着喷泉，右手拿硬币从左肩上方向后投入水中，一枚硬币，有朝一日就可以重返罗马；两枚硬币，就能和相爱的人在一起；三枚硬币，心中讨厌的那个人将会远离你。现在，通过AR技术将特莱维许愿池真实还原，就能欣赏到AR许愿池超现实的美丽景象。向潺潺的喷泉许下你最诚挚的愿望，在影像里留为你的意大利穿越之旅盖个戳。',
                parent:'AR娱乐',
                video:'xycsjyj'
              },
              {
                title:'AR魔幻钢琴',
                img:img6,
                text:'通过AR技术，能够体验各种钢琴名曲，让用户能够在体验各类乐曲的同时，与虚拟角色录像与拍照，分享所见',
                detailText:'AR魔幻演奏是学习和体验钢琴音乐的新方法。通过AR技术将一位虚拟钢琴家放在钢琴前演奏精选曲目。在舒适的客厅里，即可以沉浸体验一场交互式增强现实钢琴音乐会。',
                parent:'AR娱乐',
                video:'mhyz'
              }
            ]},
            {text:'AR营销',
            isCheck:false,
            children:[
              {
                title:'AR看车',
                img:img1,
                text:'定制的AR看车应用，能让人印象深刻。通过AR技术召唤出一辆品牌车辆，全方位直观感受品牌汽车的魅力',
                detailText:'传统汽车宣传册很难让人留有印象。定制的AR看车应用，能让人印象深刻。通过AR技术召唤出一辆品牌车辆，1比1的显示品牌车辆，全方位直观感受品牌汽车的魅力，这比阅读产品介绍和欣赏图片来得更让人冲动。通过AR技术全方位立体看车，720度全景看内饰，不仅能开车门、开大灯、换颜色、换轮毂、模拟试驾、拍照分享，还能看车型参数，用户想了解的一切车的信息，都在这里。',
                parent:'AR营销',
                video:'qc'
              }
            ]},
            {text:'AR艺术',
            isCheck:false,
            children:[
              {
                title:'AR对话大师',
                img:img7,
                text:'传统艺术与AR前沿科技的碰撞，沉浸感受文艺复兴经典作品意蕴与画作生动合影拍出创意大片',
                detailText:'意大利的文艺复兴是一次人类从来没有经历过的最伟大的进步的文化变革。AR对话大师在书墙上设置了“徽章”识别图，通过AR技术，就能欣赏到意大利文艺复兴绘画大师的AR表演。展览囊括了文艺复兴盛期“艺坛大师”30幅经典作品。以“文艺复兴时期的人文精神”、“文艺复兴大师谱系”的线索进行串联，通过AR技术，增强在现实世界的感官体验与互动。可以用任何角度观看油画里的人物动态，近距离感受画作细节，还可以看到作品的创作时间、作品描述等内容。这场与世界杰出艺术家跨时空的对话中，不仅可以看到艺术创作过程中“原石”到“宝石”的华丽转变，还可以从中一窥欧洲文艺复兴的波澜壮阔，细细品味600年前佛罗伦萨的人文之光。你还可以与油画合影，为你的意大利穿越之旅留下纪念。',
                parent:'AR艺术',
                video:'dhds'
              },
              {
                title:'AR意起聆听演奏会',
                img:img8,
                text:'聆听意国音乐瑰宝绕梁之音与三大乐派大师AR互动对唱，感受深厚文艺复兴文化底蕴',
                detailText:'意大利这个充满艺术细胞的国度，有着深厚的文化底蕴和无数杰出的艺术流派和大师，其中文艺复兴三大乐派在欧洲音乐史中的地位更是举足轻重。AR意起聆听演奏会为你带来一次精彩绝伦的意大利音乐体验之旅，让你感受到文艺复兴时期所留下的不可磨灭的痕迹以及意大利浓烈的古典音乐艺术氛围。“AR意起聆听”体验活动将“尼德兰乐派”、“罗马乐派”和“威尼斯乐派”三大乐派的3首经典乐曲完整呈现。只要你通过手机进行AR互动，就能观看到乐团生动的演绎，还可以看到乐曲的介绍内容。而且，你还可以置身其中，当一回有模有样的音乐家。',
                parent:'AR艺术',
                video:'sds'
              },
              {
                title:'AR波普艺术',
                img:img9,
                text:'展览以AR技术与场景搭建相结合的方式呈现，旨在创造一个跨越时间和地域界限的无界空间概念的艺术展览，快速打造成',
                detailText:'“波普”（pop）也是“棒棒糖”（lollypop，lolly是舌头，pop是涂抹）的一个简化口语词，可追溯至十八世纪。波普艺术是从1950年代中后期开始。这个词的定义，即：流行的，年轻人的，诙谐风趣的，恶搞的魅惑人的，以及商业的。展览以AR技术与场景搭建相结合的方式呈现，旨在创造一个跨越时间和地域界限的无界空间概念的艺术展览。在一个跨越时间和地域的空间中，艺术史中传统神圣的形象（文艺复兴时期到浪漫主义时期的形象）与当代波普艺术中通俗大众的流行文化形象产生碰撞。在这样一个艺术走向普罗大众人人都能成为艺术家的年代，我们需要重新去探讨今天面对艺术时最原初的本质是什么。',
                parent:'AR艺术',
                video:'bpys'
              }
            ]},
            {text:'AR游戏',
            isCheck:false,
            children:[
              {
                title:'多人AR竞技游戏',
                img:img10,
                text:'通过AR技术，能够在闲置的空间内打造出一个多人互动游戏区，让客户或者游客能够进行',
                detailText:'AR竞技游戏是一款头戴显示器，手部套上感应装置放出“波动”的AR虚拟增强现实技术竞技类游戏。三人组队通过使用能量波攻击对方，通过护盾启动防御来抵抗攻击，还可以左右闪躲来躲避攻击，在80秒时间内比拼得分高低，玩法类似躲避球。',
                parent:'AR游戏',
                video:'drjs'
              }
            ]},
            {text:'AR购物',
            isCheck:false,
            children:[
              {
                title:'AR虚拟货架',
                img:img11,
                text:'通过AR技术快速识别物体并显示物体特性、价格、评价、被购买数量等商品相关资讯，同时提供同类产品推荐，快速购买链接接口，让用户能够快速购买商品。',
                detailText:'通过AR技术，用户在浏览商品同时不断测试属性调整与效果比商品。通过属性调整，可以了解与使用环境的相容性；而效果比对能帮助用户确定购买决策。通过AR虚拟购物，降低用户焦虑。通过AR虚拟购物玩法，吸引用户主动或被动参与。用户获得优惠特权提升下单效率，平台和商家提升流量和知名度，提升转化效率带动流量和转化率提升，提高用户粘性。',
                parent:'AR购物',
                video:'arhj'
              }
            ]},
            {text:'VR娱乐',
            isCheck:false,
            children:[
              {
                title:'法拉利神游',
                img:img12,
                text:'听着Andrea Bocelli的情歌，开着法拉利驰骋于意大利的各个角落，大概是每个人都幻想过的电影场景。这一次，借助全景VR体验技术，瞬间穿越时尚米兰、恢弘罗马和文艺翡冷翠，一站式满足你对意大利的所有想象！',
                detailText:'听着Andrea Bocelli的情歌，开着法拉利驰骋于意大利的各个角落，大概是每个人都幻想过的电影场景。这一次，借助全景VR体验技术，瞬间穿越时尚米兰、恢弘罗马和文艺翡冷翠，一站式满足你对意大利的所有想象！',
                parent:'VR娱乐',
                video:'fliyfz'
              },
              {
                title:'漫步神游',
                img:img13,
                text:'每一次出国都是拖家带口、走马观花，想和他携手慢游、浪漫一把可太难了。这次请戴上VR眼镜，轻装上阵，米兰大教堂、埃马努埃莱二世拱廊……，漫步寻迹辉煌百年的文化遗产，360°全景欣赏原汁原味的意大利！每个经典背后，都有着怎样的动人故事？ Bocelli的情歌，开着法拉利驰骋于意大利的各个角落，大概是每个人都幻想过的电影场景。这一次，借助全景VR体验技术，瞬间穿越时尚米兰、恢弘罗马和文艺翡冷翠，一站式满足你对意大利的所有想象！',
                detailText:'每一次出国都是拖家带口、走马观花，想和他携手慢游、浪漫一把可太难了。这次请戴上VR眼镜，轻装上阵，米兰大教堂、埃马努埃莱二世拱廊……，漫步寻迹辉煌百年的文化遗产，360°全景欣赏原汁原味的意大利！每个经典背后，都有着怎样的动人故事？',
                parent:'VR娱乐',
                video:'xz'
              }
            ]}
          ],
      dataObj:{},
      myVideo:null,
      isMuted:false,
      x:0,
      y:0,
      dx:0,
      dy:0,
      nx:0,
      ny:0,
      detailsReturn:null,
      flag:false
    }
  },
  computed:{
    isShow(){
      return this.$store.state.Xheader.isShowHeader;
    }
  },
  watch:{
    isShow(val){
      if(val){
        // this.draw();
      }
    }
  },
  methods:{
    draw(){
      let canvas = document.getElementById("myCanvas");
      let img = document.getElementById("myImg");
      let ctx = canvas.getContext('2d');
      ctx.drawImage(this.myVideo,0,0,canvas.width,canvas.height);
      var strDataURI=canvas.toDataURL("image/png"); 
      img.setAttribute('src',strDataURI); 
    },
    down(event){
      this.flag = true;             //确认鼠标按下
      var touch;
      if(event.touches){
        touch = event.touches[0];
      }else {
        touch = event;
      }
      this.x = touch.clientX;   //记录当前鼠标的x坐标
      this.y = touch.clientY;   //记录当前鼠标的y坐标
      var translate = document.defaultView.getComputedStyle(this.detailsReturn, null).transform.slice(10,-1).split(",");
      this.dx = Number(translate[translate.length-2]);   //记录div当时的左偏移量
      this.dy = Number(translate[translate.length-1]);   //记录div的上偏移量
    },
    //鼠标移动时的函数
    move(event){
      if(this.flag){
        event.preventDefault();
        var touch; 
        if(event.touches){
          touch = event.touches[0];
        }else {
          touch = event;
        }                       //如果是鼠标按下则继续执行
        this.nx = touch.clientX - this.x;  //记录鼠标在x轴移动的数据
        this.ny = touch.clientY - this.y;  //记录鼠标在y轴移动的数据
        this.detailsReturn.style.transform = `translate(${this.dx+this.nx}px,${this.dy+this.ny}px)`;
      }
    },
    //鼠标释放时候的函数
    end(){
      this.flag = false; //鼠标释放
      var translate = document.defaultView.getComputedStyle(this.detailsReturn, null).transform.slice(10,-1).split(",");
      var tranlateY = Number(translate[translate.length-1]);   //记录div的上偏移量
      this.detailsReturn.style.transform = `translate(0,${tranlateY}px)`;//移到最左边
    }
  },
  created(){
    for(let i=0;i<this.tabList.length;i++){
      for(let j=0;j<this.tabList[i].children.length;j++){
        this.array.push(this.tabList[i].children[j])
      }
    }
    this.$nextTick(()=>{
    let obj=this.array.filter(v=>v.title==this.$route.query.details)
    if(obj.length){
    this.dataObj=obj[0];
    this.dataObj.video = require('../assets/video/'+this.dataObj.video+'.mp4');
    }else{
    this.$router.push({path:'/productscase'});
    }
    })
  },
  mounted(){
    // var UA = navigator.userAgent;
    // if (UA.match(/iPad/) || UA.match(/iPhone/) || UA.match(/iPod/)) {
    //     this.isMuted=true;
    // }else{
    //     this.isMuted=false;
    // }
    this.myVideo = document.getElementById("myVideo");
    let playPromise = this.myVideo.play();
    if (playPromise) {
      playPromise.then(() => {
          // 视频加载成功
          // 视频的播放需要耗时
          setTimeout(() => {
            // 后续操作
            console.log("done.");
          }, this.myVideo.duration * 1000); // audio.duration 为视频的时长单位为秒
      }).catch((e) => {
          // 视频加载失败
      });
    }
    this.detailsReturn = document.getElementById("detailsReturn");
  },
  beforeDestroy(){
    // this.myVideo.pause();
  }
}
</script>
<style scoped>
.details-bakcground{
  background: url('../assets/product_background.png') center bottom no-repeat;
  background-size: 100% auto;
  padding-top: 4.9375rem;
  overflow-x: hidden;
}
.details-title{
  color: #333333;
  font-family: 'PingFang-Bold';
  font-weight: normal;
}
.details-title2{
  font-size: 0.625rem;
  color: #666666;
  font-family: 'PingFang-Bold';
  margin-bottom: 0.6875rem;
  font-weight: normal;
}
.details-line{
  height: 0.375rem;
  background: url('../assets/middle_line.png') center center no-repeat;
  background-size: auto 100%;
  margin-bottom: 1rem;
}
.details-box{
  padding: 0 1.875rem;
  position: relative;
}
.details-text{
  padding-top: 0.9375rem;
  font-size: 0.625rem;
  color: #666666;
  font-family: 'PingFang-Bold';
  line-height: 1.125rem;
  text-align: justify;
  text-align-last: left;
}
.videoBox{
  height: 13.125rem;
  position: relative;
}
#myVideo{
  width:100%;
  height:100%;
  position: absolute;
  left: 0;
  top: 0;
}
#myVideo.videoHidden{
  visibility: hidden;
  width:0;
  height: 0;
}
#myCanvas{
  width: 100%;
  height:100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
#myImg{
  width: 100%;
  height:100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 4;
}
.details-return{
  width: 3rem;
  height: 2.8125rem;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3000;
  background: url('../assets/return_button.png') 0 0 no-repeat;
  background-size: 100% 100%;
  transform: translate(0,0);
  -ms-transform: translate(0,0);
  -moz-transform: translate(0,0);
  -webkit-transform: translate(0,0);
  -o-transform: translate(0,0);
}
.details-return-move{
  background: url('../assets/return_button_move.png') 0 0 no-repeat;
  background-size: 100% 100%;
}
</style>