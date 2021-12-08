<template>
  <div class="bottom">
    <div class="content">
      <el-row>
        <el-col class="department" :xs="24" :sm="24" :md="20" :lg="20" :xl="20">
          <h2>职能部门</h2>
          <ul>
             <li>
                  <a href="https://kyy.nefu.edu.cn">乡村振兴办公室</a>
               
                </li>         

                <li>
                   <a href="https://kyy.nefu.edu.cn/">“2011 计划”办公室</a>              
                </li>         

                <li>
                   <a href="https://kyy.nefu.edu.cn/">平台管理办公室</a>              
                </li>
                <li>
                  <a href="https://kyy.nefu.edu.cn/">科技成果转化中心</a>            
                </li>
                 <li>
                    <a href="https://bwb.nefu.edu.cn/">保卫处</a>                    
                </li>
                <li>
                    <a href="https://rsc.nefu.edu.cn/">人事处</a>
                    
                </li>           

                <li>
                    <a href="https://rsc.nefu.edu.cn/">人才工作办公室</a>
                </li>
                <li>
                    <a href="https://ghfgb.nefu.edu.cn/">发展规划处</a>
                    
                </li>
               

            

                <li>
                    <a href="https://ghfgb.nefu.edu.cn/">政策法规办公室</a>
                </li>
                <li>
                    <a href="https://elab.nefu.edu.cn/">实验室管理与条件保障处</a>
                   
                </li>
                <li>
                    <a href="http://elab.nefu.edu.cn">分析测试中心</a>
                   
                </li>
                <li>
                    <a href="http://gjs.nefu.edu.cn/">教学研究与质量监控中心</a>
                   
                </li>



          </ul>
                                
        </el-col>
        <el-col class="department" :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
          <h2>党群部门</h2>
               
          <ul>
            <li>党委办</li>
            <li>统战部</li>
            <li>组织部</li>
            <li>宣传部</li>
            <li>关工委</li>
            <li>武装部</li>
        
          </ul>
                                
        </el-col>
      </el-row>
      <div class="dashBorder"></div>
      <el-row class="info">
        <el-col  :xs="24" :sm="24" :md="20" :lg="20" :xl="20">
          <img class="logo" src="/image/Aulin.png" alt="">
          <p>东北林业大学奥林学院，香坊区和兴路26号，150040 哈尔滨，中国</p>
          <p>Aulin College, Northeast Forestry University, No.26 Hexing Road Xiangfang District, Harbin, P.R.China 150040</p>
          <p>Tel:+86-451-82190799</p>
          <p>Email: aulin_nefu@163.com</p>
          <p>Fax:+86-451-82190822</p>
        </el-col>
        <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
          <h2>官方公众号</h2>
          <img class="wechat" src="/image/weChat.png" alt="">
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      msg: "Hello Vue"
    };
  },

  computed: {},
  watch: {},
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
.bottom {
  width: 100%;
  /* height: 560px; */
  background-color: #034567;
  color: white;
  padding-bottom: 20px;
}
.content {
  width: 80vw;
  max-width: 1080px;
}
.content p {
  text-align: left;
}
.department{
  padding: 20px 0px;

}
.department ul{
list-style: none;
}
.department ul li{
  float: left;
  padding-right:8px;
  padding-bottom: 6px;
  color: #7b7d8a
}
.info{
  border-top: 2px dashed #004f7b;
  padding-top: 25px;
}
.info .logo{
  height: 40px
}
.wechat{
height: 150px;
}
a{
  text-decoration:none;
  color: #7b7d8a;
}
</style>
