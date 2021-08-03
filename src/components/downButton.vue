<template>
  <div class="downButton-xu">
    <img @click="down" src="../assets/down_button.png">
  </div>
</template>
<script>
export default {
  name:'downButton',
  props:['up'],
  methods:{
    down(){

    }
  }
}
</script>
<style scoped>
.downButton{
  width: 1.9375rem;
  height: 1.125rem;
  position: fixed;
  bottom: 2.125rem;
  left: 50%;
  transform: translate(-50%,0);
  cursor: pointer;
  -ms-transform:translate(-50%,0); /* IE 9 */
  -moz-transform:translate(-50%,0); /* Firefox */
  -webkit-transform:translate(-50%,0); /* Safari 和 Chrome */
  -o-transform:translate(-50%,0); /* Opera */
}
.downButton img{
  width: 100%;
  height: 100%;
}
</style>