<template>
  <el-dialog
    v-model="isOpen"
    width="350px"
  >
    <div id="loginDialog">
      <el-form>
        <el-form-item>
          <el-input v-model="loginParam.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginParam.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>
<script setup lang="ts">

import { watch, ref, defineProps, toRefs } from 'vue';

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
  height: 350px;
}
</style>