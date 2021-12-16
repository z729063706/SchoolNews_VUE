<template>
  <div class="logo">
    <router-link to="/"><img src="/image/Aulin.png" alt /></router-link>
    <div class="nav">
      <el-menu 
        :default-active="activeIndex" 
        class="el-menu-nav" 
        mode="horizontal" 
        @select="handleSelect">
        <router-link to="/" class="link"><el-menu-item index="1">网站首页</el-menu-item></router-link>
        <el-submenu index="2">
          <template slot="title" class="menu-group">奥林要闻</template>
          <router-link to="/" class="link"><el-menu-item index="2-1">教学教务</el-menu-item></router-link>
          <router-link to="/" class="link"><el-menu-item index="2-2">通知公告</el-menu-item></router-link>
          <router-link to="/" class="link"><el-menu-item index="2-3">战果捷报</el-menu-item></router-link>
        </el-submenu>
        <router-link to="/" class="link"><el-menu-item index="3" >教师风采</el-menu-item></router-link>
        <router-link to="/admin" class="link"><el-menu-item index="4">后台管理</el-menu-item></router-link>
      </el-menu>
    </div>
    <div class="texts">
      <div class="text text2">质 量 为 本  创 新 为 道</div>
      <div class="text text1">全 球 视 野  追 求 卓 越</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      msg: "Hello Vue",
      activeIndex: "1"
    };
  },

  computed: {},
  watch: {},
  methods: {
    handleSelect(index, indexPath){
      this.activeIndex = index;
      //console.log("index",index[0],"  path",indexPath);
      if (index[0] == 2) {
        document.getElementsByClassName("newsShow")[0].scrollIntoView({ behavior: 'smooth' });
      }
      if (index == 3) {
        document.getElementsByClassName("teacher")[0].scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
};
</script>
<style scoped>

.logo {
  width: 100%;
  height: 85px;
  /*margin: 20px auto;*/
  padding: 20px 0;
  background: #18267d;
}
.logo img {
  margin-left: 12%;
  width: auto;
  height: 90px;
  float: left;
}
.logo .texts {
  position: relative;
}
@keyframes textsAnimation {
   from{
      width: 0;
   }
   to{
      width: 200px;
   }
}
.logo .text {
  position: absolute;
  right: 0;
  color: #ededed;
  font-weight: 700;
  float: right;
  margin-right: 20%;
  font-size: 30px;
}

.logo .text1 {
  animation: textAnimation1 3s infinite;
}
.logo .text2 {
  animation: textAnimation2 3s infinite;
  
}
.el-menu-nav{
  display: flex;
}
.link{
  text-decoration:none;
}
.nav{
  position: absolute;
  height: 10px;
  width: 670px;
  right: 0;
}
.el-menu{
  background-color:#18267d;
  width: 550px;
  right: 0;
  top: 50px;
  height: 55px;
  menu-trigger : hover;
}
.el-menu-item{
  font-size: 20px;
  min-width: 120px!important;
  color: rgb(255, 255, 255);
}

@keyframes textAnimation1 {
  from {
    opacity: 1;
    /* display: block; */
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
    /* display: none */
  }
}
@keyframes textAnimation2 {
  from {
    opacity: 0;
    /* display: block; */
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0;
    /* display: none */
  }
}
</style>

<style>
    .el-menu--horizontal>.el-submenu .el-submenu__title {
        height: 60px;
        line-height: 55px;
        border-bottom: 2px solid transparent;
        font-size: 20px;
        color: #ededed;
    }
    .el-menu-item.is-active {
      background-color: #247bb4 !important;
    }
    .el-submenu.is-active {
      background-color: #247bb4 !important;
    }
    </style>