<script setup lang="ts">
import { ref, onMounted } from 'vue'

onMounted(() => {})
</script>

<template>
  <pre class="text-nowrap text-20 text-wrap text-balance break-all">1234</pre>
  <div class="p-20">
    <el-row class="mb-20">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <el-row class="mb-20">
      <el-button disabled>Default</el-button>
      <el-button disabled type="primary">Primary</el-button>
      <el-button disabled type="success">Success</el-button>
      <el-button disabled type="info">Info</el-button>
      <el-button disabled type="warning">Warning</el-button>
      <el-button disabled type="danger">Danger</el-button>
    </el-row>

    <el-row class="mb-20">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <el-row class="mb-20">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.parent {
  overflow-x: auto;
  white-space: nowrap;
  display: inline-block;
  .child-wrap {
    display: inline-block;
  }
  .child {
    display: inline-block;
    padding: 10px;
  }
}
.el-row + .el-row {
  margin-top: 20px;
}
.svg-icon {
  font-size: 16px;
  color: red;
}
</style>
