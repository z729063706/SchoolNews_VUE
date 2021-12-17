<template>
  <div class>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/manage' }">新闻管理</el-breadcrumb-item>
      <el-select v-model="type" @change="changeNewType" class="typeSelecter">
        <el-option value="1" label="教学教务">教学教务</el-option>
        <el-option value="2" label="通知公告">通知公告</el-option>
        <el-option value="3" label="战果捷报">战果捷报</el-option>
      </el-select>
    </el-breadcrumb>
    <div style="margin:10px"></div>

    <el-table :data="news.slice(tableData.currentNum,tableData.currentNum+tableData.num)" border style="width: 100%">
      <el-table-column prop="creatTime" label="日期" width="180"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="auther" width="60" label="作者"></el-table-column>
      <el-table-column prop="type" width="120" label="类型">{{newsType(type)}}</el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="handleView(scope.row.id)">查看</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :page-size="1"
        :current-page="tableData.Page"
        :total="news.length/tableData.num"
        @current-change="changePage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import global from '../../global.js';
// Vue.prototype.$globalUser = global;
export default {
  components: {},
  data() {
    return {
      type: "1",
      tableData: {
        currentNum:0,
        num:10,
        page:1
      },
      news:{},
    };
  },

  computed: {},
  watch: {},
  methods: {
    
    newsType(type){
      if (type == '1'){
        return "教学教务";
      }else if(type == '2'){
        return "通知公告"
      }else if(type == '3'){
        return "战果捷报"
      }else{
        return "BUG!!!!"
      }
    },


    changePage(page) {
      this.tableData.currentNum = 10*(page-1)
    },
    changeNewType() {
      this.axios.get("api/news?type="+this.type).then(res=>{
      this.news = res.data;
    });
    },
    handleView(id) {
      //console.log(id)
      this.$router.push({
        path: "/readNews/"+id,
      });
    },
    handleDelete(id) {
      this.$confirm("此操作将永久删除该新闻, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //console.log(global.user);
          this.axios.get("api/delnews?id="+id+"&uname="+global.user.uname+"&upass="+global.user.upass)
          .then(() => {
            this.changeNewType()
            //this.tableData.list.splice(0, 1);
            this.$message({
              type: "success",
              message: "删除成功"
            });
          })
          .catch((e)=>{
            this.$message({
            type: "error",
            message: "用户权限不足!"+e
          });
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "操作取消"
          });
        });
    },
    typeIdToText(type) {
      switch (type) {
        case 0:
          return "热点新闻";
        case 1:
          return "校园快讯";
        case 2:
          return "媒体白云";
        case 3:
          return "媒体白云";
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.changeNewType();
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //window.console.log(this.tableData)
    // this.tableData = this.news.hot;
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
.pagination {
  float: right;
}
.el-select{
  width: auto;
}
.typeSelecter {
  float: right;
}
</style>
