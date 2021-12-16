<template>
  <div class>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/tongji' }">数据统计</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
    <h4>*浏览量数据来源于百度统计(埋点信息正在开发中)</h4>
    <h2>奥林学院-后台统计</h2>
    <el-descriptions title="浏览量统计">
        <el-descriptions-item label="近三天浏览量次数"><el-tag size="small">{{tongjiList[0][0]+tongjiList[1][0]+tongjiList[2][0]}}</el-tag></el-descriptions-item>
        <el-descriptions-item label="近三天访问用户数"><el-tag size="small">{{tongjiList[0][1]+tongjiList[1][1]+tongjiList[2][1]}}</el-tag></el-descriptions-item>
        <el-descriptions-item label="近三天访问IP数"><el-tag size="small">{{tongjiList[0][2]+tongjiList[1][2]+tongjiList[2][2]}}</el-tag></el-descriptions-item>
    </el-descriptions>
    <el-descriptions title="用户行为统计">
        <el-descriptions-item label="总用户数"><el-tag size="small">{{userCount}}</el-tag></el-descriptions-item>
        <el-descriptions-item label="总登陆次数"><el-tag size="small">{{loginCount}}</el-tag></el-descriptions-item>
    </el-descriptions>
    <el-descriptions title="网站内容统计">
        <el-descriptions-item label="总新闻数"><el-tag size="small">{{newsCount}}</el-tag></el-descriptions-item>
        <el-descriptions-item label="总教师数"><el-tag size="small">{{teacherCount}}</el-tag></el-descriptions-item>
        <el-descriptions-item label="总轮播图"><el-tag size="small">{{picCount}}</el-tag></el-descriptions-item>
    </el-descriptions>
    <el-descriptions title="近50条用户记录"></el-descriptions>
    <el-table
        :data="logs"
        style="width: 100%"
    >
        <el-table-column prop="uname" label="用户名"></el-table-column>
        <el-table-column prop="action" label="执行操作"></el-table-column>
        <el-table-column prop="time" label="操作时间"></el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
import global from "../../global.js"
export default {
  components: {},
  data() {
    return {
      msg: "Hello 管理员管理",
      username: "",
      password: "",
      role: "newsadmin",
      tongjiList:{},
      userCount:0,
      newsCount:0,
      teacherCount:0,
      picCount:0,
      loginCount:0,
      logs:{}
    };
  },

  computed: {},
  watch: {},
  methods: {

  },
  mounted() {
    this.axios.get("api/tongji")
    .then(res=>{
      this.tongjiList = res.data.items[1];
      //console.log(this.tongjiList);
    });
    this.axios.post("api/getuserlist?uname="+global.user.uname+"&upass="+global.user.upass)
    .then(res=>{
      this.userCount = res.data.length;
      //console.log(this.userCount);
    });
    this.axios.get("api/news?type=1").then(res=>{
      this.newsCount = this.newsCount+res.data.length;
    });
    this.axios.get("api/news?type=2").then(res=>{
      this.newsCount = this.newsCount+res.data.length;
    });
    this.axios.get("api/news?type=3").then(res=>{
      this.newsCount = this.newsCount+res.data.length;
    });
    this.axios.get("api/teacher").then(res=>{
      this.teacherCount = res.data.length;
    });
    this.axios.get("api/mainpic").then(res=>{
      this.picCount = res.data.length;
    });
    this.axios.get("api/countlogin").then(res=>{
      this.loginCount = res.data;
    });
    this.axios.get("api/getlog?limit=50").then(res=>{
      this.logs = res.data;
    });
  }
};
</script>
<style>
.dialog-addUser h3 {
  width: 100px;
  margin-bottom: 20px;
}
.el-select {
  width: 100%;
}
</style>
