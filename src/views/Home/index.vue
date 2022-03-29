<template>
  <div id="home">
    <div>
      <el-row :gutter="20">
        <el-col :span="18">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <div style="height:100%;background-color:#6cf">{{ item }}</div>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="6">
          <el-card style="height:300px">
            <template #header>
              <div>公告</div>
            </template>
            12316546
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row :gutter="20">
        <el-col :span="18">
          <el-card>
            <template #header>
              <div>默认分组</div>
            </template>
            <el-link>默认板块1</el-link>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="height:600px">
            <template #header>
              <div>热门内容</div>
            </template>
            12316546
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
#home {
  width: 100%;
  margin: 10px auto;
  
}
</style>