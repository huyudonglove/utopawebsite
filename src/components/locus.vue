<template>
    <div>
       <div id="x_app" class="loginAR">
        <div class="textImg"></div>
        <div class="h-login">
        <div class="textImg_phone"></div>
        <div class="h-title"> 
          <!-- <img src="../assets/title.png" style="margin-top:10px;margin-left:90px">  -->
        </div>
        <div class="h-head div1">空间地图带来全新体验</div>
        <div class="x-userDiv div1">
            <i class="h-i"></i>
            <input type="text" placeholder="输入您的用户名或者手机号" v-model="loginName" >
        </div>
        <div class="x-pwsDiv div1">
             <i class='h-p'></i>
            <input type="password" placeholder="输入您的密码" v-model="password">
        </div>
        <div class="btnDiv div1">
            <div class="x-button" @click="login()">登录</div>
        </div>
        </div>
    </div>
   </div>
</template>
<script>
export default {
    name:'locus',
    data(){
        return{
            loginName:'',
            password:''        
        }
    },
    methods:{
        login(){
            this.$message.error(
                {
                message: '用户名或者密码不正确',
                type: 'error',
                center:true,
                duration:1000,
                offset:100
                }
            )
        }
    }
}
</script>
<style scoped>
.h-i{
  position: absolute;
  left:20px;
  background: url('../assets/people.png') no-repeat center;
  width: 50px;
  height:50px;
  margin-top: 5px;
  background-size:40% ;
}
.h-p{
  position: absolute;
  left:20px;
  background: url('../assets/pass.png') no-repeat center;
  width: 50px;
  height:50px;
  margin-top: 5px;
  background-size:40% ;
}
.h-title{
 background: url('../assets/title.png') no-repeat center;
 background-size: 50%;
 width: 100%;
 height:30px;
 margin-top: 21px;
}

.loginAR{
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../assets/loginAR_bg_phone.png') no-repeat center;
  background-size: 100% auto;
}
.loginAR .textImg{
  position: absolute;
}
.loginAR .textImg_phone{
  position: absolute;
}
.loginAR .h-login{
  position: absolute;
  background: rgba(250,250,250,0.25);
  box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  border-radius:10px;
}
.loginAR .h-login>div.div1{
  height: 60px;
  line-height: 60px;
}
.loginAR .h-login div.h-head{
  text-align: center;
  font-weight: bold;
  /* background: url("img/login_border.png") repeat-x center  bottom; */
  height:50px;
  line-height: 50px;
  font-size:18px;
  color:#fff;
}
.loginAR .x-button{
  width: 100%;
  height:50px;
  line-height: 50px;
  background:rgb(49,157,230);
  color: white;
  text-align: center;
  font-weight: bold;
  border-radius:10px;
  font-size: 18px;
  border:0px none;
  cursor: pointer;
  margin-top: 15px;
}

.loginAR input[type="text"]{
  box-sizing: border-box;
  width:100%;
  height: 40px;
  border: 0;
  outline: none;

  line-height: 24px;
  font-size: 14px;
  color: #fff;
  border-radius:6px;
  padding-left: 50px;
   background:rgba(250,250,250,0.3);
  /* margin-left: 15px; */
}
.loginAR input[type="password"]{
  box-sizing: border-box;
  width:100%;
  height: 40px;
  border: 0;
  outline: none;

  line-height: 24px;
  font-size: 14px;
  color: #ffffff;
  border-radius:6px;
  padding-left: 50px;
  background:rgba(250,250,250,0.3);
  /* margin-left: 15px; */
}
.loginAR ::-webkit-input-placeholder{
    color: #DFDCDC
} /* 使用webkit内核的浏览器 */
.loginAR :-moz-placeholder{  color: #DFDCDC} /* Firefox版本4-18 */
.loginAR ::-moz-placeholder{ color: #DFDCDC} /* Firefox版本19+ */
.loginAR :-ms-input-placeholder{ color: #DFDCDC}
.loginAR .h-user{
  /* background: url("../../assets/login_icon_user.png") no-repeat center; */
  background-size: 80%;
  display: inline-block;
  width: 17px;
  height: 20px;
  position:relative;
  top: 6px;
  left: 40px;

}
.loginAR .h-pass{
  /* background: url("../../assets/login_icon_pw.png") no-repeat center; */
  background-size: 80%;
  display: inline-block;
  width: 17px;
  height: 20px;
  position:relative;
  top: 6px;
  left: 40px;
}
.loginAR .h-login>div.btnDiv{
  clear: both;
  text-align: center;
  height: 80px;
  line-height: 80px;
}
@media screen and (min-width:480px){
  .loginAR{
    min-height: 600px;
    background-size:100% 100%;
  }
  .loginAR .textImg{
    display: block;
    left: 10%;
    top: 40%;
    transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    -o-transform: translate(0,-50%);
    width: 25%;
    height: 40%;
    background-size: 100% auto;
  }
  .loginAR .textImg_phone{
    display: none;
  }
  .loginAR .h-login{
    box-sizing: border-box;
    width: 30%;
    min-width: 480px;
    padding:0px 50px 60px 50px;
    right: 10%;
    top: 50%;
    transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    -o-transform: translate(0,-50%);
  }
  .loginAR .h-login>div.div1{
    height: 60px;
    line-height: 60px;
  }
  .loginAR .h-login div.h-head{
    text-align: center;
    font-weight: bold;
    height:136px;
    line-height: 136px;
    font-size:36px;
    color:#111111;
    margin-bottom: 40px;
  }
  .loginAR .h-login .x-userDiv{
    margin-bottom: 20px;
  }
  .loginAR .h-login .x-pwsDiv{
    margin-bottom: 45px;
  }
  .loginAR .x-button{
    width: 100%;
    height:50px;
    line-height: 50px;
    background: #0074E4;
    color: white;
    text-align: center;
    font-weight: bold;
    border-radius:8px;
    font-size: 20px;
    border:0px none;
    cursor: pointer;
  }

  .loginAR input[type="text"]{
    box-sizing: border-box;
    width:100%;
    height: 50px;
    border: 0;
    outline: none;
  
    line-height: 24px;
    font-size: 14px;
    color: #B8B8B8;
    border-radius:6px;
    padding-left: 18px;
    background:rgba(250,250,250,0.3);
    /* margin-left: 15px; */
  }
  .loginAR input[type="password"]{
    box-sizing: border-box;
    width:100%;
    height: 50px;
    border: 0;
    outline: none;
    
    line-height: 24px;
    font-size: 14px;
    color: #B8B8B8;
    border-radius:6px;
    padding-left: 18px;
    background:rgba(250,250,250,0.3);
    /* margin-left: 15px; */
  }
  .loginAR ::-webkit-input-placeholder{
      color: #DFDCDC
  } /* 使用webkit内核的浏览器 */
  .loginAR :-moz-placeholder{  color: #DFDCDC} /* Firefox版本4-18 */
  .loginAR ::-moz-placeholder{ color: #DFDCDC} /* Firefox版本19+ */
  .loginAR :-ms-input-placeholder{ color: #DFDCDC}
  .loginAR .h-user{
    /* background: url("../../assets/login_icon_user.png") no-repeat center; */
    background-size: 80%;
    display: inline-block;
    width: 17px;
    height: 20px;
    position:relative;
    top: 6px;
    left: 40px;

  }
  .loginAR .h-pass{
    /* background: url("../../assets/login_icon_pw.png") no-repeat center; */
    background-size: 80%;
    display: inline-block;
    width: 17px;
    height: 20px;
    position:relative;
    top: 6px;
    left: 40px;
  }
  .loginAR .h-login>div.btnDiv{
    clear: both;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
}
@media only screen and (min-width:1200px){
  .loginAR{
    min-width: 1200px;
  }
  /* .loginAR .h-login{
    min-width: 300px;
    max-width: 560px;
  } */
}
@media only screen and (min-width: 960px) and (max-width: 1199px) {
  .loginAR{
    min-width: 1199px;
  }
  /* .loginAR .h-login{
    min-width: 300px;
  } */
}
@media only screen and (min-width: 768px) and (max-width: 959px) {
  .loginAR{
    min-width: 959px;
  }
  /* .loginAR .h-login{
    min-width: 300px;
  } */
}
@media only screen and (min-width: 480px) and (max-width: 767px){
  .loginAR{
    min-width: 767px;
  }
  /* .loginAR .h-login{
    min-width: 300px;
  } */
} 
@media only screen and (max-width: 479px) {
  .loginAR{
    /* background: url("asserts/loginAR_bg_phone.jpg") no-repeat center  center; */
    background-size:100% 100%;
  }
  .loginAR .h-login{
    width: 81%;
    padding:0px 5% 2% 5%;
    left: 50%;
    top: 48%;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
  }
  .loginAR .textImg{
    display: none;
  }
  .loginAR .textImg_phone{
    display: block;
    left: 50%;
    top: -10px;
    transform: translate(-50%,-100%);
    -ms-transform: translate(-50%,-100%);
    -moz-transform: translate(-50%,-100%);
    -webkit-transform: translate(-50%,-100%);
    -o-transform: translate(-50%,-100%);
    width: 70%;
    height: 30%;
    /* background: url("assets/loginAR_bg_phone.jpg") no-repeat center  center; */
    background-size: 100% auto;
  }
}
input::-webkit-input-placeholder{
            color:#fff;
        }
        input::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color:#fff;
        }
        input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color:#fff;
        }
        input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color:#fff;
        }
</style>