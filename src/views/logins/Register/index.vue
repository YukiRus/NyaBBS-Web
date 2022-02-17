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
        <el-form-item label="用户名" prop="username">
          <el-input v-model="registerForm.username" :clearable="true"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="registerForm.password" type="password" :clearable="true" :show-password="true"></el-input>
        </el-form-item>
        <el-form-item label="再次输入密码" prop="passwordCheck">
          <el-input v-model="registerForm.passwordCheck" type="password" :clearable="true" :show-password="true"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="registerForm.email"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <el-row :gutter="20" style="width: 100%;">
            <el-col :span="18">
              <el-input v-model="registerForm.captcha" placeholder="验证码"></el-input>
            </el-col>
            <el-col :span="6">
              <div>验证码</div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="license">
          <el-checkbox v-model="registerForm.license" size="large"></el-checkbox>&nbsp;&nbsp;同意<el-link type="primary" style="line-height: 19px;height: 19px;">用户协议</el-link>(虽然现在并没有什么协议)
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;" type="primary" @click="submitForm(registerFormRef)">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
type FormInstance = InstanceType<typeof ElForm>

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
  const registerFormRef = ref<FormInstance>()



  //----------校验规则--------------

  // 由服务器校验后返回的异常项的值
  const errorValue = {
    username: null,
    password: null,
    email: null,
    captcha: null
  }
  // 服务器返回的错误信息
  let serviceErrorMsg = "";

  /**
   * 用户名的自定义验证
   * @param rule 
   * @param value 
   * @param callback 
   */
  const usernameValidator = (rule: any, value: any, callback: any) => {
    if(errorValue.username == registerForm.username){
      callback(new Error(serviceErrorMsg))
    }
    else{
      callback()
    }
  }
  /**
   * 密码自定义验证
   * @param rule 
   * @param value 
   * @param callback 
   */
  const passwordValidator = (rule: any, value: any, callback: any) =>{
    // 正则表达式 数字大小写特殊字符4选2
    let patt = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![\W_]+$)[a-zA-Z0-9\W_]{1,16}$/
    if(patt.test(value)){
      // 如果匹配成功
      callback()
    }
    else
    {
      callback(new Error("密码应由数字、大写字母、小写字母及特殊字符中选取两种组成"))
    }
  }
  /**
   * 确认密码验证
   * @param rule 
   * @param value 
   * @param callback 
   */
  const passwordCheckValidator = (rule: any, value: any, callback: any)=>{
    if(value == registerForm.password){
      callback()
    }
    else{
      callback(new Error("两次输入的密码不一致"))
    }
  }
  /**
   * 邮箱格式验证
   * @param rule 
   * @param value 
   * @param callback 
   */
  const emailCheckValidator = (rule: any, value: any, callback: any)=>{
    let patt = /^[0-9a-zA-Z_-]+@[0-9a-zA-Z_-]+\.[0-9a-zA-Z_-]{2,}$/
    if(patt.test(value)){
      // 如果匹配成功
      callback()
    }
    else
    {
      callback(new Error("邮箱格式错误"))
    }
  }
  const captchaValidator = (rule: any, value: any, callback: any)=>{
    callback()
  }

  const licenseValidator = (rule: any, value: any, callback: any)=>{
    if(value){
      callback()
    }
    else
    {
      callback(new Error("请同意用户协议"))
    }
  }

  const rules = reactive({
    username: [
      {
        whitespace:true,
        required: true,
        message: '用户名不能为空',
        trigger: 'blur'
      },
      {
        min: 4,
        max: 16,
        message: '用户名长度应为4-16位',
        trigger: 'blur',
      },
      {
        validator: usernameValidator,
        trigger: 'blur'
      }
    ],
    password: [
      {
        whitespace:true,
        required: true,
        message: '密码不能为空',
        trigger: 'blur'
      },
      {
        min: 8,
        max: 16,
        message: '密码长度应为8-16位',
        trigger: 'blur',
      },
      {
        validator: passwordValidator,
        trigger: 'blur'
      }
    ],
    passwordCheck:[
      {
        whitespace:true,
        required: true,
        message: '请再次输入密码',
        trigger: 'blur'
      },
      {
        validator: passwordCheckValidator,
        trigger: 'change'
      }
    ],
    email: [
      {
        whitespace:true,
        required: true,
        message: '邮箱不能为空',
        trigger: 'blur'
      },
      {
        validator: emailCheckValidator,
        trigger: 'blur'
      }
    ],
    captcha: [
      {
        whitespace:true,
        required: true,
        message: "验证码不能为空",
        trigger: 'blur'
      },
      {
        len: 4,
        message: "验证码错误",
        trigger: 'blur'
      },
      {
        validator: captchaValidator,
        trigger: 'blur'
      }
    ],
    license:{
      validator: licenseValidator
    }
  })

  
  
  //---------相关函数------------
  /**
   * 验证表单并提交数据
   * @param formEl 
   */
  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if(valid){

      }
      else{
        ElMessage({
          showClose: true,
          message: '请正确填写注册信息',
          type: 'error'
        })
      }
    })
  }

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