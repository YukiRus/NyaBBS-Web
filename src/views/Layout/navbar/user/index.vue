<template>
  <div id="nav-user" @click="openLogin">
    <div id="nav-profile">
      <el-badge :value="1" :max="99">
        <el-avatar :size="40" :src="head_cat" id="profile"></el-avatar>
      </el-badge>
    </div>
    <div id="nav-username">
      请登录
    </div>
  </div>
  <login-dialog v-model="openLoginDialog"></login-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import head_cat from '../../../../assets/img/head_cat.png'
import LoginDialog from '../../../logins/LoginDialog.vue';

let openLoginDialog = ref(false);
function openLogin(){
  console.log(openLoginDialog.value)
  openLoginDialog.value=true
  console.log(openLoginDialog.value)
}
</script>
<style>
#nav-profile{
  float: right;
}
#profile{
  background: #efefef;
  border: 2px solid #aaa;
  margin: 5px 0;
}
.el-badge__content{
  top: 10px !important;
  right: calc(-2px + var(--el-badge-size)) !important;
}
#nav-username{
  float:right;
  line-height: 50px;
  margin-right: 10px;
  color: #303133;
  font-size: 14px;
}
#nav-user{
  width: max-content;
  height: 100%;
  padding: 0 10px;
}
#nav-user:hover{
  background-color: #ecf5ff;
  cursor: pointer;
}

</style>