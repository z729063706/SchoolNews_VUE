<template>
  <div class>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/mainpic' }">轮播图管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <el-button size="mini" type="default" @click="dialoadAddView= true">添加新图片</el-button>
      <el-dialog class="dialog-addUser" title="添加新图片" :visible.sync="dialoadAddView">
        <div class="layout-row">
          <h3>图片地址</h3>
          <el-input v-model="picurl" placeholder="请输入图片地址"></el-input>
        </div>
        <div class="layout-row">
          <h3>详细描述</h3>
          <el-input v-model="piccontent" placeholder="请输入图片描述"></el-input>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialoadAddView = false">取 消</el-button>
          <el-button type="primary" @click="picAdd">确 定</el-button>
        </div>
      </el-dialog>
      <el-table
        :data="picList"
        :row-class-name="isVaild"
        style="width: 100%"
      >
        <el-table-column prop="id" label="轮播图id"></el-table-column>
        <el-table-column prop="url" label="图片地址"></el-table-column>
        <el-table-column prop="content" label="图片描述"></el-table-column>
        <el-table-column prop="inserttime" label="日期" width="180"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="picDelete(scope.row.id)">删除</el-button>
            <el-button size="mini" type="danger" @click="picSwitch(scope.row.id)">{{Vaild(scope.row.vaild)}}</el-button>
          </template>
        </el-table-column>
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
      picurl:"",
      piccontent:"",
      role: "newsadmin",
      dialoadAddView: false,
      picList:{}
    };
  },

  computed: {},
  watch: {},
  methods: {
    Vaild(v){
      if (v == true){
        return '禁用';
      }
      else{
        return '启用';
      }
    },
    isVaild({row, rowIndex}){
      //console.log(row,rowIndex);
      if (row.vaild === false) {
          return 'inVaildRow';
        }
    },
    picAdd() {
      let obj = {
        uname: global.user.uname,
        upass: global.user.upass,
        picurl: this.picurl,
        piccontent: this.piccontent
      };
      //console.log(obj);
      this.axios
        .post("/api/addpic", obj)
        .then(res => {
            this.$message({
              type: "success",
              message: "添加成功"
            });
            this.dialoadAddView = false;
            this.axios.get("api/mainpic")
            .then(res=>{
              this.picList = res.data;
              //console.log(this.picList);
            });
            this.picList.splice(0, 1);
        })
        .catch(() => {
          this.$message({
              type: "error",
              message: "系统错误"
            });
        });
    },
    picDelete(id) {
      //console.log(id);
      this.$confirm("此操作将永久删除该图片, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let obj = {
            uname: global.user.uname,
            upass: global.user.upass,
            delid: id
          };
          this.axios.post("api/delpic",obj)
          .then(() => {
            this.axios.get("api/mainpic")
            .then(res=>{
              this.picList = res.data;
              //console.log(this.picList);
            });
            this.picList.splice(0, 1);
            this.$message({
              type: "success",
              message: "删除成功"
            });
          })
          .catch(() =>{
            this.$message({
            type: "error",
            message: "服务异常!"
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
  picSwitch(id){
    let obj = {
            uname: global.user.uname,
            upass: global.user.upass,
            switchid: id
          };
    this.axios.post("api/switchpic",obj)
          .then(() => {
            this.axios.get("api/mainpic")
            .then(res=>{
              this.picList = res.data;
            });
            this.picList.splice(0, 1);
            this.$message({
              type: "success",
              message: "操作成功"
            });
          })
          .catch(()=>{
            this.$message({
              type: "error",
              message: "服务异常"
            });
          });

  },
  },

  mounted() {
    this.axios.get("api/mainpic")
    .then(res=>{
      this.picList = res.data;
      //console.log(this.picList);
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
.el-table .inVaildRow {
    background: #f0b9b7 !important ;
  }
</style>
