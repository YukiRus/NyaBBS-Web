<template>
    <div class="centers" id="head-div">
    <div id="head-logo">
      <img :src="logo" alt="NyaBBS" height="40" style="margin: 5px 0;">
    </div>
    <div id="head-nav">
      <navmenu></navmenu>
    </div>
    <div id="head-user">
      <user></user>
    </div>
  </div>
</template>
<script setup lang="ts">
import logo from '../../../assets/img/logo.png'
import navmenu from './navmenu/index.vue'
import user from './user/index.vue'
</script>
<style>
.bg{
  width: 100%;
}
.centers{
  width: 1000px;
  position: relative;
  left: 50%;
  margin-left: -500px;
}


header{
  height: 50px;
  border-bottom: 1px solid #e6e6e6;
}
#head-div{
  width: 1200px;
  margin-left: -600px;
  display: flex;
  height: 100%;
}

#head-logo,#head-nav,#head-user{
  height: 50px;
}

#head-logo{
  width:150px;
}
#head-nav{
  width: 900px;
}
#head-user{
  width: 150px;
}



</style>