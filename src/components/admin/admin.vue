<template>
  <el-menu class>
    <el-container>
      <!-- <el-header>
        <logo />
      </el-header> -->
      <el-container>
        <el-aside width="180px">
          <el-row class="left">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :router="true"
            >
              <el-menu-item index="/admin/tongji">
                <i class="el-icon-monitor"></i>
                <span slot="title">网站统计</span>
              </el-menu-item>
              <el-menu-item index="/admin/manage">
                <i class="el-icon-s-management"></i>
                <span slot="title">新闻管理</span>
              </el-menu-item>
              <el-menu-item index="/admin/publish">
                <i class="el-icon-s-finance"></i>
                <span slot="title">发布新闻</span>
              </el-menu-item>
              <el-menu-item index="/admin/userMange">
                <i class="el-icon-user-solid"></i>
                <span slot="title">用户管理</span>
              </el-menu-item>
              <el-menu-item index="/admin/teacher">
                <i class="el-icon-s-custom"></i>
                <span slot="title">教师信息</span>
              </el-menu-item>
              <el-menu-item index="/admin/mainpic">
                <i class="el-icon-picture"></i>
                <span slot="title">首页轮播图管理</span>
              </el-menu-item>
            </el-menu>
          </el-row>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-menu>
</template>

<script>
// import logo from "../logo";
export default {
  components: {
    //logo
  },
  data() {
    return {
      msg: "Hello Vue",
      true: true
    };
  },
  mounted(){
    console.log("Hello!");
    console.log("这是后台管理页面,这部分完成度比较高, 但是部分功能都依赖同一个接口, 我没有加本地缓存所以效率不是很高");
    console.log("顺便说下我的用户管理思想, 我给了一个utype到每一个用户, 普通用户是1, 管理是99, 超管是100, 高权限可以修改低权限的密码等配置");
    console.log("数据统计来自于百度统计等接口,其他数据都是在本地数据库读取的,前期开发时候login记录有点问题,所以登陆次数有点小多...");
    console.log("欢迎大家积极测试");

  }
};
</script>

<style>
.header {
  /* background-color: #b3c0d1; */
  padding:0;
}
.content {
  width: 1080px;
  line-height: 40px;
  margin: 0 auto;
}
.left {
  height: 100vh;
  background-color: rgb(84, 92, 100);
}
.main {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
