<template>
  <div class>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/userMange' }">用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <el-button size="mini" type="default" @click="dialoadAddView= true">添加新用户</el-button>
      <el-dialog class="dialog-addUser" title="添加新用户(只允许添加权限为1的学生角色)" :visible.sync="dialoadAddView">
        <div class="layout-row">
          <h3>姓名</h3>
          <el-input v-model="newname" placeholder="请输入姓名"></el-input>
        </div>
        <div class="layout-row">
          <h3>用户名</h3>
          <el-input v-model="newusername" placeholder="请输入用户名"></el-input>
        </div>
        <div class="layout-row">
          <h3>密码</h3>
          <el-input type="password" v-model="newpassword" placeholder="请输入密码"></el-input>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialoadAddView = false">取 消</el-button>
          <el-button type="primary" @click="handleAdd">确 定</el-button>
        </div>
      </el-dialog>
      <el-table
        :data="userList"
        style="width: 100%"
      >
        <el-table-column prop="uid" label="用户id"></el-table-column>
        <el-table-column prop="uname" label="用户名"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="utype" label="用户类型"></el-table-column>
        <el-table-column prop="regtime" label="修改时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="default" :disabled="scope.row.isChild == false" @click="userEdit(scope.row.uid)">修改密码</el-button>
            <el-button size="mini" type="danger" :disabled="scope.row.isChild == false" @click="userDelete(scope.row.uid)">删除</el-button>
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
      dialoadAddView: false,
      newusername: "",
      newpassword: "",
      newname: "",
      role: "newsadmin",
      userList:{}
    };
  },

  computed: {},
  watch: {},
  methods: {
    handleAdd() {
      let obj = {
        newusername: this.newusername,
        newpassword: this.newpassword,
        newname:this.newname,
        uname: global.user.uname,
        upass:global.user.upass
      };
      //console.log(obj);
      this.axios
        .post("/api/useradd", obj)
        .then(res => {
          //window.console.log(res);
            this.$message({
              type: "success",
              message: "添加成功"
            });
            this.dialoadAddView = false;
            this.axios.post("api/getuserlist?uname="+global.user.uname+"&upass="+global.user.upass)
            .then(res=>{
              this.userList = res.data;
              //console.log(this.userList);
            });
          })
        .catch(() => {
          this.$message({
            type: "danger",
            message: "用户状态异常!"
          });
        });
    },
    userEdit(uid) {
      //console.log(uid);
      this.$prompt("请输入密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/,
        inputErrorMessage:
          "密码需要有小写字母、大写字母、数字、特殊符号的两种及以上并且密码长度在6到16位"
      })
        .then(({ value }) => {
          let obj = {
            id: uid,
            newpass: value,
            uname: global.user.uname,
            upass: global.user.upass
          };
          console.log(obj);
          this.axios
            .post("/api/useredit", obj)
            .then(res => {
              if (res.data) {
                this.$message({
                  type: "success",
                  message: "密码修改成功"
                });
              } else {
                this.$message({
                  type: "danger",
                  message: "用户权限不足!"
                });
              }
            })
            .catch(() => {
              this.$message({
                type: "danger",
                message: "用户权限不足!"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消修改"
          });
        });
    },
    userDelete(id) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let obj = {
            uname: global.user.uname,
            upass: global.user.upass,
            delid:id
          };
          this.axios.post("api/deluser",obj)
          .then(() => {
            this.axios.post("api/getuserlist?uname="+global.user.uname+"&upass="+global.user.upass)
            .then(res=>{
              this.userList = res.data;
              //console.log(this.userList);
            });
            this.userList.splice(index, 1);
            this.$message({
              type: "success",
              message: "删除成功"
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
  },
  mounted() {
    this.axios.post("api/getuserlist?uname="+global.user.uname+"&upass="+global.user.upass)
    .then(res=>{
      this.userList = res.data;
      //console.log(this.userList);
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
