<template>
  <div class="register-father">
    <el-card class="register"
    >
      <template #header>
        <div style="width: 100%;text-align: center;">
          <b>注册</b>
        </div>
      </template>
      <el-form
        ref="registerFormRef"
        :model="registerForm"
        status-icon
        :rules="rules"
        label-position="top"
      >
        <el-form-item label="用户名">
          <el-input v-model="registerForm.username" :clearable="true"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="registerForm.password" type="password" :clearable="true"></el-input>
        </el-form-item>
        <el-form-item label="再次输入密码">
          <el-input v-model="registerForm.passwordCheck" type="password" :clearable="true"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="registerForm.email"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-row :gutter="20" style="width: 100%;">
            <el-col :span="18">
              <el-input v-model="registerForm.captcha" placeholder="验证码"></el-input>
            </el-col>
            <el-col :span="6">
              <div>验证码</div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="registerForm.license" size="large"></el-checkbox>&nbsp;&nbsp;同意<el-link type="primary" style="line-height: 19px;height: 19px;">用户协议</el-link>(虽然现在并没有什么协议)
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;" type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script setup lang="ts">import { reactive } from 'vue';


  //------------响应式变量----------------
  
  // 表单内容
  const registerForm = reactive({
    username: "",
    password: "",
    passwordCheck: "",
    email: "",
    license: false,
    captcha: "",
  })
  const rules = reactive({
    username: {
      required: true,
      message: '请输入用户名',
    }
  })



  //----------自定义校验规则--------------


</script>
<style scoped>
.register-father{
  width: 100%;
  height: 800px;
  display: flex;
}
.register{
  margin: auto;
  width: 500px;
}
</style>