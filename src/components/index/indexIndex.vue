<template>
<div class=''>
  <div class="pic">
        
    <div class="loginlabel">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
          <h2 class="center">用户登陆</h2>
          <div v-if="this.loginFlag==false" class="login">
            <el-input
              placeholder="请输入用户名"
              class="marginTop10 center"
              v-model="username"
              @input="updataUsername"
              type="text"
            >
              <template slot="prepend">账号：</template>
            </el-input>
            <el-input
              placeholder="请输入密码"
              class="marginTop10 center"
              :value="password"
              @input="updataPassword"
              @keyup.enter.native="login" 
              type="password"
            >
              <template slot="prepend">密码：</template>
            </el-input>
            
              <el-button class="marginTop10 loginButton" type="primary"  @click="login">登录</el-button>
            
          </div>
          <div v-else class="welBox">
            <div class="welcome">

              {{this.username}} {{userType}},{{hello}}
            </div>
            <div>
            <el-button size="mini" @click="toAdmin">管理</el-button>
            <el-button size="mini" @click="logout">退出</el-button>
            </div>
          </div>
          </el-col>
          <div class="tags">
            <div class="tagsLeft">
              <a class= "tag" href="http://i.nefu.edu.cn">数字东林</a>
              <a class= "tag" href="http://i.nefu.edu.cn">数字东林</a>
              <a class= "tag" href="http://i.nefu.edu.cn">数字东林</a>
              <a class= "tag" href="http://i.nefu.edu.cn">数字东林</a>
              <a class= "tag" href="http://i.nefu.edu.cn">数字东林</a>
            </div>
            <div class="tagsRight">
              <a class= "tag" href="http://i.nefu.edu.cn">数字东林</a>
              <a class= "tag" href="http://i.nefu.edu.cn">数字东林</a>
              <a class= "tag" href="http://i.nefu.edu.cn">数字东林</a>
              <a class= "tag" href="http://i.nefu.edu.cn">数字东林</a>
              <a class= "tag" href="http://i.nefu.edu.cn">数字东林</a>
            </div>
            
          </div>
          
       
    </div>
    <div class="swiper">
      <el-carousel height="500px" indicator-position="outside">
          <el-carousel-item v-for="item in mainpic" :key="item.index" v-if="item.vaild" >
            <img width="100%" :src="item.url"  alt />
          </el-carousel-item>
    </el-carousel>
    </div>
    <div class="blank_h"></div>
  </div>
  <div class="content">
    <div class="aboutus">
      <div class="aboutusTitle" id="aboutus">关于奥林</div>
      <div class="aboutusCont">
        <div class="aboutusPic">      
          <img src="https://aulin.nefu.edu.cn/__local/A/7D/D5/09AD7417AC236B15F6A19B456E7_636034F3_3DB0D.png" width="100%">
        </div>
        <div class="aboutusContent">
            <p>学院以“引进优质教育资源，提高人才培养质量”为宗旨，通过深度融合中外双方的先进教育理念和优质教育资源，以“质量为本、创新为道、全球视野、追求卓越”为学院发展的核心理念，实行国际化办学体制机制、创新和探索拔尖创新人才培养、一流师资队伍聘任管理、学科交叉，培养具有国际视野、创新精神和实践能力的国际创新型人才！</p>
        </div>
      </div>
      
    </div>
    <div class="news">
      <div class="aboutusTitle" id="aboutus">奥林要闻</div>
      <el-row :gutter="40" class="content-row" id="news">
        <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" class="news">
          <el-tabs v-model="activeName" >
            <el-tab-pane label="教学教务" name="jw">
              <ul
                v-for="(item, index) in this.jw_news"
                  v-if="index < maxNumber"
                  :key="index"
                  @click="goNews(item.id)"
              >
                <div class="newsShow">
                <li style="display:flex ">
                  <div class="newsPic">
                    <img class="newsPicimg" :src = "item.pic" />
                  </div>
                  <div class="newsText">
                      <div class="newsTitle">
                        <h3>{{item.title}}</h3>
                      </div>
                      <div class="newsContent">
                        <p>{{item.shortContent}}</p>
                      </div>
                      <div class="newsShowmore">
                        <h5>[查看更多]</h5>
                      </div>
                  </div>              
                  
                </li>
              </div>
              </ul>
              
            </el-tab-pane>
            <el-tab-pane label="通知公告" name="notice">
              <ul
                v-for="(item, index) in this.notice_news"
                  v-if="index < maxNumber"
                  :key="index"
                  @click="goNews(item.id)"
              >
                <div class="newsShow">
                <li style="display:flex ">
                  <div class="newsPic">
                    <img class="newsPicimg" :src = "item.pic" />
                  </div>
                  <div class="newsText">
                      <div class="newsTitle">
                        <h3>{{item.title}}</h3>
                      </div>
                      <div class="newsContent">
                        <p>{{item.shortContent}}</p>
                      </div>
                      <div class="newsShowmore">
                        <h5>[查看更多]</h5>
                      </div>
                  </div>              
                  
                </li>
              </div>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="战果捷报" name="good">
             <ul
                v-for="(item, index) in this.good_news"
                  v-if="index < maxNumber"
                  :key="index"
                  @click="goNews(item.id)"
              >
                <div class="newsShow">
                <li style="display:flex ">
                  <div class="newsPic">
                    <img class="newsPicimg" :src = "item.pic" />
                  </div>
                  <div class="newsText">
                      <div class="newsTitle">
                        <h3>{{item.title}}</h3>
                      </div>
                      <div class="newsContent">
                        <p>{{item.shortContent}}</p>
                      </div>
                      <div class="newsShowmore">
                        <h5>[查看更多]</h5>
                      </div>
                  </div>              
                  
                </li>
              </div>
              </ul>
            </el-tab-pane>
           
          </el-tabs>
        </el-col>
      <div class="showMore" @click="showMore('news')">[查看更多]</div>
      </el-row>
      
    </div>
    <div class="teachers">
      <div class="aboutusTitle" id="aboutus">师资力量</div>
      <div class="teacherRow">
        <div class="teacher"
            v-for="(item, index) in this.teacher"
            v-if="index < maxTeacher"
            :key="index"
            @click="goTeacher(item.id)"
        >
          <img :src="item.mainpic">
          <h4>{{item.name}}</h4>
          <h5>{{item.zhicheng}}</h5>
        </div>
      </div>
      <div class="showMore" @click="showMore('teacher')">[查看更多]</div>
    </div>
  </div>
</div>


</template>

<script>
// import global_ from "../Global";
import global from '../../global.js';
export default {

components: {},
data () {
   return {
      totalNumber:10,
      maxNumber:3,
      maxTeacher:4,
      totalTeacher:4,
      activeName: "jw",
      username: "",
      password: "",
      teacher:{},
      loginFlag:false,
      jw_news:{},
      notice_news:{},
      mainpic:{},
      good_news:{}
      }
},

computed: {
    hello() {
      let date = new Date().getHours();
      if (date >= 7 && date <= 11) {
        return "早上好，今天又是元气满满的一天!";
      } else if (date > 11 && date <= 13) {
        return "中午好，午间注意休息哦!";
      } else if (date > 13 && date < 18) {
        return "下午好!";
      } else if (date >= 18 && date <= 24) {
        return "晚上好!";
      } else {
        return "夜深了，早点休息!";
      }
    },
    userType(){
      let type = global.user.utype;
      if (type<0){
        return "程序错误, 请强制刷新或联系管理员!";
      }else if(type < 5){
        return "同学"
      }else if(type < 10){
        return "老师"
      }else if(type < 95){
        return "管理"
      }else if(type < 100){
        return "超级管理"
      }else{
        return "爹"
      }
    }
},
watch: {},
methods: {
    showMore(name){
      if (name == "teacher"){
        if (this.maxTeacher>this.totalTeacher){
          this.$message({
              type: "danger",
              message: "一点也没有了 X﹏X"
            });
        }
        else{
          this.maxTeacher = this.maxTeacher+4;
        }

      }
      if (name == "news"){
        if (this.maxNumber>this.totalNumber){
          this.$message({
              type: "danger",
              message: "一点也没有了 X﹏X"
            });
        }
        else{
          this.maxNumber = this.maxNumber+3;
        }
      }
    },
    goNews(id){
      //console.log(id);
      window.location.href="/index#/readNews/"+id;
    },
    goTeacher(id){
      //console.log(id);
      window.location.href="/index#/teachers/"+id;
    },
    updataUsername(e) {
      this.username = e;
    },
    updataPassword(e) {
      this.password = e;
    },
    toAdmin() {
      this.$router.push("/admin");
    },
    logout() {
      this.username = "";
      this.loginFlag = false;
    },
    login() {
      if (this.username==""||this.password==""){
        this.$message({
              type: "danger",
              message: "请输入用户名和密码"
            });
        return;
      }
      this.axios
        .post("/api/login?uname=" + this.username + "&upass=" + this.password)
        .then(res => {
          if (res.data == '用户名或密码错误'){
            this.$message({
              type: "danger",
              message: res.data
            });
          }
          else {
            global.setUser(res.data);
            this.username = global.user.uname;
            this.loginFlag = true;
            //console.log(global.user);
          }
        })        
          
    }
},
// 生命周期 - 创建之前
beforeCreate () {
  //获取jw 
    this.axios.get("api/news?type=1").then(res=>{
      this.jw_news = res.data;
      this.totalNumber = res.data.length
      console.log("thisjw->",this.jw_news);
    });
    //获取notice
    this.axios.get("api/news?type=2").then(res=>{
      this.notice_news = res.data;
      this.totalNumber = res.data.length
      //console.log("thisnt->",this.notice_news);
    });
    //获取good
    this.axios.get("api/news?type=3").then(res=>{
      this.good_news = res.data;     
      this.totalNumber = res.data.length
      //console.log("thisgd->",this.good_news);
    })
    //teacher
    this.axios.get("api/teacher").then(res=>{
      this.teacher = res.data;     
      this.totalTeacher = res.data.length;
      //console.log("thist->",this.teacher);
    })
    this.axios.get("api/mainpic").then(res=>{
      this.mainpic = res.data;     
      console.log("mainpic->",this.mainpic);
    })
},
// 生命周期 - 挂载之前
beforeMount () {},
// 生命周期 - 更新之前
beforeUpdate () {},
// 生命周期 - 更新之后
updated () {},
// 生命周期 - 销毁之前
beforeDestroy () {},
// 生命周期 - 销毁完成
destroyed () {}
}
</script>

<style>

  .login{
  padding: 20px;
  }
  .loginButton{
  margin: auto 30%;
  padding: 12px 60px;
}
</style>

<style scoped>

.teacher{
  display: flex;
  flex-direction: column;
  margin: 2%;
  transition: 0.3s;
  border-style: groove;
  padding: 2%;
  width: 16%;
}
.teacher:hover{
  transition: 0.3s;
  background: #c5e4d4;
  cursor: pointer;
  box-shadow: 2px 2px 10px #475669;
}
.teacher img{
  height: 200px;
  margin: auto;
  
}
.teacher h4, .teacher h5{
  margin: auto;
}
.teachers{
  display: flex;
  flex-direction: column;
}
.teacherRow{
  display: flex;
  flex-wrap: wrap;
}
.showMore{
  margin: auto;
  transition: 0.3s;
}
.showMore:hover{
  color: #599cf8;
  font-size: 20px;
  transition: 0.3s;
  cursor: pointer;
}
.aboutus{
  display: flex;
  flex-direction: column;
}
.aboutusTitle{
  border-bottom: solid #e5e7ec 2px;
  margin: 0 0 10px 0;
  font-size: 30px;
}
.aboutusCont{
  display: flex;
}
.aboutusContent{
  padding: 0 30px;
  font-size: 20px;
  text-align: justify;
  text-indent: 40px;
}
.pic{
  display: flex;
}
.loginlabel{
  position: absolute;
  right: 5%;
  width: 350px;
  justify-content: left;
  z-index: 100;
  border: #b5b5b5 groove;
  bottom: calc((100% - 350px) * 0.5);
  background: #86869dc2;
  height: 50%;
  border-radius:30px;
  box-shadow: 11px 11px 13px 0px #5d626e85;
}

.swiper{
  position: absolute;
  z-index: 90;
  justify-content: center;
  width: 100%;
}
.blank_h{
  height: 490px;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.content {
  display: flex;
  max-width: 1080px;
  /* margin: 0; */
  /* display: flex; */
  padding: 40px 0px;
  /* justify-content: space-between; */
  flex-direction: column;
}
.content-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.news {
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  display: flex;
  border: none;
}
.news li {
  margin: auto;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.3s;
  /* width: 1000px; */
  width: 95%;
  height: 280px;
  border: groove #81c5a5;
  background: #f1f5f4;
  border-radius:5px
}
.news li:hover {
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  background: #c5e4d4;
  box-shadow: 2px 2px 10px #475669;
}
.newsShow{
  height: 300px;
  padding: 10px;
  display: flex;
}
.newsPic{
  width: 400px;
  margin: auto;
  padding: 20px;
}
.newsPicimg{
  width: 360px;
  max-height: 245px;
  overflow:hidden;
}
.newsText{
  display:flex;
  flex-direction:column;
  text-indent:30px;
}
.newsTitle{
  margin: 0 auto;
  flex-direction:column;
  width: 100%;
  padding-bottom: 10px;
  overflow:hidden; 
  text-overflow:ellipsis;
  transition: 0.3s;
}
.news li:hover .newsTitle{
  color: #599cf8;

  transition: 0.3s;
}
.newsContent{
  margin: 0 auto;
  flex-direction:column;
  padding-right: 20px;
  text-align:justify;
}
.newsShowmore{
  align-items:flex-end; 
  margin-left: auto;
}
.login {
  width: 85%;
  /*max-width: 350px; */
  border-radius: 20px;
  /* border: 2px solid #034567; */
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.1);
  height: 160px;
}
.tags {
  list-style: none;
  margin: 20px;
  display: flex;
  /* flex-direction: column; */
  width: 200px;
  margin: auto;
}
.tags li{
  width: 50%;
  float: left;
  text-align: center;
}
.tagsLeft,.tagsRight{
  display: flex;
  flex-direction: column;
}
.tagsRight{
  justify-content: flex-end;
  margin-left: auto;
}
.tag{
  margin: 3px 0;
  text-decoration:none;
  color: #475669;
  background-color: #35c3e98a;
  border-radius: 5px;
  padding: 3px;
}
.marginTop10 {
  margin-top: 10px;
}
.center{
  text-align: center;
  margin: 1% 10%;

}
.welBox{
  display: flex;
  flex-direction: column;
}
.welcome{
  margin: auto;
}
</style>
