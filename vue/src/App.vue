<template>
  <div class="all-container" style="height:100%">
    <!-- <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#000"
        active-text-color="#ffd04b"
        style="margin-bottom:30px;border:0;display:flex;justify-content:space-around; box-sizing: border-box"
        >
        <el-menu-item index="/"><router-link to='/'>首页</router-link></el-menu-item>
        <el-submenu index="2">
          <template slot="title">衣物</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="/second" ><router-link to='/second'>商品</router-link></el-menu-item>
        <el-menu-item index="/third" ><router-link to='/third'>电子商务</router-link></el-menu-item>
        <el-menu-item index="" >家具</el-menu-item>
        <el-menu-item index="/five" ><router-link to='/five'>儿童</router-link></el-menu-item>
       <el-menu-item index="/first"><router-link to='/first'>我的</router-link></el-menu-item>
    </el-menu> -->
   
    <router-view></router-view>
    
  </div>
</template>

<script>

//引入组件
export default {
  name: "app",

  data() {
    return {
          
    };
  },

  methods: {
   
    
  },

  components: {},
 
  //注册组件
};
</script>
<style>
.el-container {
  color: #000;
}
.el-header {
 background-color: #fff;

  line-height: 60px;
}

.el-aside {
  background-color:rgb(84, 92, 100);
  text-align: center;
}
.el-main {
  background-color: #eee;
  color: #000;
}
.el-col1 {
  font-size: 20px;
  margin-left: 30px;
}
.el-footer {
 color: #000
}
a{
  text-decoration: none;
  color: #BFEFFF
}
</style>






