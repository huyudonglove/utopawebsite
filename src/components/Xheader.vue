<template>
  <div>
    <div id="headCover" v-if="isShowNav" @click="isShowNav=false"></div>
    <header>
      <nav id="nav" style="touch-action:none;">
        <router-link class="navbar-brand" to="/" href="javascript:;" @click.native="isShowNav=false">UtopaXR</router-link>
        <!-- <span class="navbar-brandCopy" v-if="lang=='en'" @click="switchLang('cn')">中</span>
        <span class="navbar-brandCopy" v-if="lang=='cn'" @click="switchLang('en')">EN</span> -->
        <span id="showNav" class="navbar-icon" :class="{'navbar-icon-active':isShowNav}" @click="showNav"></span>
        <div class="collapse navbar-collapse" v-if="isShowNav" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/" href="javascript:;" @click.native="isShowNav=false">{{$t('message.title1')}}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/productscase" href="javascript:void(0);" @click.native="isShowNav=false">{{$t('message.title2')}}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/LocusAR" href="javascript:void(0);" @click.native="isShowNav=false">{{$t('message.title3')}}</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/aboutus" href="javascript:void(0);" @click.native="isShowNav=false">{{$t('message.title4')}}</router-link>
            </li>
          </ul>
        </div>
      </nav>
    <!-- nav end-->
    </header>
  </div>
</template>
<script>
export default {
  name:'Xheader',
  data(){
    return{
      isShowNav:false,
      lang:'cn'
    }
  },
  computed:{
    // height(){
    //   return document.body.clientheight
    // }
  },
  watch:{
    isShowNav(val){
      this.$store.commit('Xheader/setIsShowHeader', val);
    }
  },
  methods:{
    showNav(){
      this.isShowNav=!this.isShowNav;
    },
    switchLang(t){
        this.$i18n.locale = t;
        this.lang=t;
        this.$store.commit('lang/setLang',t);
    }
  },
  created(){
    this.switchLang('cn');
  }
}
</script>
<style scoped>
#nav{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  height: 2.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* padding:0.875rem 0; */
  box-sizing: border-box;
  background-color:#fff;
}
.navbar-brand{
  font-size: 1.5625rem;
  line-height: 2.75rem;
  color: #333333;
  padding-left: 0.9375rem;
  font-family: 'PingFang-Heavy';

}
.navbar-brandCopy{
  font-size: 1.125rem;
  line-height: 2.75rem;
  color: #333333;
  padding-left: 0.9375rem;
  font-family: 'PingFang-Heavy';
  margin-left: 7.5rem;
}
.navbar-icon{
  display: inline-block;
  width: 2.25rem;
  height: 2.75rem;
  background: url(../assets/top_nav_grey.png) center center no-repeat;
  background-size:100%;
  cursor: pointer;
  margin-right: 0.9375rem;
}
.navbar-icon-active{
  background: url(../assets/top_nav.png) center center no-repeat;
  background-size:100%;
}
.collapse{
  background-color:#fff;
  border-bottom-left-radius:1.25rem;
  border-bottom-right-radius:1.25rem;
}
.navbar-collapse {
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-align: center;
  align-items: center;
}
.nav-item {
  margin: 0px 0.5rem;
  text-align: center;
  font-size: 0.9375rem;
  line-height: 3.125rem;
  color: #666666;
  font-family: 'PingFang-Bold';
}
#headCover{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 900;
  background-color: #666666;
  opacity: 0.7;
}
</style>