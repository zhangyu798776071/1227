<template>
    <div>
            <el-tooltip :content="'Switch value: ' + value5" placement="top">
  <el-switch
    v-model="value5"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-value="100"
    inactive-value="0">
  </el-switch>
</el-tooltip>

<slot></slot>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        value5: '100'
      }
    }
  };
</script>