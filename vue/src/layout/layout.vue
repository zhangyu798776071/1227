<template>
  <div>
    <el-container>
      <el-header style="display:flex;align-items:center">
        <span style="width:200px;" class="nameeee">后台管理系统</span>
        <div style="display:flex;justify-content: space-between;flex:1;align-items:center">
          <el-breadcrumb>
            <el-breadcrumb-item
              v-for="(item, index) in list"
              v-if="item.meta.title"
              :key="item.path"
            >
              <span
                v-if="item.meta.title!== 'home' || index === item.length - 1"
              >{{choose(item.meta.title)}}</span>
              <router-link v-else :to="item.path">{{choose(item.meta.title)}}</router-link>
            </el-breadcrumb-item>
          </el-breadcrumb>
          <a href="###" style="font-weight:bold">登录</a>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" id="aside">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            model="vertical"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
            theme="dark"
            router
          >
            <el-menu-item index="/home">
              <i class="el-icon-location"></i>
              <span slot="title">首页</span>

              <!-- <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>-->
              <!-- <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>-->
            </el-menu-item>
            <el-menu-item index="/first">
              <i class="el-icon-menu"></i>
              <span>新闻</span>
            </el-menu-item>
            <el-menu-item index="/second">
              <i class="el-icon-document"></i>
              <span>数据</span>
            </el-menu-item>
            <el-menu-item index="/third">
              <i class="el-icon-setting"></i>
              <span>功能</span>
            </el-menu-item>
            <el-menu-item index="/five">
              <i class="el-icon-setting"></i>
              <span>图文</span>
            </el-menu-item>
            <el-menu-item index="/four">
              <i class="el-icon-setting"></i>
              <span>运动</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <div
              style="background:#fff;height:50px;line-height:50px;padding-left:30px;margin-bottom:20px"
            >
              <el-tag
                :closable="true"
                color="white"
                v-for="(item,index) in visitedViews"
                :key="index"
                :class="item.name===dataName?'tag-active':''"
                @close="closeTag($event,item,index)"
                @click.native="jumpTo(item)"
              >{{ choose(item.name)}}</el-tag>
            </div>

            <transition>
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </transition>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clientHeight: "",
      list: "",
      numbers: 1,
      dataHttp: [],
      dataName: "",
     
    };
  },
  computed: {
    visitedViews() {
      //console.log(this.$store.state.visitedViews)
      return this.$store.state.visitedViews;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      //     this.activeIndex2=key
      // console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    pathRoute() {
      let matched = this.$route.matched;
      if (matched[1] && matched[1].name != "home") {
        matched = [{ path: "/home", meta: { title: "home" } }].concat(
          matched[1]
        );
      }
      this.list = matched;
      // this.list.forEach(e => {
      //   console.log(e.meta.title);
      // });
    },
    choose(str) {
      switch (str) {
        case "home":
          // console.log('首页')
          return "首页";
          break;
        case "first":
          // console.log('新闻')
          return "新闻";
          break;
        case "second":
          // console.log('数据')
          return "数据";
          break;
        case "third":
          // console.log('功能')
          return "功能";
          break;
          case "four":
          // console.log('运动')
          return "运动";
          break;
        case "five":
          // console.log('图文')
          return "图文";
          break;
      }
    },
    addRoute() {
      const route = this.$route;
      // console.log(route)
      if (!route.name) {
        return false;
      }
     
      this.dataName = route.name;
      this.$store.dispatch("addVisitedTag", route);
    },
    async closeTag(event, item, index) {
      const removeRoute = await this.$store.dispatch("removeVisitedTag", item);
      if (this.checkRoute(item)) {
        const nextItem = removeRoute.slice(index)[0];
        const preItem = removeRoute.slice(index-1)[0];
        if (nextItem) {
          this.$router.push(nextItem)
          this.dataName==nextItem.name
        }else if (preItem) {
          this.$router.push(preItem)
          this.dataName==preItem.name
        }else{
           this.$router.push('/home')
           this.dataName='home'
        }
      }
    },
    checkRoute(item) {
      return item.name === this.$route.name || item.path === this.$store.path;
    },
    jumpTo(path){
      this.$router.push(path.path)
    }
  },
  mounted() {
    let that = this;
    that.clientHeight = document.documentElement.clientHeight;
    // console.log("ddddd:" + that.clientHeight);
    document.getElementById("aside").style.height =
      that.clientHeight - 60 + "px";
    this.addRoute();
  },
  created() {
    this.pathRoute();
  },
  watch: {
    $route() {
      this.pathRoute();
      this.addRoute();
    }
  }
};
</script>
<style>
.nameeee {
  font-weight: bold;
}
.tag-active {
  background-color: aquamarine !important;
}
.el-tag {
  margin-right: 10px;
  cursor: pointer
}
.el-main{
  position: relative;
}
</style>
