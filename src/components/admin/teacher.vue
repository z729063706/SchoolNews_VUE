<template>
  <div class>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/teacher' }">教师管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
    
      <el-table
        :data="teacherList"
        style="width: 100%"
      >
        <el-table-column prop="id" label="用户id"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="zhicheng" label="用户类型"></el-table-column>
        <el-table-column prop="worktime" label="修改时间"></el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button size="mini" type="default" disabled>修改(不可操作)</el-button>
            <el-button size="mini" type="danger" disabled>删除(不可操作)</el-button>
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
      role: "newsadmin",
      teacherList:{}
    };
  },

  computed: {},
  watch: {},
  methods: {
    handleAdd() {
      let obj = {
        _id: this.username,
        password: this.password,
        role: this.role
      };
      this.axios
        .post("/admin/addAdmin", obj)
        .then(res => {
          //window.console.log(res);
          if (res.data.msg == "添加成功") {
            this.$message({
              type: "success",
              message: "添加成功"
            });
            this.dialoadAddView = false;
            this.username=""
            this.password=""
          } else {
            this.$message({
              type: "danger",
              message: res.data.msg
            });
          }
        })
        .catch(() => {});
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
          //console.log(obj);
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
    this.axios.get("api/teacher")
    .then(res=>{
      this.teacherList = res.data;
      //console.log(this.teacherList);
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
