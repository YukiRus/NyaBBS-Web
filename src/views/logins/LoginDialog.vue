<template>
  <el-dialog
    v-model="isOpen"
    width="400px"
    top="25vh"
  >
    <template v-slot:title>
      <el-menu
        :default-active="'pwd'"
        mode="horizontal"
      >
        <el-menu-item index="pwd">
          密码登录
        </el-menu-item>
      </el-menu>
    </template>
    <div id="loginDialog">
      <el-form>
        <el-form-item>
          <el-input v-model="loginParam.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginParam.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-row :gutter="20" style="width: 100%;">
            <el-col :span="18">
              <el-input v-model="loginParam.password" placeholder="验证码"></el-input>
            </el-col>
            <el-col :span="6">
              <div>验证码</div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="license" size="large"></el-checkbox>&nbsp;&nbsp;同意<el-link type="primary" style="line-height: 19px;height: 19px;">用户协议</el-link>(虽然现在并没有什么协议)
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%;" :disabled="!license">登录</el-button>
        </el-form-item>
        <el-form-item style="margin: 0;">
          <div style="width: 100%;">
            <div style="float:left;">
              <el-link type="info">忘记密码？</el-link>
            </div>
            <div style="float:right;">
              <el-link type="info">立即注册</el-link>
            </div>
          </div>

        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>
<script setup lang="ts">

import { watch, ref,  toRefs } from 'vue';
//--------------定义的响应式变量--------------
let license = ref(false) // 是否同意协议



interface Props {
    modelValue: boolean
}
const props = withDefaults(defineProps<Props>(), {
    modelValue: false
})  

let emits = defineEmits([
  "update:modelValue"
])
let isOpen = ref(props.modelValue)
watch(()=>props.modelValue,(newValue)=>{
  isOpen.value = newValue
})
watch(isOpen,(newValue)=>{
    console.log(newValue)
    emits("update:modelValue",newValue)
})

let loginParam = {
  username: "",
  password: ""
}
</script>
<style scoped>
#loginDialog{
  width: 100%;
}
.el-menu-item{
  height: 40px !important;
}
</style>