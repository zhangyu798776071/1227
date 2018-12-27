<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input"
          style="width:50%;float:right"
          @keyup.enter.native="addTask"
        ></el-input>
      </div>
      <div class="check">
        <el-checkbox
          v-for="(i,o) in list"
          :key="o"
          class="text item"
          v-model="i.state"
          :class="i.state?'dell':''"
        >
          {{i.task}}
     
  
  <i class="el-icon-error" @click.prevent="delet(o)" ref="dele"></i>

          
        </el-checkbox>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      
      list: [
        {
          state: true,
          task: "Try out the new Eden Tasks",
        },
        {
          state: false,
          task: "Plan weekend outing",
        },
        {
          state: true,
          task: "Publish Friday blog post on Github",
        },
        {
          state: false,
          task: "Conduct user interviews",
        },
        {
          state: false,
          task: "Tips for creating better to-do lists",
        },
        {
          state: false,
          task: "Finish Documentation",
        },
        {
          state: false,
          task: "Create Eden System Better",
        }
      ]
    };
  },
  methods: {
    addTask() {
      this.list.push({
        state: false,
        task: this.input
      });
      this.input = "";
    },
    delet(o){
      this.list.splice(o,1)
    //  console.log(o)
    },
    
  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.item:nth-of-type(1) {
  margin-left: 30px;
}
.check {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.box-card {
  width: 480px;
}
.clearfix {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dell .el-checkbox__label {
  text-decoration: line-through;
}
</style>

