<template>
  <div class="product-background" style="height:100%;touch-action:none;" id="productpage">
    <h1 class="product-title">{{$t('message.title2')}}</h1>
    <div class="product-line"></div>
    <div class="product-tab" >
      <div class="product-tab-text" v-for="(item,i) in tabList" :class="{'product-tab-active':item.isCheck}" :key="i" v-if='i<2' @click="tabChange(i)" >{{item.text}}</div>
      <div class="product-tab-text" v-for="(item,i) in tabList" :class="{'product-tab-active':item.isCheck}" :key="i" v-if='i==2' @click="tabChange(i)" >{{item.text}}</div>
      <div class="product-tab-text" v-for="(item,i) in tabList" :class="{'product-tab-active':item.isCheck}" :key="i" v-if='i>3' @click="tabChange(i)" >{{item.text}}</div>
    </div>
    <div class="swiper-container">
      <div class="product-box swiper-wrapper">
        <div v-for="(item,i) in dataList" :key="i" class="product-banner swiper-slide">
          <div class="product-banner-img">
            <img id="product-banner-img" :src="item.img">
          </div>
          <div class="product-banner-div" id="product-banner-div">
            <p class="product-banner-text" id="product-banner-text">
              {{item.text}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="leftright">
      <span id="left-button" class="leftright-button" v-if="dataList.length>1" :class="{'light':isLeftDown}" @click="left" @touchstart="leftDown" @touchend="leftUp"></span>
      <h2 class="leftright-title">{{productTitle}}</h2>
      <span id="right-button" class="leftright-button" v-if="dataList.length>1" :class="{'light':isRightDown}" @click="right" @touchstart="rightDown" @touchend="rightUp"></span>
    </div>
    <div>
      <Xfooter></Xfooter>
    </div>
  </div>
</template>
<script>
var Swiper = require('../../static/swiper-bundle.min.js');
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
  name:'productscase',
  components:{
    Xfooter,
  },
  data(){
    return{
      productTitle:'',
      isLeftDown:false,
      isRightDown:false,
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
            text:'每一次出国都是拖家带口、走马观花，想和他携手慢游、浪漫一把可太难了。这次请戴上VR眼镜，轻装上阵，米兰大教堂、埃马努埃莱二世拱廊……，漫步寻迹辉煌百年的文化遗产，360°全景欣赏原汁原味的意大利！每个经典背后，都有着怎样的动人故事？',
            detailText:'每一次出国都是拖家带口、走马观花，想和他携手慢游、浪漫一把可太难了。这次请戴上VR眼镜，轻装上阵，米兰大教堂、埃马努埃莱二世拱廊……，漫步寻迹辉煌百年的文化遗产，360°全景欣赏原汁原味的意大利！每个经典背后，都有着怎样的动人故事？',
            parent:'VR娱乐',
            video:'xz'
          }
        ]}
      ],
      dataList:[
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
      ],
      swiper:null
    }
  },
  methods:{
    newSwiper(){
      let self = this;
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop:(this.dataList.length>3),
        // spaceBetween: 30,
        initialSlide :Math.floor(this.dataList.length/2),//默认第二个
        observer: true,
        observeParents: true,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on:{
          slideChangeTransitionStart:(params)=>{
            if(this.swiper&&this.swiper.realIndex!==undefined){this.productTitle = this.dataList[this.swiper.realIndex].title;}
          },
          click:function(swiper, event){
            let targetId =event.target.id;
              if(targetId=='product-banner-img'||targetId=='product-banner-div'||targetId=='product-banner-text'){
              self.openDetail(self.dataList[this.realIndex]);
            }
          }
        }
      });
      this.productTitle = this.dataList[Math.floor(this.dataList.length/2)].title;
      console.log(Math.floor(this.dataList.length/2),999)
    },
    tabChange(i){
      this.$router.push({
        query:{'typeName':this.tabList[i].text}
      })
      this.tabList.forEach(v=>{v.isCheck=false});
      this.tabList[i].isCheck=true;
      this.dataList = this.tabList[i].children;
      this.$nextTick(()=>{
        this.swiper.destroy();
        this.newSwiper();
      })
    },
    openDetail(item){
      this.$router.push({name:'Xdetails',query:{details:item.title}});
    },
    left(){
      this.swiper.slidePrev();
    },
    right(){
      this.swiper.slideNext();
    },
    leftDown(){
      this.isLeftDown=true;
    },
    leftUp(){
      this.isLeftDown=false;
    },
    rightDown(){
      this.isRightDown=true;
    },
    rightUp(){
      this.isRightDown=false;
    },
    changeWord(){
      this.tabList=[
        {text:'AR Entertainment',
        isCheck:true,
        children:[
          {
            title:'AR Opera',
            img:img2,
            text:'AR takes you into the grand Italian opera, experience the thick of immersive opera , enjoy the spirit...',
            detailText:"Opera originated in Italy. Italians love opera. It's in their blood. Please follow the footsteps of AR Opera House and it can lead you into the grand Italian Opera House, to have a journey of AR opera art spanning 400 years. You can listen to the 6 pinnacle pieces of Pavarotti's brilliant career. You can also enjoy the elegant and flowing ballet dance, which has a special flavor.",
            parent:'AR Entertainment',
            video:'yjsjgjy'
          },
          {
            title:'AR Photographing',
            img:img3,
            text:'Add AR content through AR technology, make the static space become interactive immediately... ',
            detailText:"Through AR technology, you can take photos with opera characters. The opera characters in the lens are not dynamic stickers, you can pose them, change their expression, make a variety of funny pose and expression for them, even stickers, filters, text are allowed to use. Let’s experience it and break the dimensional wall.",
            parent:'AR Entertainment',
            video:'arhy'
          },
          {
            title:'AR Magic Garden',
            img:img4,
            text:'AR presents a mysterious and fantastic baroque garden, integrating Italian romance into modern nature...',
            detailText:"AR Magic Garden brings you to a mysterious and fantastic Italian Baroque garden. The AR elegant garden scene is integrated with the real natural greenery landscape, which perfectly combines modern nature and European classical romance, allowing the comfortable life of Italy to penetrate time and meet in reality. The garden is also designed with a poignant storyline, which is cleverly integrated into every scenery. The garden owner also sends blessings to bring more experience and interest to everyone living in it.",
            parent:'AR Entertainment',
            video:'arhysjyj'
          },
          {
            title:'AR Trevi Fountain',
            img:img5,
            text:'Enjoy the surreal AR Trevi Fountain and make your sincerest wishes to the gurgling fountains...',
            detailText:"The Trevi Fountain of Rome known as the Fountain of Happiness, which is the last Baroque masterpiece in Rome, also known as one of the most famous fountains in the world. It became famous after the movie Roman Holiday became popular all over the world. Previously, the Romans have a beautiful legend. When a person faces the fountain with his back, then takes the coin in his right hand and drops it into the water by the left shoulder. If the person uses one coin with this behavior, it means that he will return to Rome in one day of the future. Besides, using two coins means that he can in love with the people he loves. However, using three coins means the person you hate in your heart will stay away from you. At present, by using AR technology to truly restore the Trevi Fountain, you can enjoy the surreal beauty of the AR Trevi. Make your sincere wishes to the fountain and leave a stamp for your Italy journey.",
            parent:'AR Entertainment',
            video:'xycsjyj'
          },
          {
            title:'AR Magic Piano',
            img:img6,
            text:'By using AR technology, consumers can experience a variety of piano music and all kinds of famous music...',
            detailText:"AR Magic Piano is a new way to learn and experience piano music. A scene of a virtual pianist playing a song in front of the piano, and we use AR technology to show it in front of our eyes. If you sit in your comfortable living room with our AR Magic Piano, you can enjoy an interactive augmented reality piano concert.",
            parent:'AR Entertainment',
            video:'mhyz'
          }
        ]},
        {text:'AR Marketing',
        isCheck:false,
        children:[
          {
            title:'AR Cars',
            img:img1,
            text:'Customized AR car-viewing application, which impress customers strongly . Call up a brand through AR technology...',
            detailText:"Traditional car brochures are hard to impress consumers. However, customized AR car-viewing application can impress them. Through AR technology to call up a  car in one to one ratio, makes the charm of the brand car feel intuitively in all directions, which is more exciting than reading product introduction and appreciating pictures. Through AR technology, you can see the car in all directions and look at the interior decoration in 720 degree panorama. Consumers can see the door, turn on the headlights, change the color, change the wheel hub, simulate the test drive, take photos and share, but also see the model parameters. All the information about the car that users want to know is here.",
            parent:'AR Marketing',
            video:'qc'
          }
        ]},
        {text:'AR Arts',
        isCheck:false,
        children:[
          {
            title:'AR Dialogue Master',
            img:img7,
            text:'The collision between traditional art and AR cutting-edge technology, immerse yourself in the renaissance classic works and...',
            detailText:"The Italian Renaissance was the greatest progressive cultural change that mankind has never experienced. AR Dialogue Master sets up a badge identification map on the book wall, and through AR technology to let people enjoy the AR performances by Italian Renaissance painting masters. This exhibition includes 30 classic works of art masters during the heyday of the Renaissance. Connected with the clues of Renaissance Humanistic Spirit and Renaissance Master Genealogy, enhance sensory experience and interaction with the real world through AR technology. The users can not only watch the dynamics of the characters in the oil painting from any angle, feel the details of the painting at close range, but also see the creation time and description of the work. In this time-and-space dialogue with world-renowned artists, you can see the magnificent transition from “rough stone” to “gem” in the process of artistic creation as well as getting a glimpse of the grandeur of the European Renaissance, take a closer look at the human history of Florence 600 years ago. You can also take a photo with the oil painting to leave a wonderful memorial on your journey through Italy.",
            parent:'AR Arts',
            video:'dhds'
          },
          {
            title:'AR Concert',
            img:img8,
            text:'Listen to the sound of Italian music treasures, and interact with the three major music master AR duet, feel the deep...',
            detailText:"Italy is a country full of artistic atmosphere, with a profound cultural heritage and countless outstanding art schools and masters. Among them, the three major music schools of the Renaissance play an important role in the history of European music. The AR Concert will bring you a wonderful experience of Italian music, allowing you to feel the indelible traces of the Renaissance and the strong artistic atmosphere of Italian classical music. The AR concert experience event will fully present the three-classic music of the Netherlands Music School, Roman Music School and Venetian Music School. As long as you interact with AR through your mobile phone, you can watch the live performance of the orchestra, and you can also see the introduction information of the music. What's more, you can also be in the orchestra and be a decent musician.",
            parent:'AR Arts',
            video:'sds'
          },
          {
            title:'AR Pop Art',
            img:img9,
            text:'The exhibition is presented in a combination of AR technology and scene construction, aiming to create a leaping time…',
            detailText:"Pop is a simplified colloquial word for lollypop (lollypop, lolly is tongue, pop is smear), dating back to the eighteenth century. Pop art began in the mid to late 1950s. The definition of this word is: popular, young, witty, spoof, and commercial. This exhibition is presented in a combination of AR technology and scene construction, with the purpose of creating an art exhibition that crosses the boundaries of time and region with the concept of unbounded space. In this space that spans time and region, the traditional sacred images in art history (the images from the Renaissance to the Romantic period) collide with popular cultural images in contemporary pop art. In such an era when art is going to the general public, and it is also an era when everyone can become an artist, we need to re-discuss what the original essence of art is when facing art.",
            parent:'AR Arts',
            video:'bpys'
          }
        ]},
        {text:'AR Games',
        isCheck:false,
        children:[
          {
            title:'AR Multiplayer Competitive Games',
            img:img10,
            text:'Create a multiplayer interactive game area in an unused space that allows...',
            detailText:"AR Multiplayer Competitive game is a virtual augmented reality technology competitive game that emits waves from a head-mounted display and a sensing device on the hand. Through a three-person team, the players can use energy waves to attack opponents, they can also use shields to activate defenses to resist attacks, and they can dodge left and right to avoid opponents' attacks. In 80 seconds, the winner is determined by scoring high and low, and the gameplay is similar to dodge ball.",
            parent:'AR Multiplayer Competitive Games',
            video:'drjs'
          }
        ]},
        {text:'AR Shopping',
        isCheck:false,
        children:[
          {
            title:'AR Virtual Shelf',
            img:img11,
            text:'Using AR technology to identify objects quickly and shows commodity information such as object characteristics, price, evaluation, purchased quantity, etc.',
            detailText:'Through AR technology, the users can select products by adjusting different attributes and contrast effects while browsing products. On the one hand, the users can understand the compatibility with the use environment through attribute adjustment; on the other hand, the effect comparison can help users make purchase decisions. Also, using AR virtual shopping can reduce the anxiety of users. Using AR virtual shopping as a new way to attract users to actively or passively participate in shopping. Therefore, users get preferential privileges to improve the efficiency of placing orders, and platforms and merchants increase passenger flow and popularity, which can not only improve conversion efficiency and drive traffic and conversion rates, but also increase customer stickiness.',
            parent:'AR Shopping',
            video:'arhj'
          }
        ]},
        {text:'VR Entertainment',
        isCheck:false,
        children:[
          {
            title:'Crossing Ferrari',
            img:img12,
            text:'Andrea Through using panoramic VR experience technology, you can instantly travel through fashionable Milan, magnificent Rome and artistic emerald cold...',
            detailText:"While listening to Andrea Bocelli’s love songs and driving a Ferrari to all corners of Italy,this movie scene probably appeared in everyone’s fantasy.This time, we use panoramic VR experience technology,let you instantly travel through fashionable Milan, magnificent Rome and literary emerald,One-stop experience, satisfy all your imagination of Italy!",
            parent:'VR Entertainment',
            video:'fliyfz'
          },
          {
            title:'VR Walking',
            img:img13,
            text:'Put on our VR glasses, 360° to enjoy the authentic Italy, Milan Cathedral, Emmanuel...',
            detailText:"Every time go abroad, people will travel with their families,and they only get a passing glance at the scenery. It is too difficult to slow down the steps and be romantic with the companion.Please wear VR glasses without your heavy luggage this time, enjoy the views of Milan Cathedral,the Arcade of Emmanuele II...Strolling the cultural heritage of a century of glory,enjoy a 360° panoramic view of authentic Italy!What kind of touching story is behind each classic?",
            parent:'VR Walking',
            video:'xz'
          }
        ]}
      ];
      this.dataList=[
        {
          title:'AR Opera',
          img:img2,
          text:'AR takes you into the grand Italian opera, experience the thick of immersive opera , enjoy the spirit...',
          detailText:"Opera originated in Italy. Italians love opera. It's in their blood. Please follow the footsteps of AR Opera House and it can lead you into the grand Italian Opera House, to have a journey of AR opera art spanning 400 years. You can listen to the 6 pinnacle pieces of Pavarotti's brilliant career. You can also enjoy the elegant and flowing ballet dance, which has a special flavor.",
          parent:'AR Entertainment',
          video:'yjsjgjy'
        },
        {
          title:'AR Photographing',
          img:img3,
          text:'Add AR content through AR technology, make the static space become interactive immediately... ',
          detailText:"Through AR technology, you can take photos with opera characters. The opera characters in the lens are not dynamic stickers, you can pose them, change their expression, make a variety of funny pose and expression for them, even stickers, filters, text are allowed to use. Let’s experience it and break the dimensional wall.",
          parent:'AR Entertainment',
          video:'arhy'
        },
        {
          title:'AR Magic Garden',
          img:img4,
          text:'AR presents a mysterious and fantastic baroque garden, integrating Italian romance into modern nature...',
          detailText:"AR Magic Garden brings you to a mysterious and fantastic Italian Baroque garden. The AR elegant garden scene is integrated with the real natural greenery landscape, which perfectly combines modern nature and European classical romance, allowing the comfortable life of Italy to penetrate time and meet in reality. The garden is also designed with a poignant storyline, which is cleverly integrated into every scenery. The garden owner also sends blessings to bring more experience and interest to everyone living in it.",
          parent:'AR Entertainment',
          video:'arhysjyj'
        },
        {
          title:'AR Trevi Fountain',
          img:img5,
          text:'Enjoy the surreal AR Trevi Fountain and make your sincerest wishes to the gurgling fountains...',
          detailText:"The Trevi Fountain of Rome known as the Fountain of Happiness, which is the last Baroque masterpiece in Rome, also known as one of the most famous fountains in the world. It became famous after the movie Roman Holiday became popular all over the world. Previously, the Romans have a beautiful legend. When a person faces the fountain with his back, then takes the coin in his right hand and drops it into the water by the left shoulder. If the person uses one coin with this behavior, it means that he will return to Rome in one day of the future. Besides, using two coins means that he can in love with the people he loves. However, using three coins means the person you hate in your heart will stay away from you. At present, by using AR technology to truly restore the Trevi Fountain, you can enjoy the surreal beauty of the AR Trevi. Make your sincere wishes to the fountain and leave a stamp for your Italy journey.",
          parent:'AR Entertainment',
          video:'xycsjyj'
        },
        {
          title:'AR Magic Piano',
          img:img6,
          text:'The collision between traditional art and AR cutting-edge technology, immerse yourself in the renaissance classic works and...',
          detailText:"AR Magic Piano is a new way to learn and experience piano music. A scene of a virtual pianist playing a song in front of the piano, and we use AR technology to show it in front of our eyes. If you sit in your comfortable living room with our AR Magic Piano, you can enjoy an interactive augmented reality piano concert.",
          parent:'AR Entertainment',
          video:'mhyz'
        }
      ];
    },
    changeWord2(){
      this.tabList=[
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
          },
           {
            title:'生命之树',
            img:img14,
            text:'这座由纯AR效果呈现的生命之树，大空间SLAM技术（即大空间即时定位与地图构建）、虚实感知互动等技术的开发与应用，其精度可以达到厘米级别，能够按照1：1比例为游客带来近乎震撼的观赏感受。',
            detailText:'用户能够通过手机或者现场佩戴AR眼镜，就能够在似真似幻的优托邦世界里游览，从璀璨星河到万里深海，从灵动植物到淘气动物，从陆地森林到浮游岛屿……三维空间之下，所到之处、所见之物，都奇幻无比。',
            parent:'AR娱乐',
            video:'smzs'
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
            text:'每一次出国都是拖家带口、走马观花，想和他携手慢游、浪漫一把可太难了。这次请戴上VR眼镜，轻装上阵，米兰大教堂、埃马努埃莱二世拱廊……，漫步寻迹辉煌百年的文化遗产，360°全景欣赏原汁原味的意大利！每个经典背后，都有着怎样的动人故事？',
            detailText:'每一次出国都是拖家带口、走马观花，想和他携手慢游、浪漫一把可太难了。这次请戴上VR眼镜，轻装上阵，米兰大教堂、埃马努埃莱二世拱廊……，漫步寻迹辉煌百年的文化遗产，360°全景欣赏原汁原味的意大利！每个经典背后，都有着怎样的动人故事？',
            parent:'VR娱乐',
            video:'xz'
          }
        ]}
      ];
      this.dataList=[
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
      ];
    }
  },
  created(){
    if(this.$route.query.typeName){
      this.tabList.forEach(v=>{
        if(v.text==this.$route.query.typeName){
          v.isCheck=true;
          this.dataList = v.children;
          this.productTitle = this.dataList[Math.floor(this.dataList.length/2)].title;
        }else{
          v.isCheck=false;
        }
      });
    }
  },
  mounted(){
    this.newSwiper();
    if(this.lang=='en'){
        this. changeWord();
      }else{
        this. changeWord2();
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
}
</script>
<style>
#productpage .swiper-slide{
  transform: scale(0.8);
  background: url('../assets/product_background_normal.png') center center no-repeat;
  background-size: 100% 100%;
}
#productpage .swiper-slide-active{
  background: url('../assets/product_background_active.png') center center no-repeat;
  background-size: 100% 100%;
}
#productpage .swiper-slide-active,.swiper-slide-duplicate-active{
  transform: scale(1);
}
</style>
<style scoped>
img{
  width: 100%;
  height: 100%;
}
.product-background{
  background: url('../assets/product_background.png') center bottom no-repeat;
  background-size: 100% auto;
  padding-top: 4.9375rem;
  overflow-x: hidden;
}
.product-title{
  font-size: 1.5625rem;
  color: #333333;
  margin-bottom: 1.3125rem;
  font-family: 'PingFang-Bold';
  font-weight: normal;
}
.product-line{
  height: 0.375rem;
  background: url('../assets/middle_line.png') center center no-repeat;
  background-size: auto 100%;
  margin-bottom: 1.3125rem;
}
.product-tab{
  width: 20.625rem;
  height: 4.3125rem;
  margin: 0 auto 0.5rem;
}
.product-tab-text{
  font-size: 0.75rem;
  color: #999999;
  display: inline-block;
  width: 7.4375rem;
  line-height: 1.3125rem;
  font-family: 'PingFang-Medium';
}
.product-tab-active{
  font-size: 0.8125rem;
  color: #333333;
  font-family: 'PingFang-Bold';
}
/* .product-box{
  margin-bottom: 34px;
} */
.product-banner{
  width: 17.5rem;
  /* height: 20.5625rem; */
  padding: 1.0625rem 1.0938rem;
}
.product-banner-img{
  width: 15.3125rem;
  height: 15.3125rem;
}
.product-banner-div{
  padding: 0 1.0625rem;
  width: 15.3125rem;
  height: 5.25rem;
  display:flex;
  align-items: center;
}
.product-banner-text{
  font-family: 'SourceHanSansCN-Regular';
  font-size: 0.75rem;
  color: #666666;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.leftright{
  height:2rem;
}
.leftright-button{
  display: inline-block;
  width: 2rem;
  height:2rem;
  vertical-align: middle;
}
#left-button{
  background:url('../assets/product_left.png') no-repeat;
  background-size:auto 100%;
}
#left-button.light{
  background:url('../assets/product_left_light.png') no-repeat;
  background-size:auto 100%;
}
#right-button{
  background:url('../assets/product_right.png') no-repeat;
  background-size:auto 100%;
}
#right-button.light{
  background:url('../assets/product_right_light.png') no-repeat;
  background-size:auto 100%;
}
.leftright-title{
  display: inline-block;
  font-size: 1rem;
  color: #333333;
  font-family: 'PingFang-Bold';
  width: 9.375rem;
  height: 2rem;
  line-height:2rem;
  vertical-align: middle;
  font-weight: normal;
}

</style>