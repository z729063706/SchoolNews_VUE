<template>
  <div class>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/publish' }">发布</el-breadcrumb-item>
      <el-button size="mini" type="success" class="right" icon="el-icon-check" :disabled="publishing" @click="publish">立即发布</el-button>
    </el-breadcrumb>
    <div style="margin:10px"></div>
    <el-row>
      <el-col :span="20">
        <el-input v-model="news.title" placeholder="新闻标题"></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="news.type" popper-class="selector">
          <el-option value="1" label="教学教务">教学教务</el-option>
          <el-option value="2" label="通知公告">通知公告</el-option>
          <el-option value="3" label="战果捷报">战果捷报</el-option>
        </el-select>
      </el-col>
      <el-col>
        <el-input v-model="news.mainpic" placeholder="主图外链地址"></el-input>
      </el-col>
    </el-row>

    <wangeditor :catchData="catchData" />
  </div>
</template>

<script>
import newsTypeAdapter from "../../tool/newsTypeAdapterToEng.js";
import global from "../../global.js"
import wangeditor from "../tool/wangeditor";
export default {
  components: {
    wangeditor
  },
  data() {
    return {
      //newsContent:"",
      news: {
        title: "",
        content: "无内容",
        type: "1",
        mainpic:""
      },
      publishing:false
    };
  },

  computed: {},
  watch: {},
  methods: {
    catchData(newsContent) {
      this.news.content = newsContent;
    },
    publish() {
      if (this.news.title==""||this.news.mianpic==""){
        this.$message({
              type: "error",
              message: "请填写标题和主图链接!"
            });
        return;
      }
      let obj = {
        uname:global.user.uname,
        upass:global.user.upass,
        title: this.news.title,
        content: this.news.content,
        type:this.news.type,
        auther: global.user.name,
        mainpic:this.news.mainpic
      }
      //console.log(obj);
      this.publishing = true;
      this.axios
        .post("api/newsadd", obj)
        .then(res => {
          if (res.data>0) {
            this.publishing=false;
            this.$confirm("发布成功，立刻去看这条新闻", "提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            })
              .then(() => {
                //console.log(res.data);

                  this.$router.push({
                  path:'/readNews/'+res.data,
                })
              })
              .catch(() => {
                  this.$router.push({
                  path:'/admin/manage',
                })
              });
          }
        })
        .catch(err => {
          this.publishing=false;
          window.console.log(err);
        });
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
  },
  // 生命周期 - 创建之前
  beforeCreate() {},
  // 生命周期 - 挂载之前
  beforeMount() {},
  // 生命周期 - 更新之前
  beforeUpdate() {},
  // 生命周期 - 更新之后
  updated() {},
  // 生命周期 - 销毁之前
  beforeDestroy() {},
  // 生命周期 - 销毁完成
  destroyed() {}
};
</script>
<style scoped>
.right {
  float: right;
  padding: 10px;
  margin-right: 10px;
}
</style>
