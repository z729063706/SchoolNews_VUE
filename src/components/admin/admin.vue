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
