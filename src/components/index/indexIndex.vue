  <template>
  <div class='container'>
    <div class="pic">
      <div class="loginlabel">
        <div v-if="this.loginFlag==false" class="log" >
          <div class="loginText">
            用户登陆
          </div>
          <div class="logname">
             <el-input
                placeholder="请输入用户名"
                suffix-icon="el-icon-user"
                type="text"
                v-model="username">
             </el-input>
          </div>
          <div class="logpass">
             <el-input
                placeholder="请输入密码"
                suffix-icon="el-icon-key"
                type="password"
                @keyup.enter.native="login" 
                v-model="password">
             </el-input>
          </div>          
          <Vcode :show="isShow" @success="login" />
          <div class="logButton">
            <el-button type="primary" icon="el-icon-switch-button" @click="tovcode()">登陆</el-button>
          </div>
        </div>
        <div class="welcome" v-else>
          <div class="welText">
            <p>登陆成功!</p>
            <br>
            <p>{{this.name}} {{userType}},{{hello}}</p>
          </div>
          <div class="buttons">
            <el-button type="success" plain @click="toAdmin">进入后台</el-button>
            <el-button type="danger" plain @click="logout">退出登陆</el-button>
          </div>
        </div>
        <div class="tags">
            <div class="tagsLeft">
              <a class= "tag" href="http://i.nefu.edu.cn">数字东林</a>
              <a class= "tag" href="http://jwcnew.nefu.edu.cn/dblydx_jsxsd/">东林教务</a>
              <a class= "tag" href="https://cas.webvpn.nefu.edu.cn/cas/login">WebVPN</a>
              <a class= "tag" href="https://oa.webvpn.nefu.edu.cn/">东林办公</a>
            </div>
            <div class="tagsRight">
              <a class= "tag" href="https://mail.nefu.edu.cn/">东林邮箱</a>
              <a class= "tag" href="https://lib.nefu.edu.cn/">阅览系统</a>
              <a class= "tag" href="https://tel.nefu.edu.cn/">常用电话</a>
              <a class= "tag" href="https://cwcweb.nefu.edu.cn/">东林财务</a>
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
  import Vcode from "vue-puzzle-vcode";
  export default {

  components: {
    Vcode
  },
  data () {
    return {
        totalNumber:10,
        maxNumber:3,
        maxTeacher:4,
        totalTeacher:4,
        activeName: "jw",
        username: "",
        password: "",
        name:"",
        teacher:{},
        loginFlag:false,
        jw_news:{},
        notice_news:{},
        mainpic:{},
        good_news:{},
        isShow:false
        }
  },

  computed: {
    tovcode() {
      //console.log(this.username);
      if (this.username==""||this.password==""){
          this.$message({
                type: "danger",
                message: "请输入用户名和密码"
              });
          return;
        }
      else{
        this.isShow = true;
      }
    },

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
        }else{
          return "超级管理"
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
        window.location.href="/#/readNews/"+id;
      },
      goTeacher(id){
        //console.log(id);
        window.location.href="/#/teachers/"+id;
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
        this.name = null;
        this.loginFlag = false;
        localStorage.removeItem('user');
      },
      login() {
        this.isShow = false;
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
              this.name = global.user.name;
              this.loginFlag = true;
              localStorage.setItem('user', JSON.stringify(global.user));
            }
          })        
            
      }
  },
  // 生命周期 - 创建之前
  beforeCreate () {
    console.log("老师好!我是计科一班赵云浩");
    console.log("这是个vue+servlet的前后端分离项目,耗费了60+小时时间码字,所有项目代码都可以在本人Github浏览,欢迎大家去围观屎山");
    console.log("前台网页功能不是很多,但是后台管理功能比较齐全,请老师细细体验");
    console.log("说下核心思想:我是想做成一个门户站,是想集成数字东林接口及webVPN做成一个更好看的学院官网");
    console.log("但是WebVPN的接口调用起来比较困难还不稳定所以放弃了");
    console.log("我争取把所有能想到的后台功能都写进去了,为后期迭代节省下很多时间");
    console.log("接口大部分用的是post(有一些用get的是来不及修改了)");
    console.log("用户名密码均为admin,也欢迎各位同学帮我测试找bug~");
    //获取jw 
      this.axios.get("api/news?type=1").then(res=>{
        this.jw_news = res.data;
        this.totalNumber = res.data.length
        //console.log("thisjw->",this.jw_news);
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
        //console.log("mainpic->",this.mainpic);
      })
      //console.log(localStorage.getItem('user'));
      
  },
  mounted(){
    if (localStorage.getItem('user')){
    let u ={
        uname:JSON.parse(localStorage.getItem('user')).uname,
        upass:JSON.parse(localStorage.getItem('user')).upass,
        uid:JSON.parse(localStorage.getItem('user')).uid,
        name:JSON.parse(localStorage.getItem('user')).name,
        regtime:JSON.parse(localStorage.getItem('user')).regtime
      }
      //console.log(u)
      global.setUser(u);
      if (global.user.name){
        this.name = global.user.name;
        this.loginFlag = true;
      }
    }
      //console.log(this.name)
  }
  }
  </script>

  <style scoped>
  .container{
    width: 100%;
    overflow:hidden;
  }
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
    max-width: 100%;
    height: 200px;
    margin: auto;
    
  }
  .teacher h4, .teacher h5{
    margin: auto;
  }
  .teachers{
    width: 100%;
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
  .buttons{
    display: flex;
    margin: 10px 20%;
  }
  .welText{
    text-align:center;
    font-size: 25px;
    padding: 10px;
    margin: 10px;
  }
  .logButton{
    width: 30%;
    margin: 0 auto;
  }
  .logname, .logpass{
    width: 70%;
    margin: 0 auto;
    padding: 0 0 10px 0;
  }
  .loginText{
    text-align:center;
    font-size: 25px;
    padding: 10px;
    margin: 10px;
  }
  .loginlabel{
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 5%;
    width: 350px;
    justify-content: left;
    z-index: 100;
    border: #b5b5b5 groove;
    /* bottom: calc((100% - 350px) * 0.5); */
    background: #86869dc2;
    height: 50%;
    max-height: 500px;
    border-radius:30px;
    box-shadow: 11px 11px 13px 0px #5d626e85;
    margin-top: 20px;
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
    width: 100%;
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
    width: 100%;
    margin: auto;
    padding: 20px;
  }
  .newsPicimg{
    width: 100%;
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

  </style>
