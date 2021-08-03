<template>
  <div id="app">
    <Xheader v-if="$route.name!='locus'"></Xheader>
    <router-view/>
  </div>
</template>

<script>
import Xheader from './components/Xheader'
export default {
  name: 'App',
  components:{
    Xheader
  }
}
</script>

<style>
#app {
  text-align: center;
  height: 100%;
}
.downButton-xu{
  width: 1.9375rem;
  height: 1.125rem;
  position: fixed;
  bottom: 2.125rem;
  left: 50%;
  z-index: 2000;
  transform: translate(-50%,0);
  cursor: pointer;
  -ms-transform:translate(-50%,0); /* IE 9 */
  -moz-transform:translate(-50%,0); /* Firefox */
  -webkit-transform:translate(-50%,0); /* Safari 和 Chrome */
  -o-transform:translate(-50%,0); /* Opera */
  animation: downButton-xu 3s cubic-bezier(0.5, 0, 0.1, 1) infinite;
  -webkit-animation: downButton-xu 3s cubic-bezier(0.5, 0, 0.1, 1) infinite;
}
.downButton-xu img{
  width: 100%;
  height: 100%;
}
@keyframes downButton-xu {
  %0,
  %100 {
      bottom: 2.125rem;
      opacity: 1;
  }

  50% {
      bottom: 3.125rem;
      opacity: 0.5
  }
}

@-webkit-keyframes downButton-xu {
  %0,
  %100 {
      bottom: 2.125rem;
      opacity: 1;
  }

  50% {
      bottom: 3.125rem;
      opacity: 0.5;
  }
}
</style>
